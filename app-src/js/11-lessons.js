// ───────── Lesson guide ─────────
function noteBox(n) {
  return h('div.note', { role: 'note' },
    h('div.nl', null, h('span.tag', null, 'Lecture wording'), rich(n.lecture)),
    h('div.nc', null, h('span.tag', null, 'Clarification'), rich(n.clar), ' ', Model.srcChips(n.lec, n.p)));
}
function figure(id, caption) {
  const f = FIG[id]; if (!f) return null;
  return h('figure.fig', null, h('div', { html: f() }), caption ? h('figcaption', null, rich(caption)) : null);
}
function tableEl(head, rows, caption) {
  return h('div.table-wrap', { tabindex: '0', role: 'region', 'aria-label': caption ? plain(caption) : 'Table' }, h('table', null, caption ? h('caption', null, rich(caption)) : null,
    h('thead', null, h('tr', null, head.map(c => h('th', { scope: 'col' }, rich(c))))), h('tbody', null, rows.map(r => h('tr', null, r.map((c, i) => i === 0 ? h('th', { scope: 'row' }, rich(c)) : h('td', null, rich(c))))))));
}

// Interactive error-matrix lab. Orientation is always labeled: rows = classified (map), columns = reference.
function matrixLab() {
  const classes = ['Built-up', 'Forest', 'Vegetation', 'Bare soil'];
  const LECT = [[65, 4, 22, 24], [6, 81, 5, 8], [0, 11, 85, 19], [4, 7, 3, 90]];
  let M = LECT.map(r => r.slice());
  const out = h('div'), msg = h('p.small', { role: 'alert', style: { color: 'var(--bad)', margin: '.3rem 0' } });
  const inputs = M.map((r, i) => r.map((v, j) => {
    const inp = h('input', { type: 'number', min: 0, step: 1, value: String(v), inputmode: 'numeric', 'aria-label': `Map ${classes[i]}, reference ${classes[j]}`, style: { width: '4.6rem', minHeight: '36px', padding: '.25rem .4rem', textAlign: 'right' } });
    inp.addEventListener('input', () => { const n = Number(inp.value); if (inp.value === '' || !Number.isInteger(n) || n < 0 || n > 100000) { inp.setAttribute('aria-invalid', 'true'); msg.textContent = 'Each cell must be a whole number from 0 to 100,000.'; return; } inp.removeAttribute('aria-invalid'); M[i][j] = n; msg.textContent = ''; calc(); });
    return inp;
  }));
  function calc() {
    clear(out);
    const N = M.flat().reduce((a, b) => a + b, 0); if (!N) { out.appendChild(h('p.muted', null, 'Enter at least one plot.')); return; }
    const rows = M.map(r => r.reduce((a, b) => a + b, 0)), cols = classes.map((_, j) => M.reduce((a, r) => a + r[j], 0));
    const diag = M.reduce((a, r, i) => a + r[i], 0), sp = rows.reduce((a, r, i) => a + r * cols[i], 0);
    const oa = diag / N, chance = sp / (N * N), kappa = (N * diag - sp) / (N * N - sp);
    const f1 = x => (isFinite(x) ? (x * 100).toFixed(1) + '%' : '—');
    out.appendChild(tableEl(['Class', 'User’s accuracy (÷ row total)', 'Commission error', 'Producer’s accuracy (÷ column total)', 'Omission error'], classes.map((c, i) => [c, `${M[i][i]} / ${rows[i]} = ${f1(M[i][i] / rows[i])}`, f1(1 - M[i][i] / rows[i]), `${M[i][i]} / ${cols[i]} = ${f1(M[i][i] / cols[i])}`, f1(1 - M[i][i] / cols[i])]), 'Computed from the matrix above (lecture orientation: rows = classified data).'));
    out.appendChild(h('ol.steps', null,
      h('li', null, `Overall accuracy = Σ diagonal / N = ${diag} / ${N} = ${f1(oa)}`),
      h('li', null, `Σ(Xi+ · X+i) = ${rows.map((r, i) => r + '×' + cols[i]).join(' + ')} = ${sp.toLocaleString()}`),
      h('li', null, `Chance agreement = ${sp.toLocaleString()} / ${N}² = ${isFinite(chance) ? chance.toFixed(4) : '—'}`),
      h('li', null, `K̂ = (N·ΣXii − ΣXi+X+i) / (N² − ΣXi+X+i) = (${(N * diag).toLocaleString()} − ${sp.toLocaleString()}) / (${(N * N).toLocaleString()} − ${sp.toLocaleString()}) = `, h('b', null, isFinite(kappa) ? kappa.toFixed(4) : '—'))));
    totals.forEach((cell, i) => { cell.textContent = String(rows[i]); }); colTotals.forEach((cell, j) => { cell.textContent = String(cols[j]); }); nCell.textContent = String(N);
  }
  const totals = classes.map(() => h('td.num')), colTotals = classes.map(() => h('td.num')), nCell = h('td.num', null, '');
  const table = h('div.table-wrap', { tabindex: '0', role: 'region', 'aria-label': 'Editable error matrix' }, h('table', null,
    h('caption', null, 'Editable error matrix. ROWS = classified data (map); COLUMNS = reference data. Diagonal cells (shaded) are correct plots.'),
    h('thead', null, h('tr', null, h('th', { scope: 'col' }, 'Map ↓ / Reference →'), classes.map(c => h('th', { scope: 'col' }, c)), h('th', { scope: 'col' }, 'Row total (Xi+)'))),
    h('tbody', null, classes.map((c, i) => h('tr', null, h('th', { scope: 'row' }, c), inputs[i].map((inp, j) => h('td', { style: i === j ? { background: 'var(--ok-soft)' } : null }, inp)), totals[i])),
      h('tr', null, h('th', { scope: 'row' }, 'Column total (X+i)'), colTotals, nCell))));
  const resetBtn = h('button.btn.sm', { on: { click: () => { M = LECT.map(r => r.slice()); inputs.forEach((r, i) => r.forEach((inp, j) => { inp.value = String(M[i][j]); inp.removeAttribute('aria-invalid'); })); msg.textContent = ''; calc(); } } }, 'Reset to lecture values');
  const wrap = h('div.card.flat', { style: { margin: '1rem 0' } }, h('div.card-head', null, h('h3', null, 'Matrix lab: compute OA, UA, PA and kappa'), h('span.spacer'), resetBtn), table, msg, out);
  calc();
  return wrap;
}

