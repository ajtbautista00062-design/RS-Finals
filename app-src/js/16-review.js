// ───────── Mistakes & bookmarks ─────────
Views.review = {
  title: 'Mistakes & Bookmarks', nav: 'review', tab: 'missed',
  render(main) {
    const st = Store.state, c = Model.compute();
    const tabs = [['missed', 'Missed last time'], ['ever', 'Ever missed'], ['bq', 'Bookmarked questions'], ['bct', 'Bookmarked terms & topics'], ['ov', 'Self-credited']];
    const panel = h('div');
    const tabBar = h('div.tabs', { role: 'tablist', 'aria-label': 'Review lists' }, tabs.map(([k, t]) => h('button.tab', { role: 'tab', type: 'button', 'aria-selected': String(this.tab === k), on: { click: () => { this.tab = k; Shell.rerender(); } } }, t)));
    const row = (q, extra) => {
      const la = c.perQ[q.id] || [], wrong = la.filter(a => !a.ok).length, cc = Model.concept(q.cid);
      return h('div.task', null, lecChip(q.lec), h('div.txt', null, h('a', { href: '#/q/' + encodeURIComponent(q.id) }, q.type === 'mcq' ? plain(q.prompt).slice(0, 110) : (cc ? cc.term : q.answer) + ' — ' + plain(q.prompt).replace(DATA.matrixText, '').slice(0, 90)), h('div.small.muted', null, `${q.type === 'mcq' ? 'Multiple choice' : 'Identification'} · ${Model.topic(q.topic).title}` + (la.length ? ` · missed ${wrong} of ${la.length} · last ${fmtDate(la[la.length - 1].d, { month: 'short', day: 'numeric' })}` : ''))), extra);
    };
    const unbm = (kind, id) => h('button.btn.sm.ghost', { 'aria-label': 'Remove bookmark', on: { click: () => { delete st.bookmarks[kind][id]; Store.save(); Shell.rerender(); } } }, icon('close', 16));
    const empty = msg => h('div.empty', null, icon('check', 32), h('p', null, msg));
    if (this.tab === 'missed' || this.tab === 'ever') {
      const list = Model.pool({ filter: this.tab === 'missed' ? 'missed' : 'everMissed' });
      const ni = list.filter(q => q.type === 'ident').length, nm = list.length - ni;
      panel.appendChild(h('div.row', { style: { marginBottom: '.8rem' } }, ni ? h('a.btn.primary', { href: this.tab === 'missed' ? '#/ident/pool/missed' : '#/ident/pool/everMissed' }, `Practice ${ni} identification`) : null, nm ? h('a.btn', { href: this.tab === 'missed' ? '#/mcq/pool/missed' : '#/mcq/pool/everMissed' }, `Practice ${nm} multiple choice`) : null));
      panel.appendChild(list.length ? h('div', null, list.map(q => row(q))) : empty(this.tab === 'missed' ? 'Nothing is currently missed. Questions appear here when your latest answer was wrong.' : 'No mistakes recorded yet.'));
    } else if (this.tab === 'bq') {
      const list = Object.keys(st.bookmarks.q).map(Model.q).filter(Boolean);
      panel.appendChild(list.length ? h('div', null, h('div.row', { style: { marginBottom: '.8rem' } }, h('a.btn.primary', { href: '#/ident/pool/bookmarked' }, 'Practice bookmarked identification'), h('a.btn', { href: '#/mcq/pool/bookmarked' }, 'Practice bookmarked multiple choice')), list.map(q => row(q, unbm('q', q.id)))) : empty('No bookmarked questions. Use “Save” on any question.'));
    } else if (this.tab === 'bct') {
      const cs = Object.keys(st.bookmarks.c).map(Model.concept).filter(Boolean), ts = Object.keys(st.bookmarks.t).map(Model.topic).filter(Boolean);
      panel.appendChild(cs.length || ts.length ? h('div', null,
        ts.length ? h('h3', null, 'Topics') : null, ts.map(t => h('div.task', null, lecChip(t.lec), h('div.txt', null, h('a', { href: '#/lessons/' + t.id }, t.title)), h('a.btn.sm', { href: '#/ident/topic/' + t.id }, 'Practice'), unbm('t', t.id))),
        cs.length ? h('h3', { style: { marginTop: '1rem' } }, 'Terms') : null, cs.map(cc => h('div.task', null, lecChip(cc.lec), h('div.txt', null, h('a', { href: '#/glossary/' + cc.id }, cc.term), h('div.small.muted', null, cc.def)), h('a.btn.sm', { href: '#/q/' + encodeURIComponent('D:' + cc.id) }, 'Practice'), unbm('c', cc.id))))
        : empty('No bookmarked terms or topics. Bookmark them from the lesson guide or glossary.'));
    } else {
      const ovs = st.attempts.filter(a => a.ov).slice().reverse();
      panel.appendChild(h('p.small.muted', null, 'Answers you marked as valid alternative wording. They count as correct and are listed here so you can double-check them against the canonical term.'));
      panel.appendChild(ovs.length ? h('div.table-wrap', null, h('table', null, h('thead', null, h('tr', null, h('th', null, 'Date'), h('th', null, 'Your answer'), h('th', null, 'Canonical answer'), h('th', null, 'Mode'))), h('tbody', null, ovs.map(a => { const q = Model.q(a.q); return q ? h('tr', null, h('td', null, fmtDate(a.d, { month: 'short', day: 'numeric' })), h('td', null, a.g || '—'), h('td', null, h('a', { href: '#/q/' + encodeURIComponent(q.id) }, q.answer || q.opts[0][0])), h('td', null, a.mode)) : null; })))) : empty('No self-credited answers.'));
    }
    main.appendChild(h('div.page.narrow', null, h('div.page-head', null, h('div', null, h('h1', null, 'Mistakes & Bookmarks'), h('p', null, 'Everything you have missed, saved or self-credited, with one-click practice.'))), h('div.card', null, tabBar, panel)));
  }
};
