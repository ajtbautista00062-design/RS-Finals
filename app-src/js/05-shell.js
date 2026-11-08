// ───────── App shell: layout, navigation, routing, theme, search, downloads, shortcuts ─────────
const Views = {};
const NAV = [
  ['Study', [['dashboard', '#/', 'Dashboard', 'home'], ['lessons', '#/lessons', 'Lesson Guide', 'book'], ['ident', '#/ident', 'Identification', 'target'], ['mcq', '#/mcq', 'Multiple Choice', 'list'], ['flash', '#/flash', 'Flashcards', 'cards'], ['recall', '#/recall', 'Recall Mode', 'brain'], ['exam', '#/exam', 'Mock Exams', 'clock']]],
  ['Review & plan', [['review', '#/review', 'Mistakes & Bookmarks', 'bookmark'], ['glossary', '#/glossary', 'Glossary & Formulas', 'glossary'], ['calendar', '#/calendar', 'Study Calendar', 'calendar'], ['coverage', '#/coverage', 'Coverage & Sources', 'layers']]]
];
const Shell = (function () {
  let current = null, currentName = '', lastDay = Core.dateKey();

  function applySettings() {
    const s = Store.state.settings, root = document.documentElement;
    if (s.theme === 'light' || s.theme === 'dark') root.setAttribute('data-theme', s.theme); else root.removeAttribute('data-theme');
    if (s.text && s.text !== 'm') root.setAttribute('data-text', s.text); else root.removeAttribute('data-text');
    if (s.motion === 'reduce') root.setAttribute('data-motion', 'reduce'); else root.removeAttribute('data-motion');
    document.body.classList.toggle('reading', !!s.reading);
    const tb = $('#theme-btn'); if (tb) { clear(tb).appendChild(icon(effectiveDark() ? 'moon' : 'sun')); tb.setAttribute('aria-label', 'Theme: ' + s.theme + '. Change theme'); tb.title = 'Theme: ' + s.theme; }
  }
  const effectiveDark = () => { const t = Store.state.settings.theme; return t === 'dark' || (t === 'system' && matchMedia('(prefers-color-scheme: dark)').matches); };
  function cycleTheme() { const order = ['system', 'light', 'dark']; const s = Store.state.settings; s.theme = order[(order.indexOf(s.theme) + 1) % 3]; Store.save(); applySettings(); toast('Theme: ' + s.theme); }

  function build() {
    const app = $('#app');
    const search = h('input', { type: 'search', id: 'gsearch', placeholder: 'Search lessons, terms, formulas, questions…', 'aria-label': 'Search the reviewer', autocomplete: 'off', role: 'combobox', 'aria-expanded': 'false', 'aria-controls': 'gsearch-results', 'aria-autocomplete': 'list' });
    const results = h('div.search-results', { id: 'gsearch-results', role: 'listbox', hidden: true, 'aria-label': 'Search results' });
    const dlWrap = h('div.dl-wrap');
    const dlBtn = h('button.btn.primary.sm', { 'aria-haspopup': 'menu', 'aria-expanded': 'false', on: { click: () => toggleDownloads(dlWrap, dlBtn) } }, icon('download', 18), h('span.lbl', null, 'Download'));
    dlWrap.appendChild(dlBtn);
    const top = h('header.topbar', null,
      h('button.btn.ghost.icon.menu-btn', { 'aria-label': 'Open navigation', 'aria-controls': 'sidebar', 'aria-expanded': 'false', id: 'menu-btn', on: { click: () => toggleDrawer(true) } }, icon('menu')),
      h('a.brand', { href: '#/', 'aria-label': 'UAV Recall — Remote Sensing Finals, dashboard' }, logo(36), h('span.brand-text', null, h('b', null, 'UAV Recall'), h('span', null, 'Remote Sensing Finals'))),
      h('div.search-wrap', null, h('span.s-ico', null, icon('search', 16)), search, results),
      h('div.top-actions', null, dlWrap,
        h('button.btn.ghost.icon', { id: 'theme-btn', on: { click: cycleTheme } }, icon('sun')),
        h('button.btn.ghost.icon', { 'aria-label': 'Settings and data', title: 'Settings and data', on: { click: openSettings } }, icon('gear'))));
    const side = h('nav.sidebar', { id: 'sidebar', 'aria-label': 'Sections' },
      NAV.map(([g, items]) => h('div.nav-group', null, h('h3', null, g), items.map(([k, href, label, ic]) => h('a.nav-link', { href, 'data-nav': k, on: { click: () => toggleDrawer(false) } }, icon(ic), h('span', null, label), k === 'flash' ? h('span.badge', { id: 'due-badge', hidden: true }) : null)))),
      h('div.sidebar-foot', null, h('b', null, 'Offline & private. '), 'Everything stays in this browser. Use ', h('b', null, 'Download → Progress backup'), ' to move progress between devices.'));
    const bottom = h('nav.bottombar', { 'aria-label': 'Quick sections' },
      [['dashboard', '#/', 'Home', 'home'], ['lessons', '#/lessons', 'Lessons', 'book'], ['ident', '#/ident', 'Identify', 'target'], ['flash', '#/flash', 'Cards', 'cards']].map(([k, href, label, ic]) => h('a', { href, 'data-nav': k }, icon(ic, 22), label)),
      h('button', { type: 'button', 'aria-label': 'More sections', on: { click: () => toggleDrawer(true) } }, icon('more', 22), 'More'));
    app.appendChild(top);
    app.appendChild(h('div.layout', null, side, h('main', { id: 'main', tabindex: '-1' })));
    app.appendChild(bottom);
    syncDrawer();
    setupSearch(search, results);
    document.addEventListener('focusin', e => { if (e.target.matches('input[type=text], input:not([type]), textarea, input[type=search], input[type=number]') && innerWidth < 900) document.body.classList.add('typing'); });
    document.addEventListener('focusout', () => setTimeout(() => { if (!document.activeElement || !document.activeElement.matches('input, textarea')) document.body.classList.remove('typing'); }, 50));
  }

  function toggleDrawer(open) {
    const sb = $('#sidebar'), mb = $('#menu-btn'); if (!sb) return;
    if (innerWidth > 900) open = false;
    sb.classList.toggle('open', open); mb.setAttribute('aria-expanded', String(open));
    sb.inert = innerWidth <= 900 && !open;
    let scrim = $('.scrim');
    if (open && !scrim) { scrim = h('div.scrim', { on: { click: () => toggleDrawer(false) } }); document.body.appendChild(scrim); const f = $('.nav-link', sb); if (f) f.focus(); }
    if (!open && scrim) { scrim.remove(); if (innerWidth <= 900 && sb.contains(document.activeElement)) mb.focus(); }
  }

  function syncDrawer() {
    const sb = $('#sidebar'); if (!sb) return;
    if (innerWidth > 900) toggleDrawer(false);
    else sb.inert = !sb.classList.contains('open');
  }

  // Keep keyboard focus inside the mobile navigation until it closes.
  document.addEventListener('keydown', e => {
    const sb = $('#sidebar');
    if (!sb || !sb.classList.contains('open') || innerWidth > 900) return;
    if (e.key === 'Escape') { e.preventDefault(); toggleDrawer(false); $('#menu-btn').focus(); }
    if (e.key === 'Tab') {
      const links = $$('.nav-link', sb), first = links[0], last = links[links.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  function route() {
    const hash = location.hash.replace(/^#\/?/, '');
    const parts = hash.split('/').map(decodeURIComponent);
    let name = parts[0] || 'dashboard';
    if (name === 'q') name = 'single';
    if (!Views[name]) name = 'dashboard';
    if (current && current.cleanup) { try { current.cleanup(); } catch (e) { } }
    document.body.classList.remove('focus-mode');
    const main = clear($('#main'));
    if (!Store.available) main.appendChild(h('div.banner.bad', { role: 'alert' }, icon('info'), h('div', null, h('b', null, 'Progress cannot be saved in this browser. '), 'Storage is unavailable (for example in a private window). Your work lasts only until this tab closes. Use Download → Progress backup to keep it.')));
    else if (Store.error) main.appendChild(h('div.banner', { role: 'alert' }, icon('info'), h('div', null, Store.error)));
    current = Views[name]; currentName = name;
    try { current.render(main, parts.slice(1)); }
    catch (e) { console.error(e); main.appendChild(h('div.banner.bad', { role: 'alert' }, icon('info'), h('div', null, h('b', null, 'Something went wrong while showing this page. '), String(e.message || e), ' ', h('a', { href: '#/' }, 'Return to the dashboard')))); }
    $$('[data-nav]').forEach(a => { if (a.dataset.nav === (current.nav || name)) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    document.title = (current.title ? current.title + ' · ' : '') + 'UAV Recall — Remote Sensing Finals';
    updateBadges();
    if (!current.keepScroll) window.scrollTo(0, 0);
    if (route.focusMain) { main.focus({ preventScroll: true }); }
    route.focusMain = true;
  }
  route.focusMain = false;
  function rerender() { const y = scrollY; const ks = current && current.keepScroll; if (current) current.keepScroll = true; route(); if (current) current.keepScroll = ks; scrollTo(0, y); }
  function updateBadges() { const b = $('#due-badge'); if (!b) return; const n = Model.compute().due; b.hidden = !n; b.textContent = n > 99 ? '99+' : String(n); b.setAttribute('aria-label', n + ' flashcards due'); }

  // ---- Search ----
  let index = null;
  function buildIndex() {
    const out = [];
    const textOf = b => { const v = b.slice(1); return JSON.stringify(v).replace(/[\[\]"{}\\]/g, ' '); };
    DATA.topics.forEach(t => out.push({ g: 'Lessons', title: t.title, sub: Model.lec(t.lec).short + ' · ' + t.summary, text: (t.title + ' ' + t.summary + ' ' + (t.blocks || []).map(textOf).join(' ') + ' ' + (t.confused || []).flat().join(' ')).toLowerCase(), href: '#/lessons/' + t.id }));
    DATA.concepts.forEach(c => out.push({ g: 'Glossary', title: c.term, sub: c.def, text: (c.term + ' ' + c.alts.join(' ') + ' ' + c.def).toLowerCase(), href: '#/glossary/' + c.id, t: 2 }));
    DATA.formulas.forEach(f => out.push({ g: 'Formulas', title: f.name, sub: plain(f.expr), text: (f.name + ' ' + f.expr + ' ' + f.vars.flat().join(' ') + ' ' + f.example).toLowerCase(), href: '#/glossary/f:' + f.id }));
    DATA.questions.forEach(q => out.push({ g: 'Questions', title: plain(q.prompt).replace(DATA.matrixText, 'Matrix: ').slice(0, 120), sub: (q.type === 'mcq' ? 'Multiple choice' : 'Identification') + ' · ' + Model.lec(q.lec).short, text: (plain(q.prompt) + ' ' + (q.answer || '') + ' ' + (q.opts ? q.opts[0][0] : '')).toLowerCase(), href: '#/q/' + encodeURIComponent(q.id) }));
    return out;
  }
  function search(qs) {
    index = index || buildIndex();
    const toks = qs.toLowerCase().split(/\s+/).filter(Boolean); if (!toks.length) return [];
    const res = [];
    index.forEach(e => { if (toks.every(t => e.text.includes(t) || e.title.toLowerCase().includes(t))) { let sc = 0; toks.forEach(t => { if (e.title.toLowerCase().includes(t)) sc += 3; if (e.title.toLowerCase().startsWith(t)) sc += 2; }); res.push([sc + (e.t || 0), e]); } });
    res.sort((a, b) => b[0] - a[0]);
    const groups = {}; res.forEach(([, e]) => { (groups[e.g] = groups[e.g] || []); if (groups[e.g].length < 7) groups[e.g].push(e); });
    return ['Lessons', 'Glossary', 'Formulas', 'Questions'].filter(g => groups[g]).map(g => [g, groups[g]]);
  }
  function setupSearch(input, box) {
    let items = [], sel = -1;
    const close = () => { box.hidden = true; input.setAttribute('aria-expanded', 'false'); sel = -1; };
    const go = href => { close(); input.value = ''; input.blur(); location.hash = href; };
    const paint = () => items.forEach((b, i) => b.setAttribute('aria-selected', String(i === sel)));
    input.addEventListener('input', () => {
      const v = input.value.trim(); clear(box); items = []; sel = -1;
      if (v.length < 2) { close(); return; }
      const groups = search(v);
      if (!groups.length) box.appendChild(h('p.small.muted', { style: { margin: '.6rem' } }, 'No matches. Try a shorter word or another spelling.'));
      groups.forEach(([g, list]) => { box.appendChild(h('h4', null, g)); list.forEach(e => { const b = h('button.sr-item', { type: 'button', role: 'option', on: { click: () => go(e.href) } }, h('b', null, e.title), h('span', null, e.sub)); items.push(b); box.appendChild(b); }); });
      box.hidden = false; input.setAttribute('aria-expanded', 'true');
    });
    input.addEventListener('keydown', e => {
      if (e.key === 'Escape') { close(); input.blur(); }
      else if (e.key === 'ArrowDown' && items.length) { e.preventDefault(); sel = (sel + 1) % items.length; paint(); items[sel].scrollIntoView({ block: 'nearest' }); }
      else if (e.key === 'ArrowUp' && items.length) { e.preventDefault(); sel = (sel - 1 + items.length) % items.length; paint(); items[sel].scrollIntoView({ block: 'nearest' }); }
      else if (e.key === 'Enter' && items.length) { e.preventDefault(); items[Math.max(0, sel)].click(); }
    });
    document.addEventListener('click', e => { if (!box.contains(e.target) && e.target !== input) close(); });
  }

  // ---- Downloads & data ----
  function toggleDownloads(wrap, btn) {
    const old = $('.menu', wrap); if (old) { old.remove(); btn.setAttribute('aria-expanded', 'false'); return; }
    const item = (ic, title, sub, fn) => h('button', { role: 'menuitem', type: 'button', on: { click: () => { menu.remove(); btn.setAttribute('aria-expanded', 'false'); fn(); } } }, icon(ic), h('div', null, h('b', null, title), h('span', null, sub)));
    const menu = h('div.menu', { role: 'menu', 'aria-label': 'Downloads' },
      item('file', 'Offline reviewer (.html)', 'The complete app with all lessons and questions. Opens without internet.', downloadApp),
      item('download', 'Progress backup (.json)', 'Your attempts, flashcard schedule, bookmarks, plan and settings. This is not the app.', exportJSON),
      item('table', 'Flashcards (.csv)', 'Every term, accepted alternatives, definition and source pages.', exportCSV),
      item('print', 'Printable review guide', 'All lessons, glossary and formula sheet in a print-friendly view.', printGuide),
      h('hr'),
      item('upload', 'Import progress backup…', 'Restore from a .json backup (validated before anything changes).', importJSON));
    wrap.appendChild(menu); btn.setAttribute('aria-expanded', 'true'); const f = $('button', menu); if (f) f.focus();
    const off = e => { if (!wrap.contains(e.target)) { menu.remove(); btn.setAttribute('aria-expanded', 'false'); document.removeEventListener('click', off); } };
    setTimeout(() => document.addEventListener('click', off), 0);
    menu.addEventListener('keydown', e => {
      const bs = $$('button', menu), i = bs.indexOf(document.activeElement);
      if (e.key === 'Escape') { menu.remove(); btn.setAttribute('aria-expanded', 'false'); btn.focus(); }
      if (e.key === 'ArrowDown') { e.preventDefault(); bs[(i + 1) % bs.length].focus(); }
      if (e.key === 'ArrowUp') { e.preventDefault(); bs[(i - 1 + bs.length) % bs.length].focus(); }
    });
  }
  async function downloadApp() {
    let html = null;
    if (/^https?:$/.test(location.protocol)) { try { const r = await fetch(location.href.split('#')[0], { cache: 'no-store' }); if (r.ok) { const t = await r.text(); if (t.includes('UAV Recall') && t.includes('const DATA') && t.length > 100000) html = t; } } catch (e) { } }
    html = html || PRISTINE_HTML;
    if (!html) { toast('Could not prepare the offline file in this browser. Use your browser’s “Save page as…” instead.', 'bad'); return; }
    if (download('remote-sensing-finals-reviewer.html', 'text/html', html)) toast('Saved the offline reviewer. It contains the full app; your progress is separate (use Progress backup).');
  }
  function exportJSON() {
    const data = Object.assign({ exportedAt: new Date().toISOString(), note: 'UAV Recall progress backup. This is NOT the app. Import it from Download → Import progress backup.' }, Store.state);
    if (download(`uav-recall-progress-${Core.dateKey()}.json`, 'application/json', JSON.stringify(data, null, 1))) toast('Progress backup downloaded.');
  }
  function exportCSV() {
    const esc = v => '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"';
    const rows = [['id', 'lecture', 'topic', 'term', 'accepted_alternatives', 'definition', 'sources', 'due_definition_to_term', 'due_term_to_definition']];
    DATA.concepts.forEach(c => { const k1 = Store.state.cards[Model.cardKey(c.id, 'd2t')], k2 = Store.state.cards[Model.cardKey(c.id, 't2d')]; rows.push([c.id, Model.lec(c.lec).short, Model.topic(c.topic).title, c.term, c.alts.join('; '), c.def, c.p.map(p => Model.srcLabel(c.lec, p)).join('; '), k1 ? k1.due : '', k2 ? k2.due : '']); });
    if (download(`uav-recall-flashcards-${Core.dateKey()}.csv`, 'text/csv;charset=utf-8', '﻿' + rows.map(r => r.map(esc).join(',')).join('\r\n'))) toast('Flashcards CSV downloaded (' + DATA.concepts.length + ' cards).');
  }
  function printGuide() {
    const root = clear($('#print-root'));
    root.appendChild(h('div', null, h('h1', null, 'UAV Recall — Remote Sensing Finals: Review Guide'), h('p', null, 'Printed ' + fmtDate(Core.dateKey()) + '. Source references show the lecture, PDF page and printed slide number. Memory aids are learning aids, not lecture quotations.')));
    DATA.lectures.forEach(l => {
      const sec = h('section.print-lecture', null, h('h1', null, l.short + ': ' + l.title));
      Model.topicsOf(l.id).forEach(t => sec.appendChild(Views.lessons.renderTopicBody(t, true)));
      sec.appendChild(h('h2', null, l.short + ' glossary'));
      sec.appendChild(h('div.table-wrap', null, h('table', null, h('thead', null, h('tr', null, h('th', null, 'Term'), h('th', null, 'Definition'), h('th', null, 'Source'))), h('tbody', null, DATA.concepts.filter(c => c.lec === l.id).map(c => h('tr', null, h('td', null, h('b', null, c.term)), h('td', null, c.def), h('td', null, c.p.map(p => 'p.' + p).join(', '))))))));
      root.appendChild(sec);
    });
    root.appendChild(h('section.print-lecture', null, h('h1', null, 'Formula sheet'), DATA.formulas.map(f => Views.glossary.formulaCard(f))));
    document.body.classList.add('printing');
    const done = () => { document.body.classList.remove('printing'); window.removeEventListener('afterprint', done); };
    window.addEventListener('afterprint', done);
    setTimeout(() => { window.print(); setTimeout(done, 1500); }, 60);
  }
  function importJSON() {
    const input = h('input', { type: 'file', accept: '.json,application/json', style: { display: 'none' } });
    input.addEventListener('change', () => {
      const f = input.files && input.files[0]; input.remove(); if (!f) return;
      if (f.size > 25 * 1024 * 1024) { openModal('Import failed', h('p', { role: 'alert' }, 'That file is larger than 25 MB, which is too large to be a UAV Recall backup.')); return; }
      const rd = new FileReader();
      rd.onerror = () => openModal('Import failed', h('p', { role: 'alert' }, 'The file could not be read.'));
      rd.onload = async () => {
        let parsed;
        try { parsed = JSON.parse(String(rd.result)); } catch (e) { openModal('Import failed', h('p', { role: 'alert' }, 'This file is not valid JSON, so nothing was changed.')); return; }
        let res;
        try { res = Store.sanitize(parsed); } catch (e) { openModal('Import failed', h('div', null, h('p', { role: 'alert' }, e.message + ' Nothing was changed.'), h('p.small.muted', null, 'Tip: the offline reviewer (.html) is the app; a progress backup is a .json file created from Download → Progress backup.'))); return; }
        const r = res.report;
        const ok = await confirmDialog('Replace current progress?', h('div', null,
          h('p', null, `This backup contains ${r.attempts} answers, ${r.cards} flashcard schedules, ${r.reviews} flashcard ratings, ${r.recall} recall checks, ${r.exams} mock exams and ${r.plan} planned tasks.` + (r.dropped ? ` ${r.dropped} malformed entries will be skipped.` : '')),
          h('p', null, h('b', null, 'Importing replaces everything currently saved in this browser.'), ' Consider downloading a backup of your current progress first.')), 'Replace progress');
        if (!ok) return;
        Store.replace(res.state); applySettings(); toast('Progress imported.'); route();
      };
      rd.readAsText(f);
    });
    document.body.appendChild(input); input.click();
  }
  async function resetAll() {
    const ok = await confirmDialog('Reset all progress?', 'This permanently deletes every answer, flashcard schedule, bookmark, plan, exam result and setting saved in this browser. The lessons and questions are not affected.', 'Delete my progress', { danger: true, typeToConfirm: 'RESET' });
    if (!ok) return;
    Store.reset(); applySettings(); toast('All progress was reset.'); route();
  }

  function openSettings() {
    const s = Store.state.settings;
    const seg = (label, key, opts) => h('div.field', null, h('span', { style: { fontWeight: 600 } }, label), h('div.seg', { role: 'group', 'aria-label': label }, opts.map(([v, t]) => h('button', { type: 'button', 'aria-pressed': String(s[key] === v), on: { click: e => { s[key] = v; Store.save(); applySettings(); $$('button', e.target.parentNode).forEach(b => b.setAttribute('aria-pressed', String(b === e.target))); } } }, t))));
    const num = (label, key, min, max, hint) => { const inp = h('input', { type: 'number', min, max, value: String(s[key]), inputmode: 'numeric' }); inp.addEventListener('change', () => { const v = parseInt(inp.value, 10); if (Number.isInteger(v) && v >= min && v <= max) { s[key] = v; Store.save(); toast(label + ' saved.'); } else { inp.value = s[key]; toast(`${label} must be a whole number from ${min} to ${max}.`, 'bad'); } }); return h('div.field', null, h('label', null, label, inp), hint ? h('span.hint-text', null, hint) : null); };
    const exam = h('input', { type: 'date', value: s.examDate || '' });
    exam.addEventListener('change', () => { s.examDate = Core.isKey(exam.value) ? exam.value : null; Store.save(); toast(s.examDate ? 'Exam date set to ' + fmtDate(s.examDate) : 'Exam date cleared.'); });
    const reading = h('input', { type: 'checkbox', checked: !!s.reading }); reading.addEventListener('change', () => { s.reading = reading.checked; Store.save(); applySettings(); });
    const body = h('div.stack', null,
      h('h3', null, 'Appearance'),
      seg('Theme', 'theme', [['light', 'Light'], ['dark', 'Dark'], ['system', 'System']]),
      seg('Text size', 'text', [['s', 'Small'], ['m', 'Medium'], ['l', 'Large'], ['xl', 'Extra large']]),
      seg('Motion', 'motion', [['system', 'Follow system'], ['reduce', 'Reduce']]),
      h('label.check', null, reading, 'Comfortable reading mode (wider text, no sidebar)'),
      h('hr'), h('h3', null, 'Study'),
      h('div.grid.two', null, num('Daily goal (items)', 'goal', 1, 500, 'Completed answers, card ratings and recall checks per day.'), num('New flashcards per day', 'newPerDay', 0, 300, 'Limit on never-seen cards added to a session.')),
      h('div.field', null, h('label', null, 'Exam date (optional)', exam), h('span.hint-text', null, 'Shown on the dashboard and calendar.')),
      h('hr'), h('h3', null, 'Your data'),
      h('p.small.muted', null, Store.available ? 'Saved automatically in this browser (local storage, schema v' + SCHEMA + '). Nothing is uploaded.' : 'Storage is unavailable here, so export a backup before closing.'),
      h('div.row', null, h('button.btn', { on: { click: exportJSON } }, icon('download', 18), 'Export progress (.json)'), h('button.btn', { on: { click: importJSON } }, icon('upload', 18), 'Import progress'), h('button.btn', { on: { click: exportCSV } }, icon('table', 18), 'Flashcards (.csv)')),
      h('div.row', null, h('button.btn.danger', { on: { click: resetAll } }, icon('trash', 18), 'Reset all progress…')),
      h('hr'), h('h3', null, 'Keyboard shortcuts'), shortcutsTable());
    openModal('Settings & data', body, { wide: true, onClose: () => rerender() });
  }
  function shortcutsTable() {
    const rows = [['/', 'Focus search'], ['?', 'Show shortcuts'], ['g then d / l / i / m / f / r / e / c', 'Go to Dashboard, Lessons, Identification, Multiple choice, Flashcards, Recall, Exams, Calendar'], ['Enter', 'Submit answer / next item'], ['h', 'Next hint (identification, when not typing)'], ['1–4', 'Choose option (multiple choice) or rate card (flashcards)'], ['Space', 'Reveal flashcard or recall answer'], ['b', 'Bookmark the current question'], ['Esc', 'Close dialogs, menus and search']];
    return h('div.table-wrap', null, h('table', null, h('tbody', null, rows.map(r => h('tr', null, h('td', null, h('kbd', null, r[0])), h('td', null, r[1]))))));
  }

  // ---- Keyboard ----
  let gPending = false;
  const typing = e => e.target.closest && e.target.closest('input, textarea, select, [contenteditable="true"]');
  document.addEventListener('keydown', e => {
    if (e.ctrlKey || e.metaKey || e.altKey || modalStack.length) return;
    if (typing(e)) return;
    if (e.key === '/') { e.preventDefault(); const s = $('#gsearch'); if (s) s.focus(); return; }
    if (e.key === '?') { e.preventDefault(); openModal('Keyboard shortcuts', shortcutsTable()); return; }
    if (gPending) { gPending = false; const map = { d: '#/', l: '#/lessons', i: '#/ident', m: '#/mcq', f: '#/flash', r: '#/recall', e: '#/exam', c: '#/calendar' }; if (map[e.key]) { e.preventDefault(); location.hash = map[e.key]; } return; }
    if (e.key === 'g') { gPending = true; setTimeout(() => { gPending = false; }, 1200); return; }
    if (current && current.onKey) current.onKey(e);
  });

  function start() {
    Store.load();
    build(); applySettings();
    matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applySettings);
    Store.on(kind => { if (kind === 'error') toast(Store.error, 'bad'); updateBadges(); });
    addEventListener('hashchange', route);
    addEventListener('storage', e => { if (e.key === STORE_KEY) { Store.reloadFromStorage(); if (!['exam', 'ident', 'mcq', 'flash', 'recall'].includes(currentName)) rerender(); } });
    addEventListener('resize', syncDrawer);
    setInterval(() => { const d = Core.dateKey(); if (d !== lastDay) { lastDay = d; Store.save(); if (['dashboard', 'calendar'].includes(currentName)) rerender(); } }, 30000);
    addEventListener('beforeunload', () => Store.saveNow());
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') Store.saveNow(); });
    route();
  }
  return { start, route, rerender, applySettings, openSettings, exportJSON, importJSON, downloadApp, printGuide, exportCSV };
})();
