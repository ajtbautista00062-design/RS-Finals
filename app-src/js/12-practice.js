// ───────── Identification & multiple-choice practice engine ─────────
const KIND_LABEL = { def: 'Definition', scenario: 'Scenario', formula: 'Formula', acronym: 'Acronym', visual: 'Visual clue', process: 'Process step', calc: 'Calculation', list: 'List / values' };
const KIND_GROUPS = [['def', 'Definitions'], ['scenario', 'Scenarios'], ['visual', 'Visual clues'], ['formula', 'Formulas'], ['calc', 'Calculations'], ['process', 'Process steps'], ['list', 'Lists & values'], ['acronym', 'Acronyms']];
const POOLS = [['all', 'All eligible items'], ['unanswered', 'Never answered'], ['missed', 'Missed last time'], ['everMissed', 'Ever missed'], ['bookmarked', 'Bookmarked'], ['weak', 'Weak topics'], ['due', 'Concepts with due flashcards']];

function promptLabel(q) {
  if (q.type === 'mcq') return 'Choose the best answer';
  return { def: 'What term is being described?', scenario: 'Identify the term', visual: 'Identify from the visual clue', formula: 'Identify / complete the formula', calc: 'Calculate', process: 'Identify the step', list: 'Recall the item(s)', acronym: 'Expand the acronym' }[q.kind] || 'Identify';
}
function matrixMini() {
  const cls = ['Built-up', 'Forest', 'Vegetation', 'Bare soil'], M = [[65, 4, 22, 24], [6, 81, 5, 8], [0, 11, 85, 19], [4, 7, 3, 90]];
  const rows = M.map(r => r.reduce((a, b) => a + b, 0)), cols = cls.map((_, j) => M.reduce((a, r) => a + r[j], 0));
  return h('div.matrix-mini', { tabindex: '0', role: 'region', 'aria-label': 'Error matrix' }, h('table', null, h('caption', null, 'Rows = CLASSIFIED data (map); columns = REFERENCE data.'),
    h('thead', null, h('tr', null, h('th', null, 'Map ↓ / Ref →'), cls.map(c => h('th', { scope: 'col' }, c)), h('th', null, 'Total'))),
    h('tbody', null, M.map((r, i) => h('tr', null, h('th', { scope: 'row' }, cls[i]), r.map((v, j) => h('td' + (i === j ? '.diag' : ''), null, String(v))), h('td', null, String(rows[i])))), h('tr', null, h('th', { scope: 'row' }, 'Total'), cols.map(v => h('td', null, String(v))), h('td', null, '434')))));
}
// Prompt body shared by practice, exam and recall: text + optional matrix / figure / color swatch.
function promptBody(q) {
  let text = q.prompt;
  const parts = [];
  if (q.matrix) { text = text.replace(DATA.matrixText, '').trim(); parts.push(matrixMini()); }
  if (q.fig) parts.push(h('figure.fig', { style: { maxWidth: q.fig.startsWith('q-') ? '320px' : '640px' } }, h('div', { html: FIG[q.fig]() })));
  parts.unshift(h('p.prompt', null, q.swatch ? h('span.swatch', { style: { background: q.swatch }, 'aria-hidden': 'true' }) : null, rich(text)));
  return parts;
}
function answerReveal(q) {
  const parts = [];
  if (q.type === 'mcq') parts.push(h('div.canon', null, q.opts[0][0]));
  else {
    parts.push(h('div.canon', null, q.answer));
    const alts = (q.alts || []).filter(a => Core.norm(a) !== Core.norm(q.answer)).slice(0, 8);
    if (alts.length) parts.push(h('div.small.muted', null, 'Also accepted: ' + alts.join(' · ')));
    if (q.kw || q.kw2) parts.push(h('div.small.muted', null, 'Equivalent wording containing the key terms is also accepted.'));
  }
  parts.push(h('p', { style: { margin: '.5rem 0' } }, rich(q.explain || (q.opts && q.opts[0][1]) || '')));
  const c = Model.concept(q.cid);
  if (c && q.auto !== true && Core.norm(c.term) !== Core.norm(q.answer || '')) parts.push(h('p.small', { style: { margin: '0 0 .4rem' } }, 'Concept: ', h('a', { href: '#/glossary/' + c.id }, c.term)));
  parts.push(h('div', null, Model.srcChips(q.lec, q.p, c && q.auto ? c.x : null)));
  return parts;
}
function bookmarkBtn(q) {
  const st = Store.state; const on = () => !!st.bookmarks.q[q.id];
  const b = h('button.btn.sm.ghost', { 'aria-pressed': String(on()), title: 'Bookmark (b)', on: { click: () => toggle() } }, icon('bookmark', 16), on() ? 'Saved' : 'Save');
  function toggle() { if (on()) delete st.bookmarks.q[q.id]; else st.bookmarks.q[q.id] = true; Store.save(); b.setAttribute('aria-pressed', String(on())); clear(b).append(icon('bookmark', 16), on() ? 'Saved' : 'Save'); toast(on() ? 'Question bookmarked.' : 'Bookmark removed.'); }
  b.toggle = toggle; return b;
}
function qMeta(q, showTopic) {
  const t = Model.topic(q.topic);
  return [lecChip(q.lec), showTopic ? h('span.chip', null, t.title) : null, h('span.chip', null, q.type === 'mcq' ? 'Multiple choice' : (KIND_LABEL[q.kind] || 'Identification')), h('span.chip', { title: 'Difficulty' }, ['', 'Recall', 'Apply', 'Challenge'][q.diff])];
}

