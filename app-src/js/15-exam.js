// ───────── Mock exams ─────────
const PRESETS = [['heavy', 'Identification-heavy (80% identification, 20% multiple choice)'], ['strict', 'Strict identification only'], ['custom', 'Custom mix']];
const Exam = { tick: null };
Views.exam = {
  title: 'Mock Exams', nav: 'exam',
  render(main, params) {
    const [k, v] = params, st = Store.state;
    if (k === 'result') return this.result(main, v);
    if (st.activeExam && k !== 'new') return this.run(main);
    this.config(main, { preset: k === 'preset' && ['heavy', 'strict', 'custom'].includes(v) ? v : 'heavy', lecs: k === 'lec' && Model.lec(v) ? [v] : [] });
  },
  plan(cfg) {
    const base = { lecs: cfg.lecs, topics: cfg.topics, diffs: cfg.diffs };
    const idPool = cfg.preset === 'custom' && cfg.share === 0 ? [] : Model.pool(Object.assign({ type: 'ident' }, base));
    const mcPool = cfg.preset === 'strict' || (cfg.preset === 'custom' && cfg.share === 100) ? [] : Model.pool(Object.assign({ type: 'mcq' }, base));
    const share = cfg.preset === 'strict' ? 1 : cfg.preset === 'heavy' ? 0.8 : cfg.share / 100;
    let wantId = Math.round(cfg.len * share), wantMc = cfg.len - wantId;
    const notes = [];
    if (wantId > idPool.length) { notes.push(`Only ${idPool.length} identification item(s) match your filters (you asked for ${wantId}).`); wantId = idPool.length; }
    if (wantMc > mcPool.length) { notes.push(`Only ${mcPool.length} multiple-choice item(s) match your filters (you asked for ${wantMc}).`); wantMc = mcPool.length; }
    return { idPool, mcPool, wantId, wantMc, total: wantId + wantMc, notes };
  },
  config(main, pre) {
    const st = Store.state;
    const cfg = { preset: pre.preset, lecs: pre.lecs.slice(), topics: [], diffs: [], len: 30, limit: 0, share: 80 };
    const info = h('div', { 'aria-live': 'polite' });
    const startBtn = h('button.btn.primary', { on: { click: () => start() } }, icon('play', 18), 'Start exam');
    const refresh = () => {
      const p = this.plan(cfg); clear(info);
      info.appendChild(h('p.small', { style: { margin: '.4rem 0' } }, `Eligible: ${p.idPool.length} identification · ${p.mcPool.length} multiple choice. This exam: ${p.wantId} identification + ${p.wantMc} multiple choice = ${p.total} item(s)` + (cfg.limit ? `, ${cfg.limit} minutes.` : ', untimed.')));
      p.notes.forEach(n => info.appendChild(h('p.small', { role: 'status', style: { margin: '.2rem 0', color: 'var(--accent)' } }, '⚠ ' + n + ' Questions are never duplicated to fill the gap.')));
      startBtn.disabled = !p.total; clear(startBtn).append(icon('play', 18), p.total ? `Start exam (${p.total} items)` : 'No eligible items');
      shareField.hidden = cfg.preset !== 'custom';
    };
    const chk = (label, arr, val) => { const i = h('input', { type: 'checkbox', checked: arr.includes(val) }); i.addEventListener('change', () => { const k = arr.indexOf(val); if (i.checked && k < 0) arr.push(val); if (!i.checked && k >= 0) arr.splice(k, 1); refresh(); }); return h('label.check', null, i, label); };
    const presetBox = h('fieldset', null, h('legend', null, 'Preset'), PRESETS.map(([v, t]) => { const r = h('input', { type: 'radio', name: 'preset', value: v, checked: cfg.preset === v }); r.addEventListener('change', () => { cfg.preset = v; refresh(); }); return h('label.check', null, r, t); }));
    const selNum = (label, list, key, fmt) => { const s = h('select', { 'aria-label': label }, list.map(n => h('option', { value: String(n) }, fmt(n)))); s.value = String(cfg[key]); s.addEventListener('change', () => { cfg[key] = Number(s.value); refresh(); }); return h('div.field', null, h('label', null, label), s); };
    const shareField = selNum('Identification share', [100, 80, 60, 50, 40, 20, 0], 'share', n => n + '% identification');
    const topicBox = h('div', { style: { maxHeight: '240px', overflow: 'auto' } }, DATA.lectures.map(l => h('div', null, h('div.small.muted', { style: { fontWeight: 700, marginTop: '.4rem' } }, l.short), Model.topicsOf(l.id).map(t => h('div', null, chk(t.title, cfg.topics, t.id))))));
    const start = () => {
      const p = this.plan(cfg); if (!p.total) return;
      const items = Model.shuffle(Model.spread(p.idPool, p.wantId).concat(Model.spread(p.mcPool, p.wantMc))).map(q => ({ q: q.id, order: q.type === 'mcq' ? Model.shuffle([0, 1, 2, 3]) : null }));
      const s = nowStamp();
      const title = cfg.preset === 'strict' ? 'Strict identification exam' : cfg.preset === 'heavy' ? 'Identification-heavy exam' : 'Custom exam';
      st.activeExam = { id: uid(), t: s.t, d: s.d, title, cfg: { preset: cfg.preset, lecs: cfg.lecs, limit: cfg.limit }, items, answers: {}, flags: {}, i: 0, startMs: Date.now(), deadline: cfg.limit ? Date.now() + cfg.limit * 60000 : null };
      Store.save();
      if (location.hash !== '#/exam') location.hash = '#/exam'; else Shell.route();
    };
    const history = st.exams.slice(-12).reverse();
    main.appendChild(h('div.page.narrow', null,
      h('div.page-head', null, h('div', null, h('h1', null, 'Mock Exams'), h('p', null, 'Exam conditions: no hints, no feedback and no answers until you submit. Choose a preset or build a custom exam; results show your score by topic, every explanation and the missed concepts.'))),
      st.activeExam ? h('div.banner', { role: 'status' }, icon('clock'), h('div', null, h('b', null, 'An exam is in progress. '), 'Starting a new one will discard it. ', h('a', { href: '#/exam' }, 'Resume the exam'))) : null,
      h('div.card', null, h('div.filters', null, presetBox, h('fieldset', null, h('legend', null, 'Lectures (none = all)'), DATA.lectures.map(l => chk(l.short + ' — ' + l.title, cfg.lecs, l.id))), h('fieldset', null, h('legend', null, 'Difficulty (none = all)'), [[1, 'Recall'], [2, 'Apply'], [3, 'Challenge']].map(([v, t]) => chk(t, cfg.diffs, v)))),
        h('details.more', null, h('summary', null, 'Topics (optional)'), topicBox),
        h('div.filters', { style: { marginTop: '.6rem' } }, selNum('Length', [10, 20, 30, 40, 50, 75, 100, 150], 'len', n => n + ' items'), selNum('Time limit', [0, 10, 15, 20, 30, 45, 60, 90, 120], 'limit', n => n ? n + ' minutes' : 'No time limit'), shareField),
        info, h('div.row', { style: { marginTop: '.6rem' } }, startBtn)),
      h('div.card', { style: { marginTop: '1rem' } }, h('h2', null, 'Past exams'), history.length ? h('div.table-wrap', null, h('table', null, h('thead', null, h('tr', null, h('th', null, 'Date'), h('th', null, 'Exam'), h('th.num', null, 'Score'), h('th', null, ''))), h('tbody', null, history.map(e => { const ok = e.items.filter(i => i.ok).length; return h('tr', null, h('td', null, fmtDate(e.d)), h('td', null, e.title || 'Exam'), h('td.num', null, `${ok}/${e.items.length} (${pct(ok, e.items.length)}%)`), h('td', null, h('a', { href: '#/exam/result/' + e.id }, 'Results'))); })))) : h('p.muted', null, 'No exams taken yet.'))));
    refresh();
  },
  run(main) {
    const st = Store.state, ex = st.activeExam;
    const items = ex.items.map(it => Object.assign({ qq: Model.q(it.q) }, it)).filter(it => it.qq);
    if (!items.length) { st.activeExam = null; Store.save(); return this.config(main, { preset: 'heavy', lecs: [] }); }
    if (ex.i >= items.length) ex.i = items.length - 1;
    const it = items[ex.i], q = it.qq;
    const search = $('#gsearch'); if (search) { search.disabled = true; search.placeholder = 'Search is off during an exam'; }
    const timeEl = h('div.time-left', { 'aria-live': 'off' });
    const paint = () => {
      if (ex.deadline) { const ms = ex.deadline - Date.now(); if (ms <= 0) { clearInterval(Exam.tick); toast('Time is up — the exam was submitted.'); return this.submit(true); } const m = Math.floor(ms / 60000), s = Math.floor(ms % 60000 / 1000); timeEl.textContent = `${m}:${String(s).padStart(2, '0')} left`; timeEl.classList.toggle('low', ms < 60000); }
      else { const ms = Date.now() - ex.startMs; timeEl.textContent = `${Math.floor(ms / 60000)}:${String(Math.floor(ms % 60000 / 1000)).padStart(2, '0')} elapsed`; }
    };
    clearInterval(Exam.tick); paint(); if (!Store.state.activeExam) return; Exam.tick = setInterval(paint, 1000);
    const go = i => { ex.i = Math.max(0, Math.min(items.length - 1, i)); Store.save(); Shell.route(); };
    const card = h('section.card.qcard');
    card.appendChild(h('div.qmeta', null, h('span.chip', null, `Question ${ex.i + 1} of ${items.length}`), h('span.chip', null, q.type === 'mcq' ? 'Multiple choice' : 'Identification'), h('span.spacer'),
      h('button.btn.sm.ghost', { 'aria-pressed': String(!!ex.flags[it.q]), on: { click: e => { ex.flags[it.q] = !ex.flags[it.q]; Store.save(); e.currentTarget.setAttribute('aria-pressed', String(ex.flags[it.q])); clear(e.currentTarget).append(icon('flag', 16), ex.flags[it.q] ? 'Flagged' : 'Flag for review'); Shell.rerender(); } } }, icon('flag', 16), ex.flags[it.q] ? 'Flagged' : 'Flag for review')));
    card.appendChild(h('div.prompt-label', { id: 'qlab' }, promptLabel(q)));
    promptBody(q).forEach(n => card.appendChild(n));
    if (q.type === 'ident') {
      const input = h('input', { type: 'text', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', 'aria-label': 'Your answer', value: ex.answers[it.q] || '', placeholder: q.num ? 'Type a number' : q.bands ? 'e.g. 4, 3, 2' : 'Type the term' });
      let tmr; input.addEventListener('input', () => { clearTimeout(tmr); tmr = setTimeout(() => { ex.answers[it.q] = input.value.slice(0, 160); Store.save(); }, 250); });
      input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); ex.answers[it.q] = input.value.slice(0, 160); Store.save(); if (ex.i < items.length - 1) go(ex.i + 1); else submitBtn.focus(); } });
      input.addEventListener('blur', () => { ex.answers[it.q] = input.value.slice(0, 160); Store.save(); });
      input.addEventListener('focus', () => setTimeout(() => { if (innerWidth < 900) input.scrollIntoView({ block: 'center' }); }, 250));
      card.appendChild(h('div.answer-row', null, input));
      setTimeout(() => input.focus({ preventScroll: innerWidth < 900 }), 30);
    } else {
      const sel = ex.answers[it.q];
      const opts = it.order.map((oi, k) => h('button.opt' + (sel === oi ? '.sel' : ''), { type: 'button', 'aria-pressed': String(sel === oi), on: { click: () => { ex.answers[it.q] = oi; Store.save(); Shell.rerender(); } } }, h('span.k', null, String(k + 1)), h('span', null, rich(q.opts[oi][0]))));
      card.appendChild(h('div.options', { role: 'group', 'aria-labelledby': 'qlab' }, opts));
      this._key = e => { if (/^[1-4]$/.test(e.key)) { e.preventDefault(); ex.answers[it.q] = it.order[Number(e.key) - 1]; Store.save(); Shell.rerender(); } };
    }
    card.appendChild(h('div.row', { style: { marginTop: '1rem', justifyContent: 'space-between' } }, h('button.btn', { disabled: ex.i === 0, on: { click: () => go(ex.i - 1) } }, icon('arrowL', 18), 'Previous'), h('button.btn' + (ex.i < items.length - 1 ? '.primary' : ''), { disabled: ex.i === items.length - 1, on: { click: () => go(ex.i + 1) } }, 'Next', icon('arrowR', 18))));
    const answered = items.filter(x => ex.answers[x.q] !== undefined && ex.answers[x.q] !== '').length;
    const submitBtn = h('button.btn.primary', { on: { click: () => this.confirmSubmit(items) } }, 'Submit exam');
    const palette = h('aside.card.palette', { 'aria-label': 'Question navigator' }, timeEl, h('p.small.muted', null, `${answered} of ${items.length} answered`), bar(answered, items.length, { label: 'Answered' }),
      h('div.cells', { style: { marginTop: '.8rem' } }, items.map((x, i) => h('button.cell' + (ex.answers[x.q] !== undefined && ex.answers[x.q] !== '' ? '.answered' : '') + (ex.flags[x.q] ? '.flag' : '') + (i === ex.i ? '.current' : ''), { type: 'button', 'aria-label': `Question ${i + 1}${ex.answers[x.q] !== undefined && ex.answers[x.q] !== '' ? ', answered' : ''}${ex.flags[x.q] ? ', flagged' : ''}`, on: { click: () => go(i) } }, String(i + 1)))),
      h('div.stack', { style: { marginTop: '1rem' } }, submitBtn, h('button.btn.ghost.sm', { on: { click: async () => { if (await confirmDialog('Abandon this exam?', 'Your answers in this exam will be discarded and nothing will be scored.', 'Abandon exam', { danger: true })) { st.activeExam = null; Store.save(); clearInterval(Exam.tick); Shell.route(); } } } }, 'Abandon exam')));
    main.appendChild(h('div.page', null, h('div.page-head', null, h('div', null, h('h1', null, ex.title), h('p', null, 'Answers are hidden until you submit. You can move between questions and change answers at any time.'))), h('div.exam-wrap', null, card, palette)));
  },
  async confirmSubmit(items) {
    const ex = Store.state.activeExam; if (!ex) return;
    const un = items.filter(x => ex.answers[x.q] === undefined || ex.answers[x.q] === '').length, fl = items.filter(x => ex.flags[x.q]).length;
    const ok = await confirmDialog('Submit exam?', `${un ? un + ' question(s) are unanswered and will be marked incorrect. ' : 'All questions are answered. '}${fl ? fl + ' question(s) are flagged. ' : ''}After submitting you will see your score, explanations and sources.`, 'Submit exam');
    if (ok) this.submit(false);
  },
  submit(timeUp) {
    const st = Store.state, ex = st.activeExam; if (!ex) return;
    clearInterval(Exam.tick);
    const s = nowStamp();
    const res = ex.items.map(it => {
      const q = Model.q(it.q); if (!q) return null;
      const a = ex.answers[it.q]; let ok = false, g = '';
      if (q.type === 'ident') { g = String(a || ''); ok = !!g.trim() && Core.check(q, g).ok; }
      else { g = a === undefined ? '' : q.opts[a][0]; ok = a === 0; }
      Model.recordAttempt(q, ok, { mode: 'exam', given: g });
      return { q: q.id, g: g.slice(0, 160), ok, ov: false };
    }).filter(Boolean);
    const rec = { id: ex.id, t: s.t, d: s.d, done: true, title: ex.title + (timeUp ? ' (time limit reached)' : ''), n: res.length, dur: Math.round((Date.now() - ex.startMs) / 1000), items: res };
    st.exams.push(rec); st.activeExam = null; Store.save();
    const search = $('#gsearch'); if (search) { search.disabled = false; search.placeholder = 'Search lessons, terms, formulas, questions…'; }
    location.hash = '#/exam/result/' + rec.id;
  },
  result(main, id) {
    const st = Store.state, e = st.exams.find(x => x.id === id);
    if (!e) { main.appendChild(h('div.page.narrow', null, h('div.card.empty', null, h('p', null, 'That exam result was not found.'), h('a.btn', { href: '#/exam' }, 'Back to mock exams')))); return; }
    const items = e.items.map(r => Object.assign({ qq: Model.q(r.q) }, r)).filter(r => r.qq);
    const ok = items.filter(r => r.ok).length, n = items.length, ov = items.filter(r => r.ov).length;
    const byTopic = {}; items.forEach(r => { const t = r.qq.topic; byTopic[t] = byTopic[t] || [0, 0]; byTopic[t][1]++; if (r.ok) byTopic[t][0]++; });
    const missed = items.filter(r => !r.ok);
    const missedIdent = missed.filter(r => r.qq.type === 'ident').map(r => r.q), missedMc = missed.filter(r => r.qq.type === 'mcq').map(r => r.q);
    const missedConcepts = [...new Set(missed.map(r => r.qq.cid))].map(Model.concept).filter(Boolean);
    const ring = (() => { const p = n ? ok / n : 0, R = 46, C = 2 * Math.PI * R; return h('div', { html: `<svg class="score-ring" viewBox="0 0 110 110" role="img" aria-label="Score ${pct(ok, n)} percent"><circle cx="55" cy="55" r="${R}" fill="none" stroke="var(--surface-3)" stroke-width="10"/><circle cx="55" cy="55" r="${R}" fill="none" stroke="var(--primary)" stroke-width="10" stroke-linecap="round" stroke-dasharray="${(C * p).toFixed(1)} ${C.toFixed(1)}" transform="rotate(-90 55 55)"/><text x="55" y="62" text-anchor="middle" font-size="22" font-weight="700" fill="var(--text)">${pct(ok, n)}%</text></svg>` }); })();
    const list = h('div.stack');
    items.forEach((r, i) => {
      const q = r.qq;
      const ovBtn = !r.ok && q.type === 'ident' && r.g ? h('button.btn.sm', { on: { click: ev => { r.ok = true; r.ov = true; const rec = e.items.find(x => x.q === r.q); rec.ok = true; rec.ov = true; const arr = st.attempts; for (let k = arr.length - 1; k >= 0; k--) if (arr[k].q === r.q && arr[k].mode === 'exam') { arr[k].ok = true; arr[k].ov = true; break; } Store.save(); ev.currentTarget.replaceWith(h('span.chip.ok', null, 'Self-credited (recorded)')); } } }, 'My wording was valid — count it') : null;
      list.appendChild(h('div.feedback.' + (r.ok ? 'ok' : 'bad'), null, h('div.fh', null, icon(r.ok ? 'check' : 'x'), `${i + 1}. ${r.ok ? (r.ov ? 'Self-credited' : 'Correct') : r.g ? 'Incorrect' : 'Unanswered'}`, h('span', { style: { marginLeft: 'auto', fontWeight: 500 } }, lecChip(q.lec))),
        h('div.fb', null, h('div.small.muted', null, Model.topic(q.topic).title), promptBody(q), h('p.small', null, 'Your answer: ', h('b', null, r.g || '—')), answerReveal(q), ovBtn)));
    });
    main.appendChild(h('div.page.narrow', null,
      h('div.card', null, h('div.result-head', null, ring, h('div', null, h('h1', null, e.title || 'Exam results'), h('p', null, `${ok} of ${n} correct · ${fmtDate(e.d)}` + (e.dur ? ` · ${Math.floor(e.dur / 60)} min ${e.dur % 60} s` : '') + (ov ? ` · includes ${ov} self-credited` : '')),
        h('div.row', null, missedIdent.length ? h('a.btn.primary', { href: '#/ident/ids/' + missedIdent.join(',') }, 'Review my mistakes (' + missedIdent.length + ' identification)') : null, missedMc.length ? h('a.btn', { href: '#/mcq/ids/' + missedMc.join(',') }, 'Review ' + missedMc.length + ' multiple choice') : null, h('a.btn.ghost', { href: '#/exam/new' }, 'New exam'))))),
      h('div.card', null, h('h2', null, 'Results by topic'), h('div.table-wrap', null, h('table', null, h('thead', null, h('tr', null, h('th', null, 'Topic'), h('th.num', null, 'Correct'), h('th.num', null, 'Score'))), h('tbody', null, Object.keys(byTopic).sort((a, b) => byTopic[a][0] / byTopic[a][1] - byTopic[b][0] / byTopic[b][1]).map(t => h('tr', null, h('td', null, h('a', { href: '#/lessons/' + t }, Model.topic(t).title)), h('td.num', null, `${byTopic[t][0]} / ${byTopic[t][1]}`), h('td.num', null, pct(byTopic[t][0], byTopic[t][1]) + '%'))))))),
      missedConcepts.length ? h('div.card', null, h('h2', null, 'Missed concepts'), h('div.row', null, missedConcepts.map(c => h('a.chip', { href: '#/glossary/' + c.id }, c.term)))) : null,
      h('h2', { style: { marginTop: '1.4rem' } }, 'All questions with explanations'), list));
  },
  onKey(e) { if (this._key) this._key(e); },
  cleanup() { this._key = null; clearInterval(Exam.tick); const s = $('#gsearch'); if (s) { s.disabled = false; s.placeholder = 'Search lessons, terms, formulas, questions…'; } }
};
