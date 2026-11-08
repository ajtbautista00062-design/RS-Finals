// ───────── Derived content index + progress model ─────────
const Model = (function () {
  const LEC = {}, TOP = {}, CON = {}, FOR = {}, NOTE = {}, COV = {};
  DATA.lectures.forEach(l => { LEC[l.id] = l; });
  DATA.topics.forEach(t => { TOP[t.id] = t; });
  DATA.concepts.forEach(c => { CON[c.id] = c; });
  DATA.formulas.forEach(f => { FOR[f.id] = f; });
  DATA.notes.forEach(n => { NOTE[n.id] = n; });
  Object.keys(DATA.coverage).forEach(l => { COV[l] = {}; DATA.coverage[l].forEach(r => { COV[l][r[0]] = r; }); });

  // Every concept yields a definition→term identification item (stable id "D:<concept id>").
  const auto = DATA.concepts.map(c => ({
    id: 'D:' + c.id, type: 'ident', lec: c.lec, topic: c.topic, diff: 1, kind: 'def', auto: true,
    prompt: c.def, answer: c.term, alts: c.alts, p: c.p, cid: c.id,
    explain: 'Lesson: ' + TOP[c.topic].title + '.' + (c.note ? ' ' + c.note : '')
  }));
  const QUESTIONS = DATA.questions.concat(auto);
  const Q = {}; QUESTIONS.forEach(q => { Q[q.id] = q; });
  const byConcept = {}; QUESTIONS.forEach(q => { (byConcept[q.cid] = byConcept[q.cid] || []).push(q.id); });
  const topicsOf = lec => DATA.topics.filter(t => t.lec === lec);
  const conceptsOf = tid => DATA.concepts.filter(c => c.topic === tid);

  function slideOf(lec, p) { const r = COV[lec] && COV[lec][p]; return r ? r[1] : null; }
  function srcLabel(lec, p) { const s = slideOf(lec, p); return `${LEC[lec] ? LEC[lec].short.replace('Lectures', 'L').replace('Lecture ', 'L') : lec} · PDF p.${p}` + (s ? ` · slide ${s}` : ''); }
  function srcChips(lec, pages, x) {
    const list = (pages || []).slice().sort((a, b) => a - b).map(p => h('span.src-ref', { title: LEC[lec].file + ', PDF page ' + p + (slideOf(lec, p) ? ', printed slide ' + slideOf(lec, p) : '') }, srcLabel(lec, p)));
    (x || []).forEach(s => { const [l, p] = s.split(':'); list.push(h('span.src-ref', { title: LEC[l].file }, srcLabel(l, Number(p)))); });
    return h('span.src', { 'aria-label': 'Sources' }, list);
  }

  // ---- Progress ----
  let cache = null;
  Store.on(() => { cache = null; });
  function compute() {
    if (cache) return cache;
    const st = Store.state, today = Core.dateKey();
    const perConcept = {}, perQ = {};
    st.attempts.forEach(a => { (perConcept[a.c] = perConcept[a.c] || []).push(a); (perQ[a.q] = perQ[a.q] || []).push(a); });
    const status = {}; DATA.concepts.forEach(c => { status[c.id] = Core.conceptStatus(perConcept[c.id] || []); });
    const lec = {};
    DATA.lectures.forEach(l => { lec[l.id] = { concepts: 0, mastered: 0, learning: 0, attempts: 0, correct: 0 }; });
    DATA.concepts.forEach(c => { const L = lec[c.lec]; L.concepts++; if (status[c.id] === 'mastered') L.mastered++; else if (status[c.id] === 'learning') L.learning++; });
    const topic = {}; DATA.topics.forEach(t => { topic[t.id] = { attempts: 0, correct: 0, concepts: 0, mastered: 0 }; });
    DATA.concepts.forEach(c => { topic[c.topic].concepts++; if (status[c.id] === 'mastered') topic[c.topic].mastered++; });
    st.attempts.forEach(a => { const q = Q[a.q]; if (!q) return; lec[q.lec].attempts++; topic[q.topic].attempts++; if (a.ok) { lec[q.lec].correct++; topic[q.topic].correct++; } });
    const act = Core.dayActivity(st);
    const streak = Core.streaks(st, today);
    const due = dueCards(today);
    const mastered = Object.values(status).filter(s => s === 'mastered').length;
    const learning = Object.values(status).filter(s => s === 'learning').length;
    const weakTopics = DATA.topics.map(t => ({ t, a: topic[t.id] })).filter(x => x.a.attempts >= 3 && x.a.correct / x.a.attempts < 0.7).sort((x, y) => x.a.correct / x.a.attempts - y.a.correct / y.a.attempts);
    const overrides = st.attempts.filter(a => a.ov).length;
    cache = { today, perConcept, perQ, status, lec, topic, act, streak, due, mastered, learning, weakTopics, overrides, todayCount: act[today] || 0 };
    return cache;
  }

  // ---- Flashcards ----
  const cardKey = (cid, dir) => cid + '|' + dir;
  function dueCards(today) {
    const st = Store.state; let n = 0;
    Object.keys(st.cards).forEach(k => { if (st.cards[k].due <= today) n++; });
    return n;
  }
  function dueOn(day) { let n = 0; const cs = Store.state.cards; Object.keys(cs).forEach(k => { if (cs[k].due === day) n++; }); return n; }

  // ---- Recording ----
  function recordAttempt(q, ok, extra) {
    extra = extra || {};
    const s = nowStamp();
    const a = Object.assign({ t: s.t, d: s.d, tz: s.tz, q: q.id, c: q.cid, ty: q.type === 'mcq' ? 'mcq' : 'ident', ok: !!ok, hint: extra.hint || 0, rev: !!extra.rev, ov: !!extra.ov, mode: extra.mode || 'practice', g: String(extra.given || '').slice(0, 160) });
    Store.state.attempts.push(a); Store.trim(); Store.save();
    return a;
  }
  function overrideLast(q) { // learner says their wording was valid: recorded, never silent
    const arr = Store.state.attempts; for (let i = arr.length - 1; i >= 0; i--) if (arr[i].q === q.id) { arr[i].ok = true; arr[i].ov = true; Store.save(); return arr[i]; }
    return null;
  }
  function rateCard(cid, dir, rating) {
    const s = nowStamp(), key = cardKey(cid, dir);
    Store.state.cards[key] = Core.schedule(Store.state.cards[key], rating, s.d);
    Store.state.reviews.push({ t: s.t, d: s.d, k: key, r: rating }); Store.trim(); Store.save();
    return Store.state.cards[key];
  }
  function recordRecall(id, selfRating, mode) { const s = nowStamp(); Store.state.recall.push({ t: s.t, d: s.d, id, s: selfRating, m: mode || '' }); Store.trim(); Store.save(); }

  // ---- Pools ----
  function lastAttempt(qid) { const a = compute().perQ[qid]; return a ? a[a.length - 1] : null; }
  function pool(opts) {
    const c = compute(), st = Store.state; opts = opts || {};
    return QUESTIONS.filter(q => {
      if (opts.type && q.type !== opts.type) return false;
      if (opts.lecs && opts.lecs.length && !opts.lecs.includes(q.lec)) return false;
      if (opts.topics && opts.topics.length && !opts.topics.includes(q.topic)) return false;
      if (opts.diffs && opts.diffs.length && !opts.diffs.includes(q.diff)) return false;
      if (opts.kinds && opts.kinds.length && q.type === 'ident' && !opts.kinds.includes(q.kind)) return false;
      if (opts.autoOnly === false && q.auto) return false;
      const la = c.perQ[q.id], last = la && la[la.length - 1];
      switch (opts.filter) {
        case 'unanswered': return !la;
        case 'missed': return !!last && !last.ok;
        case 'everMissed': return !!la && la.some(a => !a.ok);
        case 'bookmarked': return !!(st.bookmarks.q[q.id] || st.bookmarks.c[q.cid] || st.bookmarks.t[q.topic]);
        case 'weak': return c.weakTopics.some(w => w.t.id === q.topic) || (c.status[q.cid] === 'learning' && c.perConcept[q.cid] && !c.perConcept[q.cid][c.perConcept[q.cid].length - 1].ok);
        case 'due': return ['d2t', 't2d'].some(d => { const k = st.cards[cardKey(q.cid, d)]; return k && k.due <= c.today; });
        default: return true;
      }
    });
  }
  function shuffle(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  // Prefer one question per concept before repeating a concept.
  function spread(list, n) {
    const by = {}; shuffle(list).forEach(q => { (by[q.cid] = by[q.cid] || []).push(q); });
    const out = []; let round = 0, added = true;
    while (out.length < n && added) { added = false; shuffle(Object.keys(by)).forEach(k => { if (out.length < n && by[k][round]) { out.push(by[k][round]); added = true; } }); round++; }
    return out;
  }

  return {
    lec: id => LEC[id], topic: id => TOP[id], concept: id => CON[id], formula: id => FOR[id], note: id => NOTE[id], q: id => Q[id],
    questions: QUESTIONS, byConcept, topicsOf, conceptsOf, slideOf, srcLabel, srcChips, coverageRow: (l, p) => COV[l] && COV[l][p],
    compute, cardKey, dueOn, recordAttempt, overrideLast, rateCard, recordRecall, lastAttempt, pool, shuffle, spread
  };
})();