const Practice = {
  sessions: {},
  // Filter panel. kind: 'ident' | 'mcq'
  config(main, kind, pre) {
    pre = pre || {};
    const st = { lecs: pre.lecs || [], topics: pre.topics || [], diffs: [], kinds: [], filter: pre.filter || 'all', len: 20, mode: 'practice' };
    const count = h('p.small', { 'aria-live': 'polite' });
    const startBtn = h('button.btn.primary', { on: { click: () => start() } }, icon('play', 18), 'Start session');
    const eligible = () => Model.pool({ type: kind, lecs: st.lecs, topics: st.topics, diffs: st.diffs, kinds: kind === 'ident' ? st.kinds : [], filter: st.filter });
    const refresh = () => { const n = eligible().length; count.textContent = n ? `${n} eligible item${n > 1 ? 's' : ''}. A session of ${st.len === 0 ? 'all' : Math.min(st.len, n)} will be drawn${n < st.len && st.len ? ` (only ${n} match your filters)` : ''}.` : 'No items match these filters. Widen the lecture, topic or pool selection.'; startBtn.disabled = !n; };
    const chk = (label, arr, val) => { const i = h('input', { type: 'checkbox', checked: arr.includes(val) }); i.addEventListener('change', () => { const k = arr.indexOf(val); if (i.checked && k < 0) arr.push(val); if (!i.checked && k >= 0) arr.splice(k, 1); refresh(); }); return h('label.check', null, i, label); };
    const topicBox = h('div', { style: { maxHeight: '260px', overflow: 'auto' } }, DATA.lectures.map(l => h('div', null, h('div.small.muted', { style: { fontWeight: 700, marginTop: '.4rem' } }, l.short), Model.topicsOf(l.id).map(t => h('div', null, chk(t.title, st.topics, t.id))))));
    const sel = (label, opts, key, cast) => { const s = h('select', { 'aria-label': label }, opts.map(([v, t]) => h('option', { value: String(v) }, t))); s.value = String(st[key]); s.addEventListener('change', () => { st[key] = cast ? cast(s.value) : s.value; refresh(); }); return h('div.field', null, h('label', null, label), s); };
    const modeSeg = h('div.seg', { role: 'group', 'aria-label': 'Feedback mode' }, [['practice', 'Practice: hints + instant feedback'], ['strict', 'Strict: no hints, feedback at the end']].map(([v, t]) => h('button', { type: 'button', 'aria-pressed': String(st.mode === v), on: { click: e => { st.mode = v; $$('button', modeSeg).forEach(b => b.setAttribute('aria-pressed', String(b === e.currentTarget))); } } }, t)));
    function start() { const items = eligible(); if (!items.length) return; const n = st.len === 0 ? items.length : Math.min(st.len, items.length); Practice.begin(kind, Model.spread(items, n), st.mode); }
    main.appendChild(h('div.page.narrow', null,
      h('div.page-head', null, h('div', null, h('h1', null, kind === 'ident' ? 'Identification Practice' : 'Multiple-Choice Practice'), h('p', null, kind === 'ident' ? 'Read the definition, characteristic, scenario, formula or visual clue, then type the exact term. Harmless differences in capitalization, spacing, punctuation and hyphenation are accepted, along with a curated list of equivalent terms. Different scientific concepts are never accepted.' : 'Four plausible options with one best answer. After you answer, every option is explained.'))),
      h('div.card', null, h('div.filters', null,
        h('fieldset', null, h('legend', null, 'Lectures'), DATA.lectures.map(l => chk(l.short + ' — ' + l.title, st.lecs, l.id))),
        h('fieldset', null, h('legend', null, 'Difficulty'), [[1, 'Recall'], [2, 'Apply'], [3, 'Challenge']].map(([v, t]) => chk(t, st.diffs, v))),
        kind === 'ident' ? h('fieldset', null, h('legend', null, 'Clue type'), KIND_GROUPS.map(([v, t]) => chk(t, st.kinds, v))) : null),
        h('details.more', { open: st.topics.length > 0 }, h('summary', null, 'Topics' + (st.topics.length ? ` (${st.topics.length} selected)` : ' (all)')), topicBox),
        h('div.filters', { style: { marginTop: '.6rem' } }, sel('Question pool', POOLS, 'filter'), sel('Session length', [[10, '10 items'], [20, '20 items'], [30, '30 items'], [50, '50 items'], [0, 'All eligible']], 'len', Number)),
        h('div.field', { style: { marginTop: '.8rem' } }, h('span', { style: { fontWeight: 600 } }, 'Mode'), modeSeg),
        h('div.row', { style: { marginTop: '1rem' } }, startBtn, count)),
      Practice.resumeCard(kind)));
    refresh();
  },
  resumeCard(kind) {
    const s = Practice.sessions[kind];
    if (!s || s.done) return null;
    return h('div.card.soft', null, h('div.row', null, h('span', null, `Unfinished session: ${s.i} of ${s.items.length} done.`), h('button.btn.sm', { on: { click: () => { s.paused = false; if (location.hash !== '#/' + kind) location.hash = '#/' + kind; else Shell.route(); } } }, 'Resume'), h('button.btn.sm.ghost', { on: { click: () => { delete Practice.sessions[kind]; Shell.route(); } } }, 'Discard')));
  },
  begin(kind, items, mode) {
    Practice.sessions[kind] = { kind, items: items.map(q => ({ q, order: q.type === 'mcq' ? Model.shuffle([0, 1, 2, 3]) : null })), i: 0, mode, results: [], done: false, paused: false };
    if (location.hash !== '#/' + kind) location.hash = '#/' + kind; else Shell.route();
  },
  // Render the active session inside main.
  run(main, s) {
    const wrap = h('div.practice');
    main.appendChild(h('div.page', null, wrap));
    if (s.done || s.i >= s.items.length) { s.done = true; return Practice.summary(wrap, s); }
    const it = s.items[s.i], q = it.q, strict = s.mode === 'strict';
    const done = () => s.results.filter(Boolean).length;
    const doneEl = h('span.count', null, `${done()} completed`), barEl = h('div', { style: { flex: 1 } }, bar(done(), s.items.length, { label: 'Session progress' }));
    const refreshBar = () => { doneEl.textContent = `${done()} completed`; clear(barEl).appendChild(bar(done(), s.items.length, { label: 'Session progress' })); };
    const head = h('div.session-bar', null, h('span.count', null, `Item ${s.i + 1} of ${s.items.length}`), barEl, doneEl, h('button.btn.sm.ghost', { on: { click: () => { s.paused = true; location.hash = '#/' + s.kind + '/setup'; } } }, 'Exit'));
    wrap.appendChild(head);
    const card = h('section.card.qcard', { 'aria-labelledby': 'qlab' });
    wrap.appendChild(card);
    Practice.question(card, q, {
      strict, order: it.order, mode: strict ? 'strict' : 'practice', showTopic: true,
      onDone: res => { s.results[s.i] = res; refreshBar(); },
      onNext: () => { s.i++; Shell.route(); }
    });
  },
  summary(wrap, s) {
    const n = s.results.length, ok = s.results.filter(r => r && r.ok).length;
    const missed = s.results.filter(r => r && !r.ok).map(r => r.q);
    wrap.appendChild(h('section.card', null, h('h1', null, 'Session complete'), h('p', null, `You answered ${ok} of ${n} correctly (${pct(ok, n)}%).` + (s.mode === 'strict' ? ' Strict mode: feedback is shown below.' : '')),
      h('div.row', null, missed.length ? h('button.btn.primary', { on: { click: () => Practice.begin(s.kind, missed, s.mode) } }, 'Retry the ' + missed.length + ' missed') : null, h('button.btn', { on: { click: () => { delete Practice.sessions[s.kind]; location.hash = '#/' + s.kind + '/setup'; } } }, 'New session'), h('a.btn.ghost', { href: '#/review' }, 'Mistakes & bookmarks'))));
    s.results.forEach((r, i) => {
      if (!r) return;
      const q = r.q;
      const fb = h('div.feedback.' + (r.ok ? 'ok' : 'bad'), null, h('div.fh', null, icon(r.ok ? 'check' : 'x'), `${i + 1}. ${r.ok ? (r.ov ? 'Self-credited' : 'Correct') : 'Incorrect'}`), h('div.fb', null, h('p', { style: { marginTop: 0 } }, rich(q.prompt.replace(DATA.matrixText, 'Matrix question: '))), r.given ? h('p.small', null, 'Your answer: ', h('b', null, r.given)) : null, answerReveal(q),
        !r.ok && q.type === 'ident' && !r.rev ? h('button.btn.sm', { style: { marginTop: '.5rem' }, on: { click: e => { Model.overrideLast(q); r.ok = true; r.ov = true; e.currentTarget.replaceWith(h('span.chip.ok', null, 'Recorded as self-credited')); } } }, 'My wording was valid — count it') : null));
      wrap.appendChild(h('div', { style: { marginTop: '.8rem' } }, fb));
    });
  },
  // Render one question with answer handling. opts: {strict, order, mode, showTopic, onDone(res), onNext()}
  question(card, q, opts) {
    const strict = !!opts.strict;
    let hintsUsed = 0, answered = false, chosen = null;
    const bm = bookmarkBtn(q);
    card.appendChild(h('div.qmeta', null, qMeta(q, opts.showTopic), h('span.spacer'), bm));
    card.appendChild(h('div.prompt-label', { id: 'qlab' }, promptLabel(q)));
    promptBody(q).forEach(n => card.appendChild(n));
    const fbBox = h('div', { 'aria-live': 'polite' });
    const nextBtn = h('button.btn.primary', { hidden: true, on: { click: () => opts.onNext && opts.onNext() } }, 'Next', icon('arrowR', 18));
    const finish = (res) => { answered = true; opts.onDone && opts.onDone(res); };
    Practice._key = null;
    if (q.type === 'ident') {
      const input = h('input', { type: 'text', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', enterkeyhint: 'done', 'aria-label': 'Your answer', placeholder: q.num ? 'Type a number' : q.bands ? 'e.g. 4, 3, 2' : 'Type the term' });
      const submit = h('button.btn.primary', { on: { click: () => grade() } }, 'Submit');
      const hintList = h('div.hints', { 'aria-live': 'polite' });
      const allHints = Core.hints(q);
      const hintBtn = h('button.btn.sm', { on: { click: () => showHint() } }, icon('bulb', 16), 'Hint');
      const revealBtn = h('button.btn.sm.ghost', { on: { click: () => reveal() } }, icon('eye', 16), 'Show answer');
      function showHint() { if (answered || hintsUsed >= allHints.length) return; hintList.appendChild(h('div.hint', null, `Hint ${hintsUsed + 1}: ${allHints[hintsUsed]}`)); hintsUsed++; if (hintsUsed >= allHints.length) hintBtn.disabled = true; }
      function reveal() { if (answered) return; Model.recordAttempt(q, false, { rev: true, hint: hintsUsed, mode: opts.mode, given: input.value }); lock(); showFeedback({ ok: false, rev: true }, input.value); finish({ q, ok: false, rev: true, given: input.value }); }
      function lock() { input.disabled = true; submit.disabled = true; hintBtn.disabled = true; revealBtn.disabled = true; }
      function grade() {
        if (answered) return;
        const v = input.value.trim();
        if (!v) { fbBox.textContent = 'Type an answer first (or use Show answer).'; input.focus(); return; }
        const r = Core.check(q, v);
        Model.recordAttempt(q, r.ok, { hint: hintsUsed, mode: opts.mode, given: v });
        lock(); finish({ q, ok: r.ok, given: v, hint: hintsUsed });
        if (strict) { opts.onNext && opts.onNext(); return; }
        showFeedback(r, v);
      }
      function showFeedback(r, v) {
        clear(fbBox);
        const head = r.rev ? 'Answer shown (not counted as correct)' : r.ok ? (hintsUsed ? `Correct (with ${hintsUsed} hint${hintsUsed > 1 ? 's' : ''})` : 'Correct') : 'Incorrect';
        const extra = !r.ok && r.near === true ? h('p.small', { style: { margin: '0 0 .4rem' } }, '⚠ Very close spelling. Close spellings are not auto-accepted. If you meant this term, use the button below.') : !r.ok && r.near === 'order' ? h('p.small', { style: { margin: '0 0 .4rem' } }, '⚠ Right bands, wrong order. Order matters (R, G, B).') : null;
        const ovBtn = !r.ok && !r.rev ? h('button.btn.sm', { on: { click: e => { Model.overrideLast(q); opts.onDone && opts.onDone({ q, ok: true, ov: true, given: v }); e.currentTarget.replaceWith(h('span.chip.ok', null, icon('check', 14), 'Recorded as self-credited')); } } }, 'My wording was valid — count it') : null;
        fbBox.appendChild(h('div.feedback.' + (r.rev ? 'neutral' : r.ok ? 'ok' : 'bad'), null, h('div.fh', null, icon(r.ok ? 'check' : r.rev ? 'eye' : 'x'), head),
          h('div.fb', null, v && !r.ok ? h('p.small', { style: { margin: '0 0 .4rem' } }, 'Your answer: ', h('b', null, v)) : null, extra, answerReveal(q), ovBtn ? h('div', { style: { marginTop: '.5rem' } }, ovBtn, h('span.small.muted', null, '  Self-credits are recorded and listed for review.')) : null)));
        nextBtn.hidden = false; nextBtn.focus();
      }
      input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); if (!answered) grade(); else if (!nextBtn.hidden) nextBtn.click(); } });
      input.addEventListener('focus', () => setTimeout(() => { if (innerWidth < 900) input.scrollIntoView({ block: 'center', behavior: 'smooth' }); }, 250));
      card.appendChild(h('div.answer-row', null, input, submit));
      if (!strict) card.appendChild(h('div.row', { style: { marginTop: '.6rem' } }, hintBtn, revealBtn));
      else card.appendChild(h('p.small.muted', { style: { marginTop: '.6rem' } }, 'Strict mode: no hints and no feedback until the end of the session.'));
      card.appendChild(hintList);
      Practice._key = e => { if (e.key === 'h' && !strict) { e.preventDefault(); showHint(); } else if (e.key === 'b') { e.preventDefault(); bm.toggle(); } else if ((e.key === 'Enter' || e.key === 'n') && answered && !nextBtn.hidden) { e.preventDefault(); nextBtn.click(); } };
      setTimeout(() => input.focus({ preventScroll: innerWidth < 900 }), 30);
    } else {
      const order = opts.order || Model.shuffle([0, 1, 2, 3]);
      const btns = order.map((oi, k) => h('button.opt', { type: 'button', 'aria-pressed': 'false', on: { click: () => choose(k) } }, h('span.k', null, String(k + 1)), h('span', null, rich(q.opts[oi][0]))));
      const check = h('button.btn.primary', { disabled: true, on: { click: () => grade() } }, 'Check answer');
      function choose(k) { if (answered) return; chosen = k; btns.forEach((b, j) => { b.setAttribute('aria-pressed', String(j === k)); b.classList.toggle('sel', j === k); }); check.disabled = false; if (strict) check.textContent = 'Submit'; }
      function grade() {
        if (answered || chosen == null) return;
        const oi = order[chosen], ok = oi === 0;
        Model.recordAttempt(q, ok, { mode: opts.mode, given: q.opts[oi][0] });
        finish({ q, ok, given: q.opts[oi][0] });
        btns.forEach(b => { b.disabled = true; }); check.disabled = true;
        if (strict) { opts.onNext && opts.onNext(); return; }
        btns.forEach((b, j) => { const idx = order[j]; if (idx === 0) b.classList.add('correct'); else if (j === chosen) b.classList.add('wrong'); b.querySelector('span:last-child').appendChild(h('span.why', null, (idx === 0 ? '✓ ' : j === chosen ? '✗ ' : '') + q.opts[idx][1])); });
        fbBox.appendChild(h('div.feedback.' + (ok ? 'ok' : 'bad'), null, h('div.fh', null, icon(ok ? 'check' : 'x'), ok ? 'Correct' : 'Incorrect'), h('div.fb', null, h('div', null, Model.srcChips(q.lec, q.p)))));
        nextBtn.hidden = false; nextBtn.focus();
      }
      card.appendChild(h('div.options', { role: 'group', 'aria-labelledby': 'qlab' }, btns));
      card.appendChild(h('div.row', null, check));
      Practice._key = e => { if (/^[1-4]$/.test(e.key)) { e.preventDefault(); choose(Number(e.key) - 1); } else if (e.key === 'Enter') { e.preventDefault(); if (!answered) grade(); else if (!nextBtn.hidden) nextBtn.click(); } else if (e.key === 'b') { e.preventDefault(); bm.toggle(); } };
    }
    card.appendChild(fbBox);
    card.appendChild(h('div.row.end', { style: { marginTop: '.8rem' } }, nextBtn));
  }
};

