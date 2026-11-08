// Logic tests for the pure core (answer checking, dates, scheduling, mastery, streaks) and key worked numbers.
export function run(Core, DATA) {
  let passed = 0; const failed = [];
  const t = (name, cond) => { if (cond) passed++; else failed.push(name); };
  const q = (id) => DATA.questions.find(x => x.id === id);
  const ok = (id, input) => Core.check(q(id), input).ok;

  // Normalization: harmless differences accepted
  t('case/space/punct', Core.check({ answer: 'User’s accuracy', alts: [] }, '  users ACCURACY. ').ok);
  t('hyphen', Core.check({ answer: 'Post-classification sorting', alts: [] }, 'post classification sorting').ok);
  t('article', Core.check({ answer: 'Hughes phenomenon', alts: [] }, 'the Hughes phenomenon').ok);
  t('paren stripped', Core.check({ answer: 'Kinetic temperature (T_kin)', alts: [] }, 'kinetic temperature').ok);
  t('acronym in paren', Core.check({ answer: 'Minimum mapping unit (MMU)', alts: [] }, 'MMU').ok);
  // Different scientific concepts rejected (no fuzzy acceptance)
  t('omission≠commission', !Core.check({ answer: 'Error of omission (exclusion)', alts: ['omission error', 'omission'] }, 'commission').ok);
  t('layover≠foreshortening', !Core.check({ answer: 'Layover', alts: [] }, 'foreshortening').ok);
  t('hard≠soft', !Core.check({ answer: 'Hard (crisp) classification', alts: ['hard', 'crisp'] }, 'soft').ok);
  t('near miss flagged not accepted', (() => { const r = Core.check({ answer: 'Parallelepiped classifier', alts: ['parallelepiped'] }, 'paralelepiped'); return !r.ok && r.near; })());
  t('producer vs user', !Core.check({ answer: 'Producer’s accuracy', alts: ['producers accuracy'] }, 'user’s accuracy').ok);
  // Numeric
  t('OA 74', ok('L11-I01', '74%') && ok('L11-I01', '73.96') && ok('L11-I01', '0.74') && !ok('L11-I01', '72'));
  t('kappa 0.65', ok('L11-I09', '0.65') && ok('L11-I09', '0,65') && ok('L11-I09', '.6535') && !ok('L11-I09', '0.74'));
  t('thousands', ok('L11-I10', '46,814') && ok('L11-I10', '46814'));
  t('wien', ok('L12-I11', '9.66 µm') && !ok('L12-I11', '3.62'));
  t('range res', ok('L12-I64', '35.5 m') && ok('L12-I65', '19.58'));
  // Band combinations
  t('bands 432', ok('L9-I28', '432') && ok('L9-I28', 'B4, B3, B2') && ok('L9-I28', '4-3-2') && !ok('L9-I28', '2,3,4'));
  t('bands order hint', Core.check(q('L9-I28'), '2 3 4').near === 'order');
  t('bands 12/8A', ok('L9-I43', 'B12/B11/B2') && !ok('L9-I43', 'B11/B12/B2'));
  // Keyword groups
  t('kw all groups', ok('L11-I12', 'the row total') && !ok('L11-I12', 'column total'));
  t('kw2 any two', ok('L10-I30', 'network architecture and number of iterations') && !ok('L10-I30', 'network architecture'));
  t('kw negation', ok('L12-I68', 'no') && ok('L12-I68', 'not resolved') && !ok('L12-I68', 'yes they are resolved'));
  t('kw short stem whole word', !ok('L12-I68', 'I know they are resolved'));

  // Dates (local, DST/month/year safe)
  t('addDays month end', Core.addDays('2026-01-31', 1) === '2026-02-01');
  t('addDays leap', Core.addDays('2028-02-28', 1) === '2028-02-29');
  t('addDays year', Core.addDays('2026-12-31', 1) === '2027-01-01');
  t('daysBetween across DST', Core.daysBetween('2026-03-07', '2026-03-09') === 2 && Core.daysBetween('2026-10-31', '2026-11-02') === 2);
  t('isKey', Core.isKey('2026-11-01') && !Core.isKey('2026-02-30') && !Core.isKey('2026-1-1'));

  // Scheduling
  const d0 = '2026-11-01';
  let c = Core.schedule(null, 2, d0); t('good first 1d', c.ivl === 1 && c.due === '2026-11-02');
  c = Core.schedule(c, 2, '2026-11-02'); t('good second 3d', c.ivl === 3 && c.due === '2026-11-05');
  const c3 = Core.schedule(c, 2, '2026-11-05'); t('good third grows', c3.ivl >= 7);
  const ca = Core.schedule(c3, 0, '2026-11-12'); t('again resets', ca.ivl === 0 && ca.reps === 0 && ca.due === '2026-11-12' && ca.lapses === 1 && ca.ease < c3.ease);
  t('easy first 3d', Core.schedule(null, 3, d0).ivl === 3);
  t('ease floor', (() => { let x = null; for (let i = 0; i < 20; i++) x = Core.schedule(x, 0, d0); return x.ease === 1.3; })());
  t('preview monotonic', (() => { const p = Core.previewIntervals(c3, d0); return p[0] <= p[1] && p[1] <= p[2] && p[2] <= p[3]; })());

  // Mastery
  const A = (q, d, ok, ty = 'ident', extra = {}) => Object.assign({ q, d, ok, ty, hint: 0, rev: false }, extra);
  t('new', Core.conceptStatus([]) === 'new');
  t('one correct = learning', Core.conceptStatus([A('x', '2026-11-01', true)]) === 'learning');
  t('same q same day twice ≠ mastered', Core.conceptStatus([A('x', '2026-11-01', true), A('x', '2026-11-01', true)]) === 'learning');
  t('two qs mastered', Core.conceptStatus([A('x', '2026-11-01', true), A('y', '2026-11-01', true, 'mcq')]) === 'mastered');
  t('same q two days mastered', Core.conceptStatus([A('x', '2026-11-01', true), A('x', '2026-11-02', true)]) === 'mastered');
  t('mcq only not mastered', Core.conceptStatus([A('x', '2026-11-01', true, 'mcq'), A('y', '2026-11-02', true, 'mcq')]) === 'learning');
  t('hinted not evidence', Core.conceptStatus([A('x', '2026-11-01', true, 'ident', { hint: 1 }), A('y', '2026-11-02', true, 'ident', { hint: 2 })]) === 'learning');
  t('latest wrong demotes', Core.conceptStatus([A('x', '2026-11-01', true), A('y', '2026-11-02', true), A('z', '2026-11-03', false)]) === 'learning');

  // Streaks
  const mk = days => ({ attempts: days.flatMap(d => Array.from({ length: 5 }, () => ({ d }))), reviews: [], recall: [], exams: [] });
  let s = Core.streaks(mk(['2026-10-30', '2026-10-31', '2026-11-01']), '2026-11-01'); t('streak 3 today', s.current === 3 && s.longest === 3 && s.todayDone);
  s = Core.streaks(mk(['2026-10-30', '2026-10-31']), '2026-11-01'); t('streak alive from yesterday', s.current === 2 && !s.todayDone);
  s = Core.streaks(mk(['2026-10-28', '2026-10-30']), '2026-11-01'); t('broken streak', s.current === 0 && s.longest === 1);
  s = Core.streaks({ attempts: [{ d: '2026-11-01' }, { d: '2026-11-01' }], reviews: [], recall: [], exams: [] }, '2026-11-01'); t('below minimum not a study day', s.current === 0);
  s = Core.streaks(mk(['2026-12-30', '2026-12-31', '2027-01-01']), '2027-01-01'); t('streak across new year', s.current === 3);

  // Worked numbers from the lectures
  const M = [[65, 4, 22, 24], [6, 81, 5, 8], [0, 11, 85, 19], [4, 7, 3, 90]];
  const N = M.flat().reduce((a, b) => a + b, 0), diag = M.reduce((a, r, i) => a + r[i], 0);
  const rows = M.map(r => r.reduce((a, b) => a + b, 0)), cols = M[0].map((_, j) => M.reduce((a, r) => a + r[j], 0));
  const sp = rows.reduce((a, r, i) => a + r * cols[i], 0);
  const kappa = (N * diag - sp) / (N * N - sp);
  t('matrix totals', N === 434 && rows.join() === '115,100,115,104' && cols.join() === '75,103,115,141');
  t('OA 74%', Math.round(diag / N * 100) === 74);
  t('UA list', rows.map((r, i) => Math.round(M[i][i] / r * 100)).join() === '57,81,74,87');
  t('PA list', cols.map((c, i) => Math.round(M[i][i] / c * 100)).join() === '87,79,74,64');
  t('kappa 0.65', Math.abs(kappa - 0.6535) < 0.0005);
  t('wien', Math.abs(2898 / 300 - 9.66) < 0.005 && Math.abs(2898 / 800 - 3.6225) < 1e-9);
  t('range res', Math.abs(0.1e-6 * 3e8 / (2 * Math.cos(65 * Math.PI / 180)) - 35.49) < 0.02 && Math.abs(0.1e-6 * 3e8 / (2 * Math.cos(40 * Math.PI / 180)) - 19.58) < 0.01);
  t('az res', 20000 * 0.03 / 5 === 120 && 40000 * 0.03 / 5 === 240);
  t('fuzzy 60', Math.abs((70 - 60) / 15 - 0.667) < 0.001 && Math.abs((60 - 55) / 15 - 0.333) < 0.001);
  return { passed, failed };
}
