// ───────── Dashboard ─────────
function masteryExplainer() {
  return h('details.more', null, h('summary', null, 'How progress is calculated'),
    h('ul.small', null,
      h('li', null, h('b', null, 'Mastered concept: '), 'you answered it correctly at least twice, on two different questions or on two different days, at least once by typing (identification), and your most recent attempt was correct. Answers given after a hint or after revealing the answer are not evidence.'),
      h('li', null, h('b', null, 'Course progress '), '= mastered concepts ÷ all ' + DATA.concepts.length + ' concepts. Opening lessons, flipping flashcards and viewing answers never count as mastery.'),
      h('li', null, h('b', null, 'Accuracy '), '= correct ÷ answered identification and multiple-choice items (practice, strict and exam). Self-credited answers are counted as correct and listed separately so you can audit them.'),
      h('li', null, h('b', null, 'Flashcard familiarity '), 'is your own rating (Again/Hard/Good/Easy). It schedules reviews but is reported separately from demonstrated accuracy.'),
      h('li', null, h('b', null, 'Study day: '), `at least ${Core.STUDY_DAY_MIN} completed items (answers, card ratings or recall checks) or one finished mock exam, counted by the local date when each item was completed. The streak counts consecutive study days; it stays alive until the end of today.`),
      h('li', null, h('b', null, 'Daily goal: '), 'completed items today, using your local calendar date.')));
}

function streakBar(c) {
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const k = Core.addDays(c.today, -i), n = c.act[k] || 0, on = c.streak.days.has(k);
    days.push(h('div.d', null, h('div.dot' + (on ? '.on' : n ? '.part' : '') + (i === 0 ? '.today' : ''), { title: `${fmtDate(k)}: ${n} items${on ? ' (study day)' : ''}`, 'aria-label': `${fmtDate(k)}: ${n} items${on ? ', study day' : ''}` }, on ? icon('check', 14) : n ? String(n) : ''), Core.parseKey(k).toLocaleDateString(undefined, { weekday: 'narrow' })));
  }
  return h('div.streak', { role: 'img', 'aria-label': 'Last seven days of study activity' }, days);
}