function practiceView(kind) {
  return {
    title: kind === 'ident' ? 'Identification Practice' : 'Multiple Choice',
    nav: kind,
    render(main, params) {
      const s = Practice.sessions[kind];
      const [k, v] = params;
      if (k === 'setup') { if (s) s.paused = true; return Practice.config(main, kind); }
      if (k === 'topic' && Model.topic(v)) { const items = Model.pool({ type: kind, topics: [v] }); if (items.length) { Practice.sessions[kind] = { kind, items: Model.spread(items, Math.min(20, items.length)).map(q => ({ q, order: q.type === 'mcq' ? Model.shuffle([0, 1, 2, 3]) : null })), i: 0, mode: 'practice', results: [], done: false }; history.replaceState(null, '', '#/' + kind); return Practice.run(main, Practice.sessions[kind]); } }
      if (k === 'pool' && POOLS.some(p => p[0] === v)) { const items = Model.pool({ type: kind, filter: v }); if (!items.length) { main.appendChild(h('div.page.narrow', null, h('div.card.empty', null, h('p', null, 'No items in this pool yet.'), h('a.btn', { href: '#/' + kind + '/setup' }, 'Choose other filters')))); return; } Practice.sessions[kind] = { kind, items: Model.spread(items, Math.min(20, items.length)).map(q => ({ q, order: q.type === 'mcq' ? Model.shuffle([0, 1, 2, 3]) : null })), i: 0, mode: 'practice', results: [], done: false }; history.replaceState(null, '', '#/' + kind); return Practice.run(main, Practice.sessions[kind]); }
      if (k === 'ids') { const items = v.split(',').map(Model.q).filter(q => q && q.type === kind); if (items.length) { Practice.sessions[kind] = { kind, items: items.map(q => ({ q, order: q.type === 'mcq' ? Model.shuffle([0, 1, 2, 3]) : null })), i: 0, mode: 'practice', results: [], done: false }; history.replaceState(null, '', '#/' + kind); return Practice.run(main, Practice.sessions[kind]); } }
      if (k === 'lec' && Model.lec(v)) return Practice.config(main, kind, { lecs: [v] });
      if (s && !s.paused) return Practice.run(main, s);
      return Practice.config(main, kind);
    },
    onKey(e) { if (Practice._key) Practice._key(e); },
    cleanup() { Practice._key = null; }
  };
}
Views.ident = practiceView('ident');
Views.mcq = practiceView('mcq');

