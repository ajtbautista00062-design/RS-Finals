// ───────── Flashcards with spaced review ─────────
function scheduleExplainer() {
  return h('details.more', null, h('summary', null, 'How the review schedule works'),
    h('div.small', null,
      h('p', null, 'Each concept has two cards: definition → term and term → definition. Ratings use an SM-2-style schedule. Intervals are in local calendar days, and the due date is the day the card returns.'),
      h('ul', null,
        h('li', null, h('b', null, 'Again: '), 'the card restarts (due today, shown again later in this session); ease −0.20 (minimum 1.30).'),
        h('li', null, h('b', null, 'Hard: '), '1 day for a new card, otherwise interval × 1.2; ease −0.15.'),
        h('li', null, h('b', null, 'Good: '), '1 day, then 3 days, then interval × ease (starting ease 2.5).'),
        h('li', null, h('b', null, 'Easy: '), '3 days for a new card, otherwise interval × ease × 1.3; ease +0.15 (maximum 3.0).')),
      h('p', null, 'Due cards (oldest first) come before new cards, and new cards are limited per day in Settings. Ratings are self-reported familiarity: they schedule reviews but never count as mastery or accuracy.')));
}
const Flash = { session: null };
Views.flash = {
  title: 'Flashcards', nav: 'flash',
  render(main, params) {
    const [k, v] = params;
    if (k === 'topic' && Model.topic(v)) { history.replaceState(null, '', '#/flash'); return this.start({ lecs: [], topic: v, dir: 'mixed', scope: 'all' }); }
    if (k === 'setup') Flash.session = null;
    if (Flash.session && !Flash.session.done) return this.run(main);
    this.config(main, Flash.session && Flash.session.done ? Flash.session : null);
  },
  queue(opts) {
    const st = Store.state, today = Core.dateKey();
    const concepts = DATA.concepts.filter(c => (!opts.lecs.length || opts.lecs.includes(c.lec)) && (!opts.topic || c.topic === opts.topic));
    const dirs = opts.dir === 'mixed' ? ['d2t', 't2d'] : [opts.dir];
    const due = [], fresh = [];
    concepts.forEach(c => dirs.forEach(d => { const card = st.cards[Model.cardKey(c.id, d)]; if (card) { if (card.due <= today || opts.scope === 'all') due.push({ c, d, card }); } else fresh.push({ c, d }); }));
    due.sort((a, b) => (a.card.due < b.card.due ? -1 : a.card.due > b.card.due ? 1 : 0));
    const introducedToday = Object.values(st.cards).filter(x => x.first === today).length;
    const cap = opts.scope === 'all' ? fresh.length : Math.max(0, (st.settings.newPerDay || 0) - introducedToday);
    return { due, fresh: Model.shuffle(fresh), cap, introducedToday };
  },
  config(main, finished) {
    const opts = { lecs: [], topic: '', dir: 'mixed', scope: 'due' };
    const info = h('p.small', { 'aria-live': 'polite' });
    const startBtn = h('button.btn.primary', { on: { click: () => this.start(opts) } }, icon('play', 18), 'Start reviewing');
    const refresh = () => { const qd = this.queue(opts); const n = qd.due.length + Math.min(qd.cap, qd.fresh.length); info.textContent = opts.scope === 'all' ? `${qd.due.length + qd.fresh.length} cards in this selection (cram mode still updates the schedule).` : `${qd.due.length} due · ${Math.min(qd.cap, qd.fresh.length)} new available today (${qd.introducedToday} new introduced today).`; startBtn.disabled = !n; if (!n) info.textContent += ' Nothing to review right now — choose “All cards” to cram, or come back when cards are due.'; };
    const lecBox = h('fieldset', null, h('legend', null, 'Lectures'), DATA.lectures.map(l => { const i = h('input', { type: 'checkbox' }); i.addEventListener('change', () => { if (i.checked) opts.lecs.push(l.id); else opts.lecs.splice(opts.lecs.indexOf(l.id), 1); refresh(); }); return h('label.check', null, i, l.short + ' — ' + l.title); }));
    const topicSel = h('select', { 'aria-label': 'Topic' }, h('option', { value: '' }, 'All topics'), DATA.lectures.map(l => h('optgroup', { label: l.short }, Model.topicsOf(l.id).map(t => h('option', { value: t.id }, t.title)))));
    topicSel.addEventListener('change', () => { opts.topic = topicSel.value; refresh(); });
    const seg = (label, key, list) => { const s = h('div.seg', { role: 'group', 'aria-label': label }, list.map(([v, t]) => h('button', { type: 'button', 'aria-pressed': String(opts[key] === v), on: { click: e => { opts[key] = v; $$('button', s).forEach(b => b.setAttribute('aria-pressed', String(b === e.currentTarget))); refresh(); } } }, t))); return h('div.field', null, h('span', { style: { fontWeight: 600 } }, label), s); };
    const c = Model.compute();
    const fam = { 0: 0, 1: 0, 2: 0, 3: 0 }; Store.state.reviews.forEach(r => { fam[r.r]++; }); const nr = Store.state.reviews.length;
    const acc = DATA.lectures.reduce((a, l) => [a[0] + c.lec[l.id].correct, a[1] + c.lec[l.id].attempts], [0, 0]);
    main.appendChild(h('div.page.narrow', null,
      h('div.page-head', null, h('div', null, h('h1', null, 'Flashcards'), h('p', null, 'Definition → term and term → definition. The answer stays hidden until you reveal it, then you rate how well you knew it.'))),
      finished ? h('div.banner.info', null, icon('check'), h('div', null, `Session finished: ${finished.reviewed} ratings. `, finished.again ? `${finished.again} card(s) marked Again will return today.` : '')) : null,
      h('div.card', null, h('div.filters', null, lecBox, h('div.stack', null, h('div.field', null, h('label', null, 'Topic'), topicSel), seg('Direction', 'dir', [['d2t', 'Definition → term'], ['t2d', 'Term → definition'], ['mixed', 'Mixed']]), seg('Cards', 'scope', [['due', 'Due + new'], ['all', 'All cards (cram)']]))),
        h('div.row', { style: { marginTop: '1rem' } }, startBtn, info)),
      h('div.grid.two', { style: { marginTop: '1rem' } },
        h('div.card.soft', null, h('h3', null, 'Self-rated familiarity'), h('p.small.muted', null, nr ? `${nr} ratings: Again ${pct(fam[0], nr)}% · Hard ${pct(fam[1], nr)}% · Good ${pct(fam[2], nr)}% · Easy ${pct(fam[3], nr)}%` : 'No ratings yet.'), h('p.small.muted', { style: { margin: 0 } }, 'Your own judgement; used only for scheduling.')),
        h('div.card.soft', null, h('h3', null, 'Demonstrated accuracy'), h('p.small.muted', null, acc[1] ? `${pct(acc[0], acc[1])}% of ${acc[1]} graded answers` : 'No graded answers yet.'), h('p.small.muted', { style: { margin: 0 } }, 'From identification, multiple-choice and exam answers only.'))),
      h('div', { style: { marginTop: '1rem' } }, scheduleExplainer())));
    refresh();
  },
  start(opts) {
    const qd = this.queue(opts);
    const items = qd.due.map(x => ({ c: x.c, d: x.d })).concat(qd.fresh.slice(0, qd.cap).map(x => ({ c: x.c, d: opts.dir === 'mixed' ? x.d : opts.dir })));
    if (!items.length) { toast('No cards to review with these settings.'); return; }
    Flash.session = { items, i: 0, reviewed: 0, again: 0, done: false, requeued: {} };
    if (location.hash !== '#/flash') location.hash = '#/flash'; else Shell.route();
  },
  run(main) {
    const s = Flash.session, it = s.items[s.i];
    if (!it) { s.done = true; return this.config(main, s); }
    const c = it.c, d2t = it.d === 'd2t', key = Model.cardKey(c.id, it.d), card = Store.state.cards[key];
    const today = Core.dateKey(), prev = Core.previewIntervals(card, today);
    const back = h('div.back', { hidden: true },
      h('div.side-label', null, d2t ? 'Term' : 'Definition'),
      h('div.face' + (d2t ? '.term' : ''), null, d2t ? c.term : rich(c.def)),
      d2t && c.alts.length ? h('p.small.muted', { style: { marginTop: '.5rem' } }, 'Also accepted: ' + c.alts.slice(0, 6).join(' · ')) : null,
      h('div', { style: { marginTop: '.6rem' } }, Model.srcChips(c.lec, c.p, c.x)));
    const label = n => n === 0 ? 'again today' : n === 1 ? '1 day' : n + ' days';
    const ratings = h('div.ratings', { hidden: true, role: 'group', 'aria-label': 'Rate your recall' },
      [['Again', 'rate-again'], ['Hard', ''], ['Good', ''], ['Easy', 'rate-easy']].map(([t, cls], r) => h('button.btn' + (cls ? '.' + cls : ''), { on: { click: () => rate(r) } }, h('span', null, `${r + 1} · ${t}`), h('small', null, label(prev[r])))));
    const revealBtn = h('button.btn.primary', { on: { click: () => reveal() } }, icon('eye', 18), 'Show answer');
    let revealed = false;
    function reveal() { if (revealed) return; revealed = true; back.hidden = false; ratings.hidden = false; revealBtn.hidden = true; $('button', ratings).focus(); }
    const rate = r => {
      if (!revealed) return;
      if (!card) Store.state.cards[key] = { first: today };
      const nc = Model.rateCard(c.id, it.d, r); if (!nc.first) nc.first = card && card.first ? card.first : today; Store.save();
      s.reviewed++;
      if (r === 0) { s.again++; if ((s.requeued[key] || 0) < 2) { s.requeued[key] = (s.requeued[key] || 0) + 1; s.items.splice(Math.min(s.items.length, s.i + 4), 0, it); } }
      s.i++; Shell.route();
    };
    this._key = e => { if ((e.key === ' ' || e.key === 'Enter') && !revealed) { e.preventDefault(); reveal(); } else if (revealed && /^[1-4]$/.test(e.key)) { e.preventDefault(); rate(Number(e.key) - 1); } };
    main.appendChild(h('div.page.narrow', null,
      h('div.session-bar', null, h('span.count', null, `Card ${s.i + 1} of ${s.items.length}`), bar(s.i, s.items.length, { label: 'Session progress' }), h('span.count', null, `${s.reviewed} rated`), h('button.btn.sm.ghost', { on: { click: () => { Flash.session = null; location.hash = '#/flash/setup'; } } }, 'End')),
      h('div.flash', null, h('section.flashcard', { 'aria-live': 'polite' },
        h('div.qmeta', { style: { justifyContent: 'center' } }, lecChip(c.lec), h('span.chip', null, card ? `due ${card.due === today ? 'today' : fmtDate(card.due, { month: 'short', day: 'numeric' })}` : 'new card')),
        h('div.side-label', null, d2t ? 'Definition — recall the term' : 'Term — recall the definition'),
        h('div.face' + (d2t ? '' : '.term'), null, d2t ? rich(c.def) : c.term),
        back)),
      h('div.row', { style: { justifyContent: 'center', marginTop: '1rem' } }, revealBtn), ratings,
      h('p.small.muted', { style: { textAlign: 'center', marginTop: '.8rem' } }, 'Keys: Space to reveal, 1–4 to rate.')));
  },
  onKey(e) { if (this._key) this._key(e); },
  cleanup() { this._key = null; }
};
