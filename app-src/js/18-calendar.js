// ───────── Study calendar & plan ─────────
Views.calendar = {
  title: 'Study Calendar', nav: 'calendar', month: null, sel: null,
  dayInfo(day) {
    const st = Store.state;
    const att = st.attempts.filter(a => a.d === day), rev = st.reviews.filter(r => r.d === day), rec = st.recall.filter(r => r.d === day), exams = st.exams.filter(e => e.d === day);
    const groups = {};
    att.forEach(a => { const k = a.mode === 'exam' ? 'Mock exam answers' : a.mode === 'lesson' ? 'Lesson exercises' : (a.ty === 'mcq' ? 'Multiple choice' : 'Identification') + (a.mode === 'strict' ? ' (strict)' : ''); groups[k] = groups[k] || [0, 0]; groups[k][0]++; if (a.ok) groups[k][1]++; });
    const terms = new Set(); att.forEach(a => { const c = Model.concept(a.c); if (c) terms.add(c.term); }); rev.forEach(r => { const c = Model.concept(r.k.split('|')[0]); if (c) terms.add(c.term); });
    return { att, rev, rec, exams, groups, terms: [...terms], count: att.length + rev.length + rec.length };
  },
  render(main) {
    const st = Store.state, today = Core.dateKey();
    if (!this.month) this.month = today.slice(0, 7);
    if (!this.sel) this.sel = today;
    const [y, m] = this.month.split('-').map(Number);
    const first = new Date(y, m - 1, 1), startKey = Core.addDays(Core.dateKey(first), -first.getDay());
    const act = Core.dayActivity(st), sdays = Core.studyDays(st);
    const dueBy = {}; Object.values(st.cards).forEach(c => { const d = c.due < today ? today : c.due; dueBy[d] = (dueBy[d] || 0) + 1; });
    const cells = [];
    for (let i = 0; i < 42; i++) {
      const k = Core.addDays(startKey, i), inMonth = k.slice(0, 7) === this.month;
      if (i >= 35 && !inMonth && Core.parseKey(k).getDay() === 0) break;
      const marks = [];
      if (act[k]) marks.push(h('span.mk.act', { title: `${act[k]} completed items` + (sdays.has(k) ? ' (study day)' : '') }, '✓' + act[k]));
      if (k >= today && dueBy[k]) marks.push(h('span.mk.due', { title: `${dueBy[k]} flashcard reviews scheduled` }, '↻' + dueBy[k]));
      const plan = st.plan[k] || []; if (plan.length) marks.push(h('span.mk.plan', { title: `${plan.filter(t => t.done).length}/${plan.length} planned tasks done` }, '☰' + plan.length));
      if (st.settings.examDate === k) marks.push(h('span.mk.exam', { title: 'Exam date' }, 'EXAM'));
      const label = `${fmtDate(k)}${act[k] ? `, ${act[k]} items completed` : ''}${k >= today && dueBy[k] ? `, ${dueBy[k]} reviews due` : ''}${plan.length ? `, ${plan.length} planned tasks` : ''}${st.settings.examDate === k ? ', exam date' : ''}${k === today ? ', today' : ''}`;
      cells.push(h('button.cal-day' + (inMonth ? '' : '.out') + (k === today ? '.today' : ''), { type: 'button', 'aria-pressed': String(k === this.sel), 'aria-label': label, on: { click: () => { this.sel = k; Shell.rerender(); } } }, h('span.n', null, String(Number(k.slice(8)))), h('span.marks', null, marks)));
    }
    const shift = n => { const d = new Date(y, m - 1 + n, 1); this.month = Core.dateKey(d).slice(0, 7); Shell.rerender(); };
    const dows = Array.from({ length: 7 }, (_, i) => Core.parseKey(Core.addDays(startKey, i)).toLocaleDateString(undefined, { weekday: 'short' }));
    const grid = h('div.card', null,
      h('div.cal-head', null, h('h2', { 'aria-live': 'polite' }, first.toLocaleDateString(undefined, { month: 'long', year: 'numeric' })), h('button.btn.sm', { 'aria-label': 'Previous month', on: { click: () => shift(-1) } }, icon('arrowL', 16)), h('button.btn.sm', { 'aria-label': 'Next month', on: { click: () => shift(1) } }, icon('arrowR', 16)), h('button.btn.sm.ghost', { on: { click: () => { this.month = today.slice(0, 7); this.sel = today; Shell.rerender(); } } }, 'Today')),
      h('div.cal-grid', { role: 'group', 'aria-label': 'Month view' }, dows.map(d => h('div.cal-dow', { 'aria-hidden': 'true' }, d)), cells),
      h('div.cal-legend', null, h('span', null, h('span.mk.act', null, '✓n'), ' completed items'), h('span', null, h('span.mk.due', null, '↻n'), ' flashcards scheduled'), h('span', null, h('span.mk.plan', null, '☰n'), ' planned tasks'), h('span', null, h('span.mk.exam', null, 'EXAM'), ' exam date')));
    main.appendChild(h('div.page', null, h('div.page-head', null, h('div', null, h('h1', null, 'Study Calendar'), h('p', null, 'Your real study history, scheduled flashcard reviews and your own plan. Past days show only activity actually recorded in this browser.'))),
      h('div.grid.two', { style: { gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)' } }, grid, this.dayPanel(this.sel, today)), this.settingsCard(today)));
  },
  dayPanel(day, today) {
    const st = Store.state, info = this.dayInfo(day), plan = st.plan[day] = st.plan[day] || [];
    const tasks = h('div');
    const paintTasks = () => {
      clear(tasks);
      if (!plan.length) tasks.appendChild(h('p.small.muted', null, 'No tasks planned for this day.'));
      plan.forEach(t => {
        const cb = h('input', { type: 'checkbox', checked: t.done, 'aria-label': 'Done: ' + t.text });
        cb.addEventListener('change', () => { t.done = cb.checked; Store.save(); paintTasks(); });
        tasks.appendChild(h('div.task' + (t.done ? '.done' : ''), null, cb, h('span.txt', null, t.text), t.topic && Model.topic(t.topic) ? h('a.btn.sm.ghost', { href: '#/lessons/' + t.topic, 'aria-label': 'Open lesson' }, icon('book', 16)) : null,
          h('button.btn.sm.ghost', { 'aria-label': 'Edit task', on: { click: () => editTask(t) } }, icon('edit', 16)),
          h('button.btn.sm.ghost', { 'aria-label': 'Delete task', on: { click: () => { plan.splice(plan.indexOf(t), 1); Store.save(); paintTasks(); Shell.rerender(); } } }, icon('trash', 16))));
      });
    };
    const editTask = t => {
      const inp = h('input', { type: 'text', value: t.text, maxlength: 300, 'aria-label': 'Task text', 'data-autofocus': true });
      const m = openModal('Edit task', h('form.stack', { on: { submit: e => { e.preventDefault(); const v = inp.value.trim(); if (!v) { inp.setAttribute('aria-invalid', 'true'); return; } t.text = v.slice(0, 300); Store.save(); m.close(); Shell.rerender(); } } }, inp, h('div.row.end', null, h('button.btn', { type: 'button', on: { click: () => m.close() } }, 'Cancel'), h('button.btn.primary', { type: 'submit' }, 'Save'))));
    };
    const add = h('input', { type: 'text', placeholder: 'Add a task, e.g. “Lecture 11: kappa practice”', maxlength: 300, 'aria-label': 'New task' });
    const addTask = () => { const v = add.value.trim(); if (!v) { add.focus(); return; } plan.push({ id: uid(), text: v.slice(0, 300), done: false }); add.value = ''; Store.save(); paintTasks(); Shell.rerender(); };
    add.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); addTask(); } });
    paintTasks();
    const due = day === today ? Model.compute().due : day > today ? Model.dueOn(day) : 0;
    return h('section.card', { 'aria-labelledby': 'day-h' },
      h('h2', { id: 'day-h' }, fmtDate(day, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })),
      day === st.settings.examDate ? h('p', null, h('span.chip.bad', null, 'Exam date')) : null,
      h('h3', null, 'Study sessions'),
      info.count || info.exams.length ? h('ul.small', null, Object.keys(info.groups).map(k => h('li', null, `${k}: ${info.groups[k][0]} answered, ${info.groups[k][1]} correct`)), info.rev.length ? h('li', null, `Flashcards: ${info.rev.length} ratings`) : null, info.rec.length ? h('li', null, `Recall mode: ${info.rec.length} self-checks`) : null, info.exams.map(e => h('li', null, h('a', { href: '#/exam/result/' + e.id }, e.title || 'Mock exam'), ` — ${e.items.filter(i => i.ok).length}/${e.items.length}`)))
        : h('p.small.muted', null, day > today ? 'This day is in the future.' : 'No study activity recorded on this day.'),
      info.terms.length ? h('details.more', null, h('summary', null, `Reviewed items (${info.terms.length})`), h('p.small', null, info.terms.slice(0, 80).join(' · ') + (info.terms.length > 80 ? ` … and ${info.terms.length - 80} more` : ''))) : null,
      h('h3', null, 'Scheduled reviews'), h('p.small', null, day < today ? 'Past day.' : due ? `${due} flashcard review(s) ${day === today ? 'due now (including overdue)' : 'scheduled'}.` : 'None scheduled.', day === today && due ? h('a.btn.sm', { href: '#/flash', style: { marginLeft: '.5rem' } }, 'Review') : null),
      h('h3', null, 'Planned tasks'), tasks, h('div.answer-row', { style: { marginTop: '.6rem' } }, add, h('button.btn', { on: { click: addTask } }, icon('plus', 16), 'Add')));
  },
  settingsCard(today) {
    const st = Store.state, s = st.settings;
    const goal = h('input', { type: 'number', min: 1, max: 500, value: String(s.goal), inputmode: 'numeric' });
    goal.addEventListener('change', () => { const v = parseInt(goal.value, 10); if (Number.isInteger(v) && v >= 1 && v <= 500) { s.goal = v; Store.save(); toast('Daily goal set to ' + v + ' items.'); } else { goal.value = s.goal; toast('Daily goal must be a whole number from 1 to 500.', 'bad'); } });
    const exam = h('input', { type: 'date', value: s.examDate || '' });
    exam.addEventListener('change', () => { s.examDate = Core.isKey(exam.value) ? exam.value : null; Store.save(); Shell.rerender(); });
    const gen = h('button.btn.primary', { on: { click: () => this.generatePlan(today) } }, icon('calendar', 18), 'Generate study plan to exam date');
    return h('div.card', { style: { marginTop: '1rem' } }, h('h2', null, 'Goals & plan'),
      h('div.filters', null, h('div.field', null, h('label', null, 'Daily goal (completed items)', goal)), h('div.field', null, h('label', null, 'Exam date', exam))),
      h('p.small.muted', { style: { marginTop: '.6rem' } }, 'The generator spreads every lesson topic over the days before your exam, adds a daily flashcard review, a mock exam about every fourth day, and a strict identification exam on the last day. It only replaces tasks it generated earlier from today onward. Your own tasks are kept, and you can edit or delete any task.'),
      h('div.row', null, gen, h('button.btn.ghost', { on: { click: () => this.clearGenerated(today) } }, 'Remove generated tasks')));
  },
  async generatePlan(today) {
    const st = Store.state, exam = st.settings.examDate;
    if (!exam || exam <= today) { toast('Set a future exam date first.', 'bad'); return; }
    const days = []; for (let d = today; d < exam; d = Core.addDays(d, 1)) days.push(d);
    const ok = await confirmDialog('Generate a study plan?', `This plans ${days.length} day(s) from ${fmtDate(today)} to ${fmtDate(Core.addDays(exam, -1))}. Previously generated tasks in that range are replaced; your own tasks stay.`, 'Generate plan');
    if (!ok) return;
    days.forEach(d => { if (st.plan[d]) st.plan[d] = st.plan[d].filter(t => !t.auto); });
    const topics = DATA.topics.slice(); const studyDays = Math.max(1, days.length - 1);
    const per = Math.ceil(topics.length / studyDays);
    days.forEach((d, i) => {
      const p = st.plan[d] = st.plan[d] || [];
      const last = i === days.length - 1 && days.length > 1;
      if (!last) topics.slice(i * per, i * per + per).forEach(t => p.push({ id: uid(), text: `Lesson: ${Model.lec(t.lec).short} — ${t.title} (read + identify)`, done: false, auto: true, topic: t.id }));
      p.push({ id: uid(), text: 'Review due flashcards', done: false, auto: true });
      if (last) p.push({ id: uid(), text: 'Strict identification mock exam (all lectures)', done: false, auto: true });
      else if ((i + 1) % 4 === 0) p.push({ id: uid(), text: 'Identification-heavy mock exam + review mistakes', done: false, auto: true });
    });
    Store.save(); toast('Study plan created.'); Shell.rerender();
  },
  async clearGenerated(today) {
    const st = Store.state; let n = 0;
    Object.keys(st.plan).forEach(d => { if (d >= today) { const before = st.plan[d].length; st.plan[d] = st.plan[d].filter(t => !t.auto); n += before - st.plan[d].length; } });
    Store.save(); toast(n ? `Removed ${n} generated task(s).` : 'No generated tasks to remove.'); Shell.rerender();
  }
};