// Single question (from search, glossary and mistakes links)
Views.single = {
  title: 'Question', nav: '',
  render(main, params) {
    const q = Model.q(params.join('/'));
    if (!q) { main.appendChild(h('div.page.narrow', null, h('div.card.empty', null, h('p', null, 'That question was not found.'), h('a.btn', { href: '#/ident' }, 'Go to identification practice')))); return; }
    const card = h('section.card.qcard');
    const after = h('div');
    main.appendChild(h('div.page', null, h('div.practice', null, h('p', null, h('button.btn.sm.ghost', { type: 'button', on: { click: () => { if (history.length > 1) history.back(); else location.hash = '#/'; } } }, icon('arrowL', 16), 'Back')), card, after)));
    Practice.question(card, q, { mode: 'practice', showTopic: true, onDone: () => { clear(after).appendChild(h('div.row', { style: { marginTop: '1rem' } }, h('a.btn', { href: '#/' + (q.type === 'mcq' ? 'mcq' : 'ident') + '/topic/' + q.topic }, 'Practice more from this topic'), h('a.btn.ghost', { href: '#/lessons/' + q.topic }, 'Open the lesson'))); }, onNext: () => { location.hash = '#/' + (q.type === 'mcq' ? 'mcq' : 'ident') + '/topic/' + q.topic; } });
  },
  onKey(e) { if (Practice._key) Practice._key(e); },
  cleanup() { Practice._key = null; }
};
