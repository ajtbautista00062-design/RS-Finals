// ───────── Coverage & sources ─────────
const STATUS_LABEL = { S: 'Substantive', T: 'Title', O: 'Outline', D: 'Duplicate', R: 'References', X: 'Closing', U: 'Unlabeled image' };
Views.coverage = {
  title: 'Coverage & Sources', nav: 'coverage',
  render(main) {
    const qPages = {}, cPages = {};
    Model.questions.forEach(q => q.p.forEach(p => { const k = q.lec + ':' + p; qPages[k] = (qPages[k] || 0) + 1; }));
    DATA.concepts.forEach(c => { c.p.forEach(p => { const k = c.lec + ':' + p; (cPages[k] = cPages[k] || []).push(c.term); }); (c.x || []).forEach(s => { (cPages[s] = cPages[s] || []).push(c.term); }); });
    const lecRows = DATA.lectures.map(l => {
      const rows = DATA.coverage[l.id], cnt = s => rows.filter(r => r[3] === s).length;
      const qs = Model.questions.filter(q => q.lec === l.id);
      return [l.short, l.file, String(l.pages), String(cnt('S')), String(cnt('T') + cnt('O') + cnt('X') + cnt('R')), String(cnt('D')), String(cnt('U')), String(DATA.concepts.filter(c => c.lec === l.id).length), String(qs.filter(q => q.type === 'ident' && !q.auto).length + ' + ' + qs.filter(q => q.auto).length), String(qs.filter(q => q.type === 'mcq').length), String(DATA.recall.filter(r => r.lec === l.id).length + DATA.formulas.filter(f => f.lec === l.id).length + DATA.topics.filter(t => t.lec === l.id).reduce((a, t) => a + (t.confused || []).length, 0))];
    });
    const sumCol = i => lecRows.reduce((a, r) => a + Number(String(r[i]).split(' + ').reduce((x, y) => x + Number(y), 0)), 0);
    const allS = DATA.lectures.reduce((a, l) => a + DATA.coverage[l.id].filter(r => r[3] === 'S').length, 0);
    const linked = DATA.lectures.reduce((a, l) => a + DATA.coverage[l.id].filter(r => r[3] === 'S' && cPages[l.id + ':' + r[0]] && qPages[l.id + ':' + r[0]]).length, 0);
    const ledger = DATA.lectures.map(l => h('details.more', { style: { marginTop: '.6rem' } }, h('summary', null, `${l.short} ledger — ${l.file} (${l.pages} PDF pages)`),
      h('div.table-wrap', { tabindex: '0', role: 'region', 'aria-label': l.short + ' coverage ledger' }, h('table', null, h('thead', null, h('tr', null, h('th.num', { scope: 'col' }, 'PDF p.'), h('th.num', { scope: 'col' }, 'Slide'), h('th', { scope: 'col' }, 'Page content'), h('th', { scope: 'col' }, 'Status'), h('th', { scope: 'col' }, 'Lesson'), h('th', { scope: 'col' }, 'Glossary terms'), h('th.num', { scope: 'col' }, 'Questions'))),
        h('tbody', null, DATA.coverage[l.id].map(r => { const k = l.id + ':' + r[0], terms = cPages[k] || []; return h('tr', null, h('td.num', null, String(r[0])), h('td.num', null, r[1] == null ? '—' : String(r[1])), h('td', null, r[2], r[5] ? h('div.small.muted', null, r[5]) : null), h('td', null, h('span.status.' + r[3], null, STATUS_LABEL[r[3]])), h('td', null, r[4] ? h('a', { href: '#/lessons/' + r[4] }, Model.topic(r[4]).title) : '—'), h('td.small', null, terms.length ? terms.slice(0, 4).join('; ') + (terms.length > 4 ? ` +${terms.length - 4}` : '') : '—'), h('td.num', null, String(qPages[k] || 0))); }))))));
    main.appendChild(h('div.page', null,
      h('div.page-head', null, h('div', null, h('h1', null, 'Coverage & Sources'), h('p', null, 'How the four PDFs were reviewed, where every page is used, and which source issues remain.'))),
      h('div.card', null, h('h2', null, 'Method'),
        h('ul', null, h('li', null, 'All four PDFs were inventoried (200 PDF pages in total). The text of every page was extracted, and every page was also rendered and visually inspected, including image-only slides, tables, equations, figure labels and captions.'),
          h('li', null, 'No OCR was needed: pages with words have selectable text, and the image-only pages contain photographs or SAR scenes without words. Their visible content was described only where a caption or label supports it.'),
          h('li', null, 'Numbers were re-checked by calculation: matrix totals, overall, user’s and producer’s accuracy, kappa, Wien peaks, the Stefan–Boltzmann constant in both unit systems, range/azimuth resolution and the band frequency table.'),
          h('li', null, 'References use the PDF page number and, where the slide prints one, the printed slide number (“slide N”). Lecture 9 prints no slide numbers, so “slide N” in Lecture 9 means the Nth page of its PDF. Lecture 11 slide = PDF page + 2 and Lectures 12–13 slide = PDF page + 1. Lecture 10 numbering has gaps (see limitations).'),
          h('li', null, 'Memory aids are labeled as learning aids. Explanations beyond the slides are labeled “Clarification.”'))),
      h('div.card', null, h('h2', null, 'Counts'), h('p', null, `${allS} substantive pages, ${linked} of them linked to at least one glossary concept and at least one question (the build fails if any substantive page is left unlinked).`),
        h('div.table-wrap', { tabindex: '0', role: 'region', 'aria-label': 'Coverage counts' }, h('table', null, h('thead', null, h('tr', null, ['Lecture', 'File', 'PDF pages', 'Substantive', 'Title/outline/closing/refs', 'Duplicate', 'Unlabeled image', 'Concepts', 'Identification (hand + definition)', 'Multiple choice', 'Recall prompts'].map(t => h('th', { scope: 'col' }, t)))),
          h('tbody', null, lecRows.map(r => h('tr', null, r.map((c, i) => h(i >= 2 ? 'td.num' : 'td', null, c)))), h('tr', null, h('th', { scope: 'row' }, 'Total'), h('td'), [2, 3, 4, 5, 6, 7].map(i => h('td.num', null, String(sumCol(i)))), h('td.num', null, `${DATA.questions.filter(q => q.type === 'ident').length} + ${DATA.concepts.length}`), h('td.num', null, String(sumCol(9))), h('td.num', null, String(sumCol(10))))))),
        h('p.small.muted', null, `Also: ${DATA.topics.length} lesson topics, ${DATA.formulas.length} formula cards, ${DATA.notes.length} lecture-wording clarifications, ${Object.keys(FIG).length} original figures, and ${DATA.concepts.length * 2} flashcard faces (definition→term and term→definition).`)),
      h('div.card', null, h('h2', null, 'How progress is measured'), masteryExplainer()),
      h('div.card', null, h('h2', null, 'Unresolved source-reading limitations'), h('ul', null, DATA.limitations.map(x => h('li', null, h('b', null, Model.lec(x.lec).short + ', PDF p. ' + x.p.join(', ') + ': '), x.text))),
        h('p.small.muted', null, 'Within these limits, every readable page was covered. Nothing unreadable was invented to fill gaps.')),
      h('div.card', null, h('h2', null, `Lecture wording vs clarification (${DATA.notes.length})`), h('p.small.muted', null, 'Apparent typos, contradictions, outdated specifications and oversimplifications. For exams, use the lecture terminology, and understand the clarification.'),
        DATA.notes.map(n => h('div', null, h('div.small', { style: { marginTop: '.8rem' } }, lecChip(n.lec), ' ', h('a', { href: '#/lessons/' + n.topic }, Model.topic(n.topic).title)), noteBox(n)))),
      h('div.card', null, h('h2', null, 'Page-by-page coverage ledger'), h('p.small.muted', null, 'Every PDF page with its printed slide number, status, lesson, linked glossary terms and number of questions citing it.'), ledger)));
  }
};
