// ───────── Persistent state (versioned, validated, storage-failure tolerant) ─────────
const APP_ID = 'uav-recall-rs-finals';
const STORE_KEY = 'uavrecall.v1';
const SCHEMA = 1;
const MAX_ATTEMPTS = 40000, MAX_LOG = 40000;

// Pristine copy of this HTML for the "download offline reviewer" action (taken before the app touches the DOM).
const PRISTINE_HTML = (function () {
  try {
    const root = document.documentElement.cloneNode(true);
    ['data-theme', 'data-text', 'data-motion'].forEach(a => root.removeAttribute(a));
    ['app', 'toast', 'modal-root', 'print-root'].forEach(id => { const n = root.querySelector('#' + id); if (n) n.textContent = ''; });
    root.querySelectorAll('body > :not(#app):not(#toast):not(#modal-root):not(#print-root):not(script):not(noscript):not(.skip)').forEach(n => n.remove());
    const b = root.querySelector('body'); if (b) b.removeAttribute('class');
    return '<!DOCTYPE html>\n' + root.outerHTML;
  } catch (e) { return null; }
})();

function freshState() {
  return {
    app: APP_ID, v: SCHEMA, created: new Date().toISOString(), updated: null,
    settings: { theme: 'system', text: 'm', reading: false, motion: 'system', goal: 20, newPerDay: 20, examDate: null, timer: false },
    attempts: [], cards: {}, reviews: [], recall: [], exams: [], activeExam: null,
    bookmarks: { q: {}, c: {}, t: {} }, plan: {}, lessonsRead: {}, lastLesson: null
  };
}