function renderBlocks(blocks, t) {
  return (blocks || []).map(b => {
    switch (b[0]) {
      case 'h': return h('h3.sub', null, rich(b[1]));
      case 'p': return h('p', null, rich(b[1]));
      case 'ul': return h('ul', null, b[1].map(x => h('li', null, rich(x))));
      case 'ol': return h('ol', null, b[1].map(x => h('li', null, rich(x))));
      case 'steps': return h('ol.steps', null, b[1].map(x => h('li', null, rich(x))));
      case 'table': return tableEl(b[1], b[2], b[3]);
      case 'note': return noteBox(Model.note(b[1]));
      case 'fig': return figure(b[1], b[2]);
      case 'formula': return Views.glossary.formulaCard(Model.formula(b[1]));
      case 'quote': return h('blockquote.quote', null, rich(b[1]), h('cite', null, b[2]));
      case 'lab': return b[1] === 'matrix' ? matrixLab() : null;
      default: return null;
    }
  });
}

// Inline "What term is being described?" exercise using three of the topic's concepts.
function lessonExercise(t) {
  const cs = Model.shuffle(Model.conceptsOf(t.id)).slice(0, 3);
  if (!cs.length) return null;
  const box = h('section.exercise', { 'aria-labelledby': 'ex-' + t.id }, h('h2', { id: 'ex-' + t.id, style: { marginTop: 0 } }, 'What term is being described?'), h('p.small.muted', null, 'Type each answer before checking. Answers are graded with the same accepted-alternatives list as identification practice.'));
  cs.forEach((c, i) => {
    const q = Model.q('D:' + c.id);
    const input = h('input', { type: 'text', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', 'aria-label': 'Your answer for clue ' + (i + 1) });
    const fb = h('div', { 'aria-live': 'polite' });
    let done = false;
    const check = () => {
      if (done) return; const v = input.value.trim(); if (!v) { input.focus(); fb.textContent = 'Type an answer first.'; return; }
      done = true; const r = Core.check(q, v); Model.recordAttempt(q, r.ok, { mode: 'lesson', given: v }); input.disabled = true; btn.disabled = true;
      clear(fb).appendChild(h('div.feedback.' + (r.ok ? 'ok' : 'bad'), null, h('div.fh', null, icon(r.ok ? 'check' : 'x'), r.ok ? 'Correct' : 'Not quite'), h('div.fb', null, h('div.canon', null, c.term), c.alts.length ? h('div.small.muted', null, 'Also accepted: ' + c.alts.slice(0, 6).join(', ')) : null)));
    };
    const btn = h('button.btn.sm.primary', { on: { click: check } }, 'Check');
    input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); check(); } });
    box.appendChild(h('div', { style: { marginTop: '.9rem' } }, h('p', { style: { marginBottom: '.4rem' } }, h('b', null, (i + 1) + '. '), rich(c.def)), h('div.answer-row', null, input, btn), fb));
  });
  return box;
}