Views.dashboard = {
  title: 'Dashboard',
  render(main) {
    const c = Model.compute(), st = Store.state, s = st.settings, total = DATA.concepts.length;
    const hr = new Date().getHours(), greet = hr < 12 ? 'Good morning' : hr < 18 ? 'Good afternoon' : 'Good evening';
    let countdown;
    if (s.examDate) { const n = Core.daysBetween(c.today, s.examDate); countdown = h('div.countdown', null, h('b', null, n >= 0 ? String(n) : '—'), h('span.small', null, n > 1 ? 'days to your exam' : n === 1 ? 'day to your exam' : n === 0 ? 'Exam day — good luck!' : 'Exam date has passed'), h('div.small.muted', null, fmtDate(s.examDate))); }
    else countdown = h('button.btn.accent', { on: { click: () => Shell.openSettings() } }, icon('calendar', 18), 'Set exam date');
    const heading = h('div.dashboard-heading', null,
      h('div', null, h('p.eyebrow', null, 'REMOTE SENSING / FINALS REVIEWER'), h('p.dashboard-welcome', null, 'Your study overview')),
      h('span.offline-pill', null, icon('check', 14), 'Offline ready'));
    const hero = h('section.card.hero', { 'aria-labelledby': 'hero-h' }, h('div.topo', { html: TOPO_SVG, 'aria-hidden': 'true' }),
      h('div.hero-copy', null, h('p.eyebrow', null, 'A LITTLE FOCUS. A CLEARER PICTURE.'),
        h('h1', { id: 'hero-h' }, greet + '.', h('br'), 'Let’s make it stick.'),
        h('p.muted', null, 'Read the clue. Recall the term. Build your confidence for Remote Sensing Lectures 9–13, one concept at a time.'),
        h('div.hero-actions', null, h('a.btn.primary', { href: '#/ident' }, icon('target', 18), 'Identification practice', icon('arrowR', 18)), h('a.btn', { href: '#/exam/preset/strict' }, icon('clock', 18), 'Strict identification exam')),
        h('div.hero-secondary', null, h('a', { href: '#/flash' }, icon('cards', 16), c.due ? `Review ${c.due} due card${c.due > 1 ? 's' : ''}` : 'Study flashcards'), h('a', { href: '#/recall' }, icon('brain', 16), 'Recall mode'))),
      h('div.hero-aside', null, h('div.course-stamp', { 'aria-hidden': 'true' }, icon('layers', 34), h('span', null, 'READ · RECALL · REPEAT')), countdown));
    const goal = s.goal || 20;
    const kpi = h('section.kpi', { 'aria-label': 'Progress summary' },
      h('div.card', null, h('div.stat', null, h('span.num', null, pct(c.mastered, total) + '%'), h('span.lbl', null, 'Course progress (mastery)')), meter('Concepts mastered', c.mastered, total), h('p.small.muted', { style: { margin: '.4rem 0 0' } }, `${c.learning} learning · ${total - c.mastered - c.learning} not started`)),
      h('div.card', null, h('div.stat', null, h('span.num', null, String(c.todayCount)), h('span.lbl', null, 'Completed today')), meter('Daily goal', Math.min(c.todayCount, goal), goal, { accent: true, text: `${c.todayCount} / ${goal}` }), h('p.small.muted', { style: { margin: '.4rem 0 0' } }, c.todayCount >= goal ? 'Goal met — nice work.' : `${goal - c.todayCount} to go.`)),
      h('div.card', null, h('div.stat', null, h('span.num', null, String(c.due)), h('span.lbl', null, 'Flashcard reviews due')), h('p.small.muted', null, 'Cards scheduled for today or earlier.'), h('a.btn.sm' + (c.due ? '.primary' : ''), { href: '#/flash' }, c.due ? 'Review now' : 'Start new cards')),
      h('div.card', null, h('div.row', null, h('div.stat', null, h('span.num', null, String(c.streak.current)), h('span.lbl', null, 'Day streak')), h('span.spacer', { style: { flex: 1 } }), h('div.stat', { style: { textAlign: 'right' } }, h('span.num', { style: { fontSize: '1.2rem' } }, String(c.streak.longest)), h('span.lbl', null, 'Longest'))), streakBar(c), h('p.small.muted', { style: { margin: 0 } }, c.streak.todayDone ? 'Today counts as a study day.' : `Complete ${Math.max(0, Core.STUDY_DAY_MIN - c.todayCount)} more item(s) today to extend the streak.`)));
    const lecs = h('section.lecture-section', { 'aria-labelledby': 'lec-h' },
      h('div.section-heading', null, h('div', null, h('p.eyebrow', null, 'YOUR LEARNING PATH'), h('h2', { id: 'lec-h' }, 'Explore the lectures'), h('p.muted.small', null, 'Pick up a topic, practice your recall, or test what you know.')), h('a.section-link', { href: '#/lessons' }, 'All lessons', icon('arrowR', 16))),
      h('div.grid.four', null, DATA.lectures.map(l => {
        const L = c.lec[l.id];
        return h('div.card.lec-card', { 'data-lecture': l.id }, h('div.row', null, lecChip(l.id), h('span.lecture-icon', { 'aria-hidden': 'true' }, icon('layers', 20))), h('h3', { style: { margin: '.5rem 0' } }, l.title), h('p.small.muted', null, `${L.concepts} concepts to explore`),
          meter('Mastered', L.mastered, L.concepts), h('div.meter-top', { style: { marginTop: '.5rem' } }, h('span', null, 'Accuracy'), h('b', null, L.attempts ? pct(L.correct, L.attempts) + '% of ' + L.attempts : 'no answers yet')),
          h('div.row', { style: { marginTop: '.7rem' } }, h('a.btn.sm', { href: '#/lessons/' + Model.topicsOf(l.id)[0].id }, 'Lessons'), h('a.btn.sm', { href: '#/ident/lec/' + l.id }, 'Identify'), h('a.btn.sm.ghost', { href: '#/exam/lec/' + l.id }, 'Exam')));
      })));
    const weak = h('div.card', null, h('div.card-head', null, h('h2', null, 'Weak topics'), h('span.spacer'), c.weakTopics.length ? h('a.btn.sm', { href: '#/ident/pool/weak' }, 'Practice weak areas') : null),
      c.weakTopics.length ? h('ul', { style: { margin: 0, paddingLeft: '1.1rem' } }, c.weakTopics.slice(0, 6).map(w => h('li', null, h('a', { href: '#/lessons/' + w.t.id }, w.t.title), ' — ', h('span.muted', null, `${pct(w.a.correct, w.a.attempts)}% of ${w.a.attempts}`))))
        : h('p.muted', { style: { margin: 0 } }, 'A topic appears here after at least 3 answers with under 70% accuracy.'));
    const recentMiss = st.attempts.filter(a => !a.ok).slice(-6).reverse();
    const missed = h('div.card', null, h('div.card-head', null, h('h2', null, 'Recently missed'), h('span.spacer'), recentMiss.length ? h('a.btn.sm', { href: '#/review' }, 'All mistakes') : null),
      recentMiss.length ? h('ul', { style: { margin: 0, paddingLeft: '1.1rem' } }, recentMiss.map(a => { const q = Model.q(a.q), cc = Model.concept(a.c); return q ? h('li', null, h('a', { href: '#/q/' + encodeURIComponent(q.id) }, cc ? cc.term : q.id), h('span.small.muted', null, ' · ' + fmtDate(a.d, { month: 'short', day: 'numeric' }))) : null; }))
        : h('p.muted', { style: { margin: 0 } }, 'No missed questions yet.'));
    const last = st.lastLesson && Model.topic(st.lastLesson);
    const cont = last ? h('div.card.soft', null, h('div.row', null, icon('book'), h('span', null, 'Continue reading: ', h('a', { href: '#/lessons/' + last.id }, last.title)))) : null;
    const counts = h('div.card.soft', null, h('p.small', { style: { margin: 0 } }, `Bank: ${DATA.concepts.length} concepts · ${Model.questions.filter(q => q.type === 'ident').length} identification items (${DATA.questions.filter(q => q.type === 'ident').length} hand-written + ${DATA.concepts.length} definition items) · ${DATA.questions.filter(q => q.type === 'mcq').length} multiple-choice · ${DATA.recall.length + DATA.formulas.length} recall prompts · ${DATA.concepts.length * 2} flashcard faces. `, h('a', { href: '#/coverage' }, 'Coverage report')), c.overrides ? h('p.small.muted', { style: { margin: '.3rem 0 0' } }, `${c.overrides} answer(s) self-credited — see Mistakes & Bookmarks.`) : null);
    const statIcons = ['target', 'check', 'cards', 'fire'];
    Array.from(kpi.children).forEach((card, i) => card.prepend(h('span.stat-icon', { 'aria-hidden': 'true' }, icon(statIcons[i], 18))));
    main.appendChild(h('div.page.dashboard', null, heading, hero, kpi, h('div.progress-help', null, masteryExplainer()), lecs, h('div.grid.two.review-grid', null, weak, missed), h('div.stack.dashboard-foot', null, cont, counts)));
  }
};
