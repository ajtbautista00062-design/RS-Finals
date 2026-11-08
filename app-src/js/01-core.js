// ───────── Pure logic: dates, text normalization, answer checking, scheduling, progress ─────────
// No DOM access here, so the build can unit-test it in Node.

const Core = (function () {
  // ---- Local calendar dates (never UTC) ----
  const pad = n => String(n).padStart(2, '0');
  function dateKey(d) { d = d || new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function parseKey(k) { const [y, m, d] = k.split('-').map(Number); return new Date(y, m - 1, d); }
  function addDays(k, n) { const d = parseKey(k); d.setDate(d.getDate() + n); return dateKey(d); }
  function daysBetween(a, b) { // whole local days from a to b
    const A = parseKey(a), B = parseKey(b);
    return Math.round((Date.UTC(B.getFullYear(), B.getMonth(), B.getDate()) - Date.UTC(A.getFullYear(), A.getMonth(), A.getDate())) / 86400000);
  }
  const isKey = k => typeof k === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(k) && dateKey(parseKey(k)) === k;

  // ---- Text normalization for answer matching ----
  function norm(s) {
    return String(s == null ? '' : s)
      .normalize('NFKD').replace(/[̀-ͯ]/g, '')
      .toLowerCase()
      .replace(/[’‘`´]/g, "'").replace(/'s\b/g, 's').replace(/'/g, '')
      .replace(/&/g, ' and ')
      .replace(/[µμ]/g, 'u').replace(/[–—−]/g, '-')
      .replace(/[_\-/.,;:()\[\]{}"!?*+=<>|\\]/g, ' ')
      .replace(/\s+/g, ' ').trim()
      .replace(/^(the|a|an) /, '');
  }
  // Variant with parenthetical text removed: "Kinetic temperature (T_kin)" -> "kinetic temperature"
  const stripParen = s => String(s).replace(/\([^)]*\)/g, ' ');

  function candidates(answer, alts) {
    const out = new Set();
    [answer].concat(alts || []).forEach(a => {
      if (a == null || a === '') return;
      const n1 = norm(a), n2 = norm(stripParen(a));
      if (n1) out.add(n1); if (n2) out.add(n2);
      const m = String(a).match(/\(([^)]+)\)/); // "(MMU)" inside -> accept "MMU"
      if (m && m[1].length <= 12) { const n3 = norm(m[1]); if (n3 && !/^or /.test(n3)) out.add(n3); }
    });
    return [...out];
  }

  function parseNumber(input) {
    let s = String(input).trim().replace(/\s/g, '');
    if (/^-?\d{1,3}(,\d{3})+(\.\d+)?/.test(s)) s = s.replace(/,/g, '');      // 46,814 or 46,814.5
    else s = s.replace(',', '.');                                              // 0,65 -> 0.65
    s = s.replace(/[−–]/g, '-');
    const m = s.match(/-?\d*\.?\d+(e-?\d+)?/i);
    return m ? parseFloat(m[0]) : NaN;
  }

  function parseBands(input, n) {
    const s = String(input).toLowerCase().replace(/bands?|b(?=\d)/g, ' ').trim();
    if (/^\d+$/.test(s) && s.length === n) return s.split(''); // "432" -> 4,3,2 (single-digit bands only)
    return s.match(/\d{1,2}a?/g) || [];
  }

  function editDistance(a, b) { // Damerau–Levenshtein (optimal string alignment)
    const m = a.length, n = b.length; if (Math.abs(m - n) > 3) return 99;
    const d = Array.from({ length: m + 1 }, (_, i) => [i].concat(Array(n).fill(0)));
    for (let j = 1; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) {
      const c = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + c);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
    }
    return d[m][n];
  }

  // Returns {ok, how, near}. `near` is only a spelling hint and never counts as correct.
  function check(q, input) {
    const raw = String(input || '').trim();
    if (!raw) return { ok: false, how: 'empty', near: false };
    if (q.num) {
      let x = parseNumber(raw);
      if (isNaN(x)) return { ok: false, how: 'nan', near: false };
      if (q.num.pct && Math.abs(x) <= 1 && Math.abs(q.num.v) > 1) x *= 100;
      return { ok: Math.abs(x - q.num.v) <= (q.num.tol || 0) + 1e-9, how: 'num', near: false };
    }
    if (q.bands) {
      const toks = parseBands(raw, q.bands.length);
      const ok = toks.length === q.bands.length && toks.every((t, i) => t === String(q.bands[i]).toLowerCase());
      return { ok, how: 'bands', near: !ok && toks.length === q.bands.length && [...toks].sort().join() === [...q.bands].map(String).sort().join() ? 'order' : false };
    }
    const n = norm(raw), cands = candidates(q.answer, q.alts);
    if (cands.includes(n)) return { ok: true, how: 'exact', near: false };
    // Curated keyword groups: every group must appear (kw) or at least two groups (kw2).
    // Short stems (≤3 chars, e.g. "3", "no") must match whole words; longer stems may match inside words.
    const stemHit = stem => { const t = norm(stem); if (!t) return false; return t.length <= 3 ? new RegExp('(^| )' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '( |$)').test(n) : n.includes(t); };
    const groupHit = g => g.some(stemHit);
    const hasNeg = s => /(^| )(not|no|never|isnt|cannot)( |$)/.test(s);
    const negOk = cands.some(hasNeg) || !hasNeg(n);
    if (q.kw && q.kw.every(groupHit) && negOk) return { ok: true, how: 'kw', near: false };
    if (q.kw2 && q.kw2.filter(groupHit).length >= 2 && negOk) return { ok: true, how: 'kw2', near: false };
    let near = false;
    for (const c of cands) {
      const lim = c.length >= 9 ? 2 : c.length >= 5 ? 1 : 0;
      if (lim && editDistance(n, c) <= lim) { near = true; break; }
    }
    return { ok: false, how: 'none', near };
  }

  // ---- Hints: progressively more revealing, never the whole answer ----
  function hints(q) {
    if (q.h) return q.h;
    if (q.num) return ['A numeric answer is expected' + (q.num.pct ? ' (percent).' : '.'), 'Use the formula on the cited slide; check units.', 'Round as the question asks.'];
    if (q.bands) return [`${q.bands.length} band numbers in R, G, B order.`, `The first band is ${q.bands[0]}.`, `First two: ${q.bands[0]}, ${q.bands[1]}, …`];
    const a = stripParen(q.answer).replace(/\s+/g, ' ').trim();
    const words = a.split(' ');
    const h1 = `${words.length} word${words.length > 1 ? 's' : ''} · starts with “${a[0].toUpperCase()}”`;
    const mask = words.map(w => w.split('').map((ch, i) => (/[a-z0-9]/i.test(ch) ? (i === 0 || i === w.length - 1 ? ch : '•') : ch)).join('')).join(' ');
    const h3 = words.map(w => w.split('').map((ch, i) => (/[a-z0-9]/i.test(ch) ? (i % 2 === 0 ? ch : '•') : ch)).join('')).join(' ');
    return [h1, 'Pattern: ' + mask, 'More letters: ' + h3];
  }

  // ---- Spaced review (SM-2-style, documented in the app) ----
  // ratings: 0 Again, 1 Hard, 2 Good, 3 Easy. Intervals in days; due is a local date key.
  function schedule(card, rating, today) {
    const c = Object.assign({ ease: 2.5, ivl: 0, reps: 0, lapses: 0 }, card || {});
    if (rating === 0) { c.reps = 0; c.ivl = 0; c.lapses += 1; c.ease = Math.max(1.3, c.ease - 0.2); }
    else if (rating === 1) { c.ivl = c.reps === 0 ? 1 : Math.max(1, Math.round(c.ivl * 1.2)); c.ease = Math.max(1.3, c.ease - 0.15); c.reps += 1; }
    else if (rating === 2) { c.ivl = c.reps === 0 ? 1 : c.reps === 1 ? 3 : Math.max(c.ivl + 1, Math.round(c.ivl * c.ease)); c.reps += 1; }
    else { c.ivl = c.reps === 0 ? 3 : Math.max(c.ivl + 2, Math.round(c.ivl * c.ease * 1.3)); c.ease = Math.min(3.0, c.ease + 0.15); c.reps += 1; }
    c.ease = Math.round(c.ease * 100) / 100;
    c.due = addDays(today, c.ivl); c.last = today;
    return c;
  }
  const previewIntervals = (card, today) => [0, 1, 2, 3].map(r => schedule(card, r, today).ivl);

  // ---- Progress & mastery ----
  // Evidence counts only objective answers given without hints and before the answer was revealed.
  function conceptStatus(attempts) {
    // attempts: chronological list for one concept
    if (!attempts.length) return 'new';
    const last = attempts[attempts.length - 1];
    const good = attempts.filter(a => a.ok && !a.hint && !a.rev);
    const pairs = new Set(good.map(a => a.q + '|' + a.d));
    const qs = new Set(good.map(a => a.q)), days = new Set(good.map(a => a.d));
    const hasIdent = good.some(a => a.ty === 'ident');
    if (last.ok && !last.rev && pairs.size >= 2 && (qs.size >= 2 || days.size >= 2) && hasIdent) return 'mastered';
    return 'learning';
  }

  function dayActivity(state) { // { 'YYYY-MM-DD': count of completed study items }
    const m = {};
    const add = d => { m[d] = (m[d] || 0) + 1; };
    (state.attempts || []).forEach(a => add(a.d));
    (state.reviews || []).forEach(r => add(r.d));
    (state.recall || []).forEach(r => add(r.d));
    return m;
  }
  const STUDY_DAY_MIN = 5;
  function studyDays(state) {
    const act = dayActivity(state), set = new Set();
    Object.keys(act).forEach(d => { if (act[d] >= STUDY_DAY_MIN) set.add(d); });
    (state.exams || []).forEach(e => { if (e.done) set.add(e.d); });
    return set;
  }
  function streaks(state, today) {
    const days = studyDays(state);
    let cur = 0, d = days.has(today) ? today : addDays(today, -1);
    while (days.has(d)) { cur++; d = addDays(d, -1); }
    let longest = 0, run = 0, prev = null;
    [...days].sort().forEach(k => { run = prev && daysBetween(prev, k) === 1 ? run + 1 : 1; longest = Math.max(longest, run); prev = k; });
    return { current: cur, longest, todayDone: days.has(today), days };
  }

  return { dateKey, parseKey, addDays, daysBetween, isKey, norm, candidates, parseNumber, parseBands, editDistance, check, hints, schedule, previewIntervals, conceptStatus, dayActivity, studyDays, streaks, STUDY_DAY_MIN };
})();