Views.lessons = {
  title: 'Lesson Guide', nav: 'lessons',
  renderTopicBody(t, forPrint) {
    const st = Store.state;
    const keys = (t.keys || []).map(Model.concept).filter(Boolean);
    const art = h('article.lesson' + (forPrint ? '.print-topic' : ''), null,
      h('div.row', null, lecChip(t.lec), Model.srcChips(t.lec, t.p)),
      h(forPrint ? 'h2' : 'h1', { style: { marginTop: '.5rem' } }, t.title),
      h('p.summary', null, rich(t.summary)),
      keys.length ? frag(h('h2', null, 'Exam-ready terms'), h('div.term-list', null, keys.map(c => h('div.term', { id: forPrint ? null : 'term-' + c.id }, h('b', null, c.term), c.alts.length ? h('div.alts', null, 'Accepted equivalents: ' + c.alts.slice(0, 8).join(' · ')) : null, h('div', null, rich(c.def)), c.note ? h('div.small.muted', null, c.note) : null, h('div', { style: { marginTop: '.25rem' } }, Model.srcChips(c.lec, c.p, c.x)))))) : null,
      h('h2', null, 'Explanation'), renderBlocks(t.blocks, t),
      t.confused && t.confused.length ? frag(h('h2', null, 'Commonly confused'), h('div.confused', null, t.confused.map(([a, b, d]) => h('div.cf', null, h('h4', null, a, h('span.muted', null, '  vs  '), b), h('p', { style: { margin: 0 } }, rich(d)))))) : null,
      t.aid ? h('div.aid', { style: { marginTop: '1.2rem' } }, h('span.tag', null, 'Memory aid — learning aid, not a lecture quotation'), rich(t.aid.replace(/^Learning aid[^:]*:\s*/, ''))) : null
    );
    if (!forPrint) {
      art.appendChild(h('div', { style: { marginTop: '1.4rem' } }, lessonExercise(t)));
      const b = !!st.bookmarks.t[t.id];
      art.insertBefore(h('div.row', { style: { margin: '.2rem 0 .8rem' } },
        h('a.btn.sm.primary', { href: '#/ident/topic/' + t.id }, icon('target', 16), 'Identify this topic'), h('a.btn.sm', { href: '#/mcq/topic/' + t.id }, icon('list', 16), 'Multiple choice'), h('a.btn.sm', { href: '#/flash/topic/' + t.id }, icon('cards', 16), 'Flashcards'),
        h('button.btn.sm.ghost', { 'aria-pressed': String(b), on: { click: e => { st.bookmarks.t[t.id] = !st.bookmarks.t[t.id]; if (!st.bookmarks.t[t.id]) delete st.bookmarks.t[t.id]; Store.save(); e.currentTarget.setAttribute('aria-pressed', String(!!st.bookmarks.t[t.id])); clear(e.currentTarget).append(icon('bookmark', 16), st.bookmarks.t[t.id] ? 'Bookmarked' : 'Bookmark'); } } }, icon('bookmark', 16), b ? 'Bookmarked' : 'Bookmark'),
        h('button.btn.sm.ghost', { on: { click: () => { st.settings.reading = !st.settings.reading; Store.save(); Shell.applySettings(); } } }, icon('eye', 16), 'Reading mode')), art.children[3]);
    }
    return art;
  },
  render(main, params) {
    const tid = params[0];
    if (!tid || !Model.topic(tid)) return this.renderIndex(main);
    const t = Model.topic(tid), st = Store.state, c = Model.compute();
    st.lessonsRead[t.id] = Core.dateKey(); st.lastLesson = t.id; Store.save();
    const all = DATA.topics, i = all.indexOf(t);
    const toc = h('nav.toc', { 'aria-label': 'Lesson topics' }, DATA.lectures.map(l => h('div', { class: l.id === t.lec ? '' : 'toc-mobile-hide' }, h('h3', null, l.short), Model.topicsOf(l.id).map(x => { const tp = c.topic[x.id]; return h('a', { href: '#/lessons/' + x.id, 'aria-current': x.id === t.id ? 'true' : 'false' }, h('span.st', null, tp.mastered + '/' + tp.concepts), x.title); }))));
    const body = this.renderTopicBody(t, false);
    body.appendChild(h('div.lesson-nav', null, i > 0 ? h('a.btn', { href: '#/lessons/' + all[i - 1].id }, icon('arrowL', 18), all[i - 1].title) : h('span'), i < all.length - 1 ? h('a.btn', { href: '#/lessons/' + all[i + 1].id }, all[i + 1].title, icon('arrowR', 18)) : h('span')));
    main.appendChild(h('div.page', null, h('div.lesson-layout', null, toc, body)));
    const cur = toc.querySelector('[aria-current="true"]');
    if (cur && innerWidth >= 900) toc.scrollTop = Math.max(0, cur.offsetTop - toc.offsetTop - 120);
  },
  renderIndex(main) {
    const c = Model.compute(), st = Store.state;
    main.appendChild(h('div.page', null,
      h('div.page-head', null, h('div', null, h('h1', null, 'Complete Lesson Guide'), h('p', null, 'Every topic has an exam-ready summary, exact terms with accepted equivalents, explanations, comparison tables, figures, “lecture wording vs clarification” notes, commonly confused pairs, a labeled memory aid and a short identification exercise.'))),
      DATA.lectures.map(l => h('section', { style: { marginBottom: '1.6rem' } }, h('div.row', null, lecChip(l.id), h('h2', { style: { margin: 0 } }, l.title), h('span.small.muted', null, l.file)),
        h('div.grid.auto', { style: { marginTop: '.7rem' } }, Model.topicsOf(l.id).map(t => { const tp = c.topic[t.id]; return h('a.card', { href: '#/lessons/' + t.id, style: { textDecoration: 'none', color: 'inherit' } }, h('h3', null, t.title), h('p.small.muted', null, t.summary.length > 150 ? t.summary.slice(0, 147) + '…' : t.summary), meter('Mastered', tp.mastered, tp.concepts, { thin: true }), st.lessonsRead[t.id] ? h('p.small.faint', { style: { margin: '.4rem 0 0' } }, 'Last opened ' + fmtDate(st.lessonsRead[t.id], { month: 'short', day: 'numeric' })) : null); }))))));
  }
};
