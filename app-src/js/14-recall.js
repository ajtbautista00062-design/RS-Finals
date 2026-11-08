// ───────── Recall mode: calm, label-free active retrieval ─────────
const RECALL_MODES = [['d2t', 'Definition → term'], ['t2e', 'Term → explanation'], ['diff', 'Explain the difference'], ['steps', 'List the steps'], ['formula', 'Formula recall'], ['mixed', 'Mixed retrieval']];
function recallItems(mode, lecs) {
  const inL = x => !lecs.length || lecs.includes(x.lec);
  const out = [];
  if (mode === 'd2t' || mode === 'mixed') DATA.concepts.filter(inL).forEach(c => out.push({ id: 'd2t:' + c.id, m: 'd2t', lec: c.lec, prompt: c.def, ask: 'Which term is this?', model: c.term + (c.alts.length ? '\n(also accepted: ' + c.alts.slice(0, 5).join(', ') + ')' : ''), q: Model.q('D:' + c.id), p: c.p }));
  if (mode === 't2e' || mode === 'mixed') {
    DATA.concepts.filter(inL).forEach(c => out.push({ id: 't2e:' + c.id, m: 't2e', lec: c.lec, prompt: c.term, ask: 'Explain this term in your own words.', model: c.def, p: c.p }));
    DATA.recall.filter(r => r.kind === 'explain' && inL(r)).forEach(r => out.push({ id: r.id, m: 't2e', lec: r.lec, prompt: r.prompt, ask: 'Explain.', model: r.model, p: r.p }));
  }
  if (mode === 'diff' || mode === 'mixed') {
    DATA.recall.filter(r => r.kind === 'diff' && inL(r)).forEach(r => out.push({ id: r.id, m: 'diff', lec: r.lec, prompt: r.prompt, ask: 'Explain the difference.', model: r.model, p: r.p }));
    DATA.topics.filter(inL).forEach(t => (t.confused || []).forEach(([a, b, d], i) => out.push({ id: 'cf:' + t.id + ':' + i, m: 'diff', lec: t.lec, prompt: `${a}  vs  ${b}`, ask: 'Explain the difference.', model: d, p: t.p })));
  }
  if (mode === 'steps' || mode === 'mixed') DATA.recall.filter(r => r.kind === 'steps' && inL(r)).forEach(r => out.push({ id: r.id, m: 'steps', lec: r.lec, prompt: r.prompt, ask: 'List the steps or items in order.', model: r.model, p: r.p }));
  if (mode === 'formula' || mode === 'mixed') {
    DATA.formulas.filter(inL).forEach(f => out.push({ id: 'f:' + f.id, m: 'formula', lec: f.lec, prompt: f.name, ask: 'Write the formula and define every symbol (with units).', model: plain(f.expr) + '\n' + f.vars.map(v => plain(v[0]) + ': ' + v[1]).join('\n') + (f.units ? '\nUnits: ' + f.units : '') + (f.example ? '\nExample: ' + f.example : ''), p: f.p }));
    DATA.recall.filter(r => r.kind === 'formula' && inL(r)).forEach(r => out.push({ id: r.id, m: 'formula', lec: r.lec, prompt: r.prompt, ask: 'Write it out.', model: r.model, p: r.p }));
  }
  return out;
}
const Recall = { session: null, timerId: null };
Views.recall = {
  title: 'Recall Mode', nav: 'recall',
  render(main, params) {
    if (params[0] === 'setup') Recall.session = null;
    if (Recall.session && !Recall.session.done) return this.run(main);
    this.config(main);
  },
  config(main) {
    const opts = { mode: 'mixed', lecs: [], len: 15, timer: !!Store.state.settings.timer, focus: true };
    const info = h('p.small', { 'aria-live': 'polite' });
    const refresh = () => { const n = recallItems(opts.mode, opts.lecs).length; info.textContent = `${n} prompts available.`; start.disabled = !n; };
    const modeSeg = h('div.seg', { role: 'group', 'aria-label': 'Retrieval mode' }, RECALL_MODES.map(([v, t]) => h('button', { type: 'button', 'aria-pressed': String(opts.mode === v), on: { click: e => { opts.mode = v; $$('button', modeSeg).forEach(b => b.setAttribute('aria-pressed', String(b === e.currentTarget))); refresh(); } } }, t)));
    const lecs = h('fieldset', null, h('legend', null, 'Lectures'), DATA.lectures.map(l => { const i = h('input', { type: 'checkbox' }); i.addEventListener('change', () => { if (i.checked) opts.lecs.push(l.id); else opts.lecs.splice(opts.lecs.indexOf(l.id), 1); refresh(); }); return h('label.check', null, i, l.short + ' — ' + l.title); }));
    const len = h('select', { 'aria-label': 'Number of prompts' }, [10, 15, 25, 40, 0].map(n => h('option', { value: String(n) }, n ? n + ' prompts' : 'All'))); len.value = '15'; len.addEventListener('change', () => { opts.len = Number(len.value); });
    const timer = h('input', { type: 'checkbox', checked: opts.timer }); timer.addEventListener('change', () => { opts.timer = timer.checked; Store.state.settings.timer = timer.checked; Store.save(); });
    const focus = h('input', { type: 'checkbox', checked: true }); focus.addEventListener('change', () => { opts.focus = focus.checked; });
    const start = h('button.btn.primary', { on: { click: () => { const all = Model.shuffle(recallItems(opts.mode, opts.lecs)); const items = opts.len ? all.slice(0, opts.len) : all; if (!items.length) return; Recall.session = { items, i: 0, res: [], done: false, timer: opts.timer, focus: opts.focus }; if (location.hash !== '#/recall') location.hash = '#/recall'; else Shell.route(); } } }, icon('play', 18), 'Begin');
    const last = Recall.session && Recall.session.done ? Recall.session : null;
    main.appendChild(h('div.page.narrow', null,
      h('div.page-head', null, h('div', null, h('h1', null, 'Recall Mode'), h('p', null, 'A quiet space for active retrieval. Choices, answers and topic labels stay hidden until you reveal them. Type your answer or recall it in your head, then compare with the model answer.'))),
      last ? h('div.banner.info', null, icon('check'), h('div', null, `Last round: ${last.res.filter(r => r === 'got').length} got it · ${last.res.filter(r => r === 'partly').length} partly · ${last.res.filter(r => r === 'missed').length} missed.`)) : null,
      h('div.card', null, h('div.field', null, h('span', { style: { fontWeight: 600 } }, 'Retrieval mode'), modeSeg),
        h('div.filters', { style: { marginTop: '.8rem' } }, lecs, h('div.stack', null, h('div.field', null, h('label', null, 'Length'), len), h('label.check', null, timer, 'Show an optional timer'), h('label.check', null, focus, 'Hide navigation while recalling (focus mode)'))),
        h('div.row', { style: { marginTop: '1rem' } }, start, info)),
      h('p.small.muted', { style: { marginTop: '1rem' } }, 'Recall self-checks count as study activity for your daily goal and streak. They are self-rated, so they do not count toward mastery. Typed definition → term answers are compared with the accepted list for your information only.')));
    refresh();
  },
  run(main) {
    const s = Recall.session, it = s.items[s.i];
    if (s.focus) document.body.classList.add('focus-mode');
    if (!it) { s.done = true; document.body.classList.remove('focus-mode'); return this.config(main); }
    let revealed = false, t0 = Date.now();
    const ta = h('textarea', { 'aria-label': 'Your answer (optional)', placeholder: 'Type your answer here, or recall it silently…', rows: it.m === 'd2t' ? 1 : 4 });
    const model = h('div', { hidden: true, 'aria-live': 'polite' });
    const timerEl = s.timer ? h('span.timer', { 'aria-live': 'off' }, '0:00') : null;
    clearInterval(Recall.timerId);
    if (timerEl) Recall.timerId = setInterval(() => { const sec = Math.floor((Date.now() - t0) / 1000); timerEl.textContent = Math.floor(sec / 60) + ':' + String(sec % 60).padStart(2, '0'); }, 500);
    const revealBtn = h('button.btn.primary', { on: { click: () => reveal() } }, icon('eye', 18), 'Reveal');
    const self = h('div.row', { hidden: true, style: { justifyContent: 'center', marginTop: '1rem' } }, [['got', 'Got it'], ['partly', 'Partly'], ['missed', 'Missed']].map(([v, t], i) => h('button.btn' + (v === 'got' ? '.primary' : ''), { on: { click: () => rate(v) } }, `${i + 1} · ${t}`)));
    function reveal() {
      if (revealed) return; revealed = true; clearInterval(Recall.timerId);
      const typed = ta.value.trim();
      let check = null;
      if (it.m === 'd2t' && typed && it.q) { const r = Core.check(it.q, typed); check = h('p.small', { style: { margin: '.5rem 0 0' } }, r.ok ? '✓ Your typed answer matches an accepted term.' : '✗ Your typed answer does not match the accepted terms' + (r.near ? ' (very close spelling)' : '') + '.'); }
      model.appendChild(h('div', null, h('div.prompt-label', { style: { marginBottom: '.4rem' } }, 'Model answer'), h('div.model', null, it.model), check, h('div', { style: { marginTop: '.6rem' } }, Model.srcChips(it.lec, it.p))));
      model.hidden = false; revealBtn.hidden = true; self.hidden = false; $('button', self).focus();
    }
    const rate = v => { if (!revealed) return; Model.recordRecall(it.id, v, it.m); s.res.push(v); if (v === 'missed') s.missed = (s.missed || []).concat([it]); s.i++; Shell.route(); };
    this._key = e => { if (!revealed && e.key === ' ') { e.preventDefault(); reveal(); } else if (revealed && /^[1-3]$/.test(e.key)) { e.preventDefault(); rate(['got', 'partly', 'missed'][Number(e.key) - 1]); } };
    ta.addEventListener('keydown', e => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey || it.m === 'd2t')) { e.preventDefault(); reveal(); } });
    main.appendChild(h('div.page', null,
      h('div.row', { style: { maxWidth: '720px', margin: '0 auto 1rem', justifyContent: 'space-between' } }, h('span.small.muted', null, `${s.i + 1} / ${s.items.length}`), timerEl, h('button.btn.sm.ghost', { on: { click: () => { Recall.session.done = true; document.body.classList.remove('focus-mode'); location.hash = '#/recall/setup'; } } }, s.focus ? 'Exit focus' : 'End')),
      h('div', { style: { maxWidth: '720px', margin: '0 auto 1rem' } }, bar(s.i, s.items.length, { thin: true, label: 'Recall progress' })),
      h('section.recall-card', null, h('div.prompt-label', { style: { textAlign: 'center' } }, it.ask), h('p.prompt', null, rich(it.prompt)), ta, h('div.row', { style: { justifyContent: 'center', marginTop: '1rem' } }, revealBtn), model, self,
        h('p.small.faint', { style: { textAlign: 'center', marginTop: '1rem' } }, 'Space reveals (when not typing) · Ctrl+Enter reveals while typing · 1–3 self-check'))));
    setTimeout(() => ta.focus({ preventScroll: true }), 40);
  },
  onKey(e) { if (this._key) this._key(e); },
  cleanup() { this._key = null; clearInterval(Recall.timerId); document.body.classList.remove('focus-mode'); }
};
