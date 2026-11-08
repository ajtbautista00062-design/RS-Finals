// ───────── Glossary & formula sheet ─────────
function exprNode(s) { return h('div.expr', { role: 'math', 'aria-label': plain(s) }, rich(s)); }
Views.glossary = {
  title: 'Glossary & Formulas', nav: 'glossary', tab: 'glossary', lec: '', q: '',
  formulaCard(f) {
    return h('section.formula', { id: 'f-' + f.id }, h('h4', null, f.name, ' ', lecChip(f.lec)), exprNode(f.expr),
      h('dl', null, f.vars.map(([s, d]) => frag(h('dt', null, rich(s)), h('dd', null, rich(d))))),
      h('div.meta', null, f.units ? h('div', null, h('b', null, 'Units: '), rich(f.units)) : null, f.example ? h('div', null, h('b', null, 'Worked example: '), rich(f.example)) : null, f.assume ? h('div.muted', null, h('b', null, 'Assumptions / notes: '), rich(f.assume)) : null),
      h('div', { style: { marginTop: '.4rem' } }, Model.srcChips(f.lec, f.p)));
  },
  render(main, params) {
    const target = params[0] || '';
    if (target.startsWith('f:')) this.tab = 'formulas';
    else if (target) { this.tab = 'glossary'; this.q = ''; this.lec = ''; }
    const st = Store.state;
    const tabBar = h('div.tabs', { role: 'tablist' }, [['glossary', `Glossary (${DATA.concepts.length})`], ['formulas', `Formula sheet (${DATA.formulas.length})`]].map(([k, t]) => h('button.tab', { role: 'tab', type: 'button', 'aria-selected': String(this.tab === k), on: { click: () => { this.tab = k; history.replaceState(null, '', '#/glossary'); Shell.rerender(); } } }, t)));
    const body = h('div');
    if (this.tab === 'formulas') {
      DATA.lectures.forEach(l => { const fs = DATA.formulas.filter(f => f.lec === l.id); if (fs.length) { body.appendChild(h('h2', null, l.short + ': ' + l.title)); fs.forEach(f => body.appendChild(this.formulaCard(f))); } });
    } else {
      const lecSel = h('select', { 'aria-label': 'Lecture' }, h('option', { value: '' }, 'All lectures'), DATA.lectures.map(l => h('option', { value: l.id }, l.short)));
      lecSel.value = this.lec;
      const filt = h('input', { type: 'search', placeholder: 'Filter terms…', 'aria-label': 'Filter glossary', value: this.q });
      const listEl = h('div.term-list', { 'aria-live': 'polite' });
      const paint = () => {
        clear(listEl);
        const ql = filt.value.trim().toLowerCase();
        const items = DATA.concepts.filter(c => (!lecSel.value || c.lec === lecSel.value) && (!ql || (c.term + ' ' + c.alts.join(' ') + ' ' + c.def).toLowerCase().includes(ql))).slice().sort((a, b) => a.term.localeCompare(b.term));
        if (!items.length) { listEl.appendChild(h('div.empty', null, h('p', null, 'No terms match. Clear the filter or choose all lectures.'))); return; }
        let letter = '';
        items.forEach(c => {
          const L = (c.term.match(/[A-Za-z0-9]/) || ['#'])[0].toUpperCase();
          if (L !== letter) { letter = L; listEl.appendChild(h('h3', { id: 'gl-' + L, style: { margin: '1rem 0 .2rem' } }, L)); }
          const bm = !!st.bookmarks.c[c.id];
          listEl.appendChild(h('div.term', { id: 'g-' + c.id, tabindex: '-1' },
            h('div.row', null, h('b', { style: { fontSize: '1.05rem' } }, c.term), lecChip(c.lec), h('span', { style: { flex: 1 } }),
              h('a.btn.sm', { href: '#/q/' + encodeURIComponent('D:' + c.id) }, 'Practice'), h('a.btn.sm.ghost', { href: '#/lessons/' + c.topic }, 'Lesson'),
              h('button.btn.sm.ghost', { 'aria-pressed': String(bm), 'aria-label': bm ? 'Remove bookmark' : 'Bookmark term', on: { click: () => { if (st.bookmarks.c[c.id]) delete st.bookmarks.c[c.id]; else st.bookmarks.c[c.id] = true; Store.save(); paint(); } } }, icon('bookmark', 16))),
            c.alts.length ? h('div.alts', null, 'Accepted equivalents: ' + c.alts.join(' · ')) : null,
            h('div', null, rich(c.def)), c.note ? h('div.small.muted', null, c.note) : null,
            h('div', { style: { marginTop: '.3rem' } }, h('span.small.muted', null, Model.topic(c.topic).title + ' · '), Model.srcChips(c.lec, c.p, c.x))));
        });
      };
      lecSel.addEventListener('change', () => { this.lec = lecSel.value; paint(); });
      filt.addEventListener('input', () => { this.q = filt.value; paint(); });
      body.appendChild(h('div.filters', { style: { marginBottom: '.6rem' } }, h('div.field', null, h('label', null, 'Lecture'), lecSel), h('div.field', null, h('label', null, 'Filter'), filt)));
      body.appendChild(h('nav.row', { 'aria-label': 'Jump to letter', style: { gap: '.25rem' } }, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(L => h('a.btn.sm.ghost', { href: '#/glossary', style: { minWidth: '34px', padding: '.2rem' }, on: { click: e => { e.preventDefault(); const t = $('#gl-' + L); if (t) t.scrollIntoView({ block: 'start' }); else toast('No terms start with ' + L + ' under this filter.'); } } }, L))));
      body.appendChild(listEl);
      paint();
    }
    main.appendChild(h('div.page.narrow', null, h('div.page-head', null, h('div', null, h('h1', null, 'Glossary & Formula Sheet'), h('p', null, 'Every assessable term with its accepted equivalents and sources, plus every formula with symbols, units, assumptions and a worked example.')), h('span.spacer'), h('button.btn', { on: { click: () => Shell.printGuide() } }, icon('print', 18), 'Print guide')), h('div.card', null, tabBar, body)));
    if (target) setTimeout(() => { const el = target.startsWith('f:') ? $('#f-' + target.slice(2)) : $('#g-' + target); if (el) { el.scrollIntoView({ block: 'center' }); el.style.outline = '3px solid var(--accent)'; el.focus({ preventScroll: true }); setTimeout(() => { el.style.outline = ''; }, 2200); } }, 60);
  }
};