const Store = (function () {
  let available = true, lastError = null, state = freshState(), saveTimer = null;
  const listeners = new Set();
  try { const k = '__uav_test__'; localStorage.setItem(k, '1'); localStorage.removeItem(k); } catch (e) { available = false; lastError = 'Browser storage is unavailable (private mode or blocked).'; }

  function load() {
    if (!available) return;
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) { const res = sanitize(JSON.parse(raw)); state = res.state; }
    } catch (e) { lastError = 'Saved progress could not be read and was left untouched. A fresh session started.'; }
  }
  function saveNow() {
    if (!available) return false;
    state.updated = new Date().toISOString();
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); lastError = null; return true; }
    catch (e) { lastError = 'Could not save progress (storage full or blocked). Export a backup to keep your work.'; listeners.forEach(f => f('error')); return false; }
  }
  function save() { clearTimeout(saveTimer); saveTimer = setTimeout(saveNow, 150); listeners.forEach(f => f('change')); }

  // Accept only known fields with correct types; drop anything else.
  function sanitize(obj) {
    const report = { attempts: 0, cards: 0, reviews: 0, recall: 0, exams: 0, plan: 0, dropped: 0 };
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) throw new Error('Not a progress object.');
    if (obj.app !== APP_ID) throw new Error('This file is not a UAV Recall progress backup.');
    if (typeof obj.v !== 'number' || obj.v > SCHEMA || obj.v < 1) throw new Error('Unsupported backup version ' + obj.v + '.');
    const s = freshState();
    s.created = typeof obj.created === 'string' ? obj.created.slice(0, 40) : s.created;
    const st = obj.settings || {};
    if (['light', 'dark', 'system'].includes(st.theme)) s.settings.theme = st.theme;
    if (['s', 'm', 'l', 'xl'].includes(st.text)) s.settings.text = st.text;
    if (typeof st.reading === 'boolean') s.settings.reading = st.reading;
    if (['system', 'reduce', 'full'].includes(st.motion)) s.settings.motion = st.motion;
    if (Number.isInteger(st.goal) && st.goal >= 1 && st.goal <= 500) s.settings.goal = st.goal;
    if (Number.isInteger(st.newPerDay) && st.newPerDay >= 0 && st.newPerDay <= 300) s.settings.newPerDay = st.newPerDay;
    if (st.examDate === null || Core.isKey(st.examDate)) s.settings.examDate = st.examDate || null;
    if (typeof st.timer === 'boolean') s.settings.timer = st.timer;
    const str = (v, n) => typeof v === 'string' ? v.slice(0, n) : '';
    (Array.isArray(obj.attempts) ? obj.attempts : []).forEach(a => {
      if (a && Core.isKey(a.d) && typeof a.q === 'string' && typeof a.ok === 'boolean') {
        s.attempts.push({ t: str(a.t, 40), d: a.d, tz: Number.isFinite(a.tz) ? a.tz : 0, q: str(a.q, 80), c: str(a.c, 80), ty: a.ty === 'mcq' ? 'mcq' : 'ident', ok: a.ok, hint: Number.isInteger(a.hint) ? Math.min(a.hint, 9) : 0, rev: !!a.rev, ov: !!a.ov, mode: str(a.mode, 16) || 'practice', g: str(a.g, 160) });
        report.attempts++;
      } else report.dropped++;
    });
    if (obj.cards && typeof obj.cards === 'object') Object.keys(obj.cards).slice(0, 5000).forEach(k => {
      const c = obj.cards[k];
      if (c && Core.isKey(c.due) && Number.isFinite(c.ease) && Number.isFinite(c.ivl)) { s.cards[str(k, 100)] = { ease: Math.min(3, Math.max(1.3, c.ease)), ivl: Math.max(0, Math.min(3650, Math.round(c.ivl))), reps: Number.isInteger(c.reps) ? c.reps : 0, lapses: Number.isInteger(c.lapses) ? c.lapses : 0, due: c.due, last: Core.isKey(c.last) ? c.last : c.due }; if (Core.isKey(c.first)) s.cards[str(k, 100)].first = c.first; report.cards++; }
      else report.dropped++;
    });
    (Array.isArray(obj.reviews) ? obj.reviews : []).forEach(r => { if (r && Core.isKey(r.d) && typeof r.k === 'string' && [0, 1, 2, 3].includes(r.r)) { s.reviews.push({ t: str(r.t, 40), d: r.d, k: str(r.k, 100), r: r.r }); report.reviews++; } else report.dropped++; });
    (Array.isArray(obj.recall) ? obj.recall : []).forEach(r => { if (r && Core.isKey(r.d) && typeof r.id === 'string' && ['got', 'partly', 'missed'].includes(r.s)) { s.recall.push({ t: str(r.t, 40), d: r.d, id: str(r.id, 100), s: r.s, m: str(r.m, 16) }); report.recall++; } else report.dropped++; });
    (Array.isArray(obj.exams) ? obj.exams : []).slice(-200).forEach(e => {
      if (e && Core.isKey(e.d) && Array.isArray(e.items)) {
        s.exams.push({ id: str(e.id, 40), t: str(e.t, 40), d: e.d, done: !!e.done, title: str(e.title, 80), n: e.items.length, dur: Number.isFinite(e.dur) ? e.dur : null, items: e.items.slice(0, 300).map(i => ({ q: str(i && i.q, 80), g: str(i && i.g, 160), ok: !!(i && i.ok), ov: !!(i && i.ov) })) });
        report.exams++;
      } else report.dropped++;
    });
    const bm = obj.bookmarks || {};
    ['q', 'c', 't'].forEach(k => { if (bm[k] && typeof bm[k] === 'object') Object.keys(bm[k]).slice(0, 3000).forEach(id => { if (bm[k][id]) s.bookmarks[k][str(id, 100)] = true; }); });
    if (obj.plan && typeof obj.plan === 'object') Object.keys(obj.plan).forEach(d => {
      if (Core.isKey(d) && Array.isArray(obj.plan[d])) { s.plan[d] = obj.plan[d].slice(0, 50).filter(t => t && typeof t.text === 'string').map(t => ({ id: str(t.id, 40) || uid(), text: t.text.slice(0, 300), done: !!t.done, auto: !!t.auto, topic: str(t.topic, 40) })); report.plan += s.plan[d].length; }
    });
    if (obj.lessonsRead && typeof obj.lessonsRead === 'object') Object.keys(obj.lessonsRead).forEach(k => { if (Core.isKey(obj.lessonsRead[k])) s.lessonsRead[str(k, 40)] = obj.lessonsRead[k]; });
    if (typeof obj.lastLesson === 'string') s.lastLesson = obj.lastLesson.slice(0, 40);
    const ae = obj.activeExam;
    if (ae && typeof ae === 'object' && Array.isArray(ae.items) && ae.items.length && Number.isFinite(ae.startMs)) {
      const items = ae.items.slice(0, 300).filter(i => i && typeof i.q === 'string').map(i => ({ q: i.q.slice(0, 80), order: Array.isArray(i.order) && i.order.length === 4 && i.order.every(n => [0, 1, 2, 3].includes(n)) ? i.order.slice() : null }));
      const answers = {}, flags = {};
      if (ae.answers && typeof ae.answers === 'object') Object.keys(ae.answers).forEach(k => { const v = ae.answers[k]; if (typeof v === 'string') answers[k] = v.slice(0, 160); else if ([0, 1, 2, 3].includes(v)) answers[k] = v; });
      if (ae.flags && typeof ae.flags === 'object') Object.keys(ae.flags).forEach(k => { if (ae.flags[k]) flags[k] = true; });
      s.activeExam = { id: str(ae.id, 40) || uid(), t: str(ae.t, 40), d: Core.isKey(ae.d) ? ae.d : Core.dateKey(), title: str(ae.title, 80) || 'Exam', cfg: {}, items, answers, flags, i: Number.isInteger(ae.i) ? Math.max(0, ae.i) : 0, startMs: ae.startMs, deadline: Number.isFinite(ae.deadline) ? ae.deadline : null };
    }
    return { state: s, report };
  }

  return {
    get state() { return state; }, get available() { return available; }, get error() { return lastError; },
    load, save, saveNow, sanitize, on: f => listeners.add(f),
    replace(newState) { state = newState; saveNow(); listeners.forEach(f => f('change')); },
    reset() { state = freshState(); if (available) { try { localStorage.removeItem(STORE_KEY); } catch (e) { } } saveNow(); listeners.forEach(f => f('change')); },
    reloadFromStorage() { load(); listeners.forEach(f => f('change')); },
    trim() { if (state.attempts.length > MAX_ATTEMPTS) state.attempts.splice(0, state.attempts.length - MAX_ATTEMPTS); ['reviews', 'recall'].forEach(k => { if (state[k].length > MAX_LOG) state[k].splice(0, state[k].length - MAX_LOG); }); }
  };
})();

function uid() { return Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-4); }
function nowStamp() { const d = new Date(); return { t: d.toISOString(), d: Core.dateKey(d), tz: -d.getTimezoneOffset() }; }
