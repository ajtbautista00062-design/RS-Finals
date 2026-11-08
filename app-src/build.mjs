// Build: validate content, run logic tests, and inline everything into one offline HTML file.
// Usage: node app-src/build.mjs
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const SRC = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(SRC, '..');
const read = p => fs.readFileSync(path.join(SRC, p), 'utf8');
const list = dir => fs.readdirSync(path.join(SRC, dir)).filter(f => f.endsWith('.js')).sort().map(f => path.join(dir, f));

const contentFiles = list('content');
const jsFiles = list('js');
const contentCode = contentFiles.map(f => `// ── ${f}\n` + read(f)).join('\n');
const appCode = jsFiles.map(f => `// ── ${f}\n` + read(f)).join('\n');

// ---------- Evaluate content + core in a sandbox ----------
const ctx = vm.createContext({ console });
vm.runInContext(contentCode + '\n' + read('js/01-core.js') + '\n;globalThis.__out = { DATA, FIG, Core };', ctx);
const { DATA, FIG, Core } = ctx.__out;

const errors = [], warns = [];
const err = m => errors.push(m), warn = m => warns.push(m);
const lect = Object.fromEntries(DATA.lectures.map(l => [l.id, l]));
const ids = new Map();
const uniq = (id, kind) => { if (ids.has(id)) err(`Duplicate id ${id} (${kind} vs ${ids.get(id)})`); ids.set(id, kind); };
const topics = Object.fromEntries(DATA.topics.map(t => [t.id, t]));
const concepts = Object.fromEntries(DATA.concepts.map(c => [c.id, c]));
const notes = Object.fromEntries(DATA.notes.map(n => [n.id, n]));
const formulas = Object.fromEntries(DATA.formulas.map(f => [f.id, f]));
const pagesOk = (lec, p, where) => (p || []).forEach(n => { if (!lect[lec] || !(n >= 1 && n <= lect[lec].pages)) err(`${where}: page ${n} outside ${lec}`); });
const xOk = (x, where) => (x || []).forEach(s => { const [l, n] = s.split(':'); pagesOk(l, [Number(n)], where + ' x'); });

DATA.topics.forEach(t => {
  uniq(t.id, 'topic'); if (!lect[t.lec]) err(`Topic ${t.id} bad lecture`); pagesOk(t.lec, t.p, t.id);
  (t.keys || []).forEach(k => { if (!concepts[k]) err(`Topic ${t.id} key ${k} missing`); });
  (t.blocks || []).forEach(b => {
    if (!['h', 'p', 'ul', 'ol', 'table', 'note', 'fig', 'formula', 'steps', 'quote', 'lab'].includes(b[0])) err(`Topic ${t.id} unknown block ${b[0]}`);
    if (b[0] === 'note' && !notes[b[1]]) err(`Topic ${t.id} note ${b[1]} missing`);
    if (b[0] === 'fig' && !FIG[b[1]]) err(`Topic ${t.id} figure ${b[1]} missing`);
    if (b[0] === 'formula' && !formulas[b[1]]) err(`Topic ${t.id} formula ${b[1]} missing`);
    if (b[0] === 'table') b[2].forEach((r, i) => { if (r.length !== b[1].length) err(`Topic ${t.id} table row ${i} has ${r.length} cells, header ${b[1].length}`); });
  });
});
DATA.concepts.forEach(c => {
  uniq(c.id, 'concept'); if (!topics[c.topic]) err(`Concept ${c.id} topic ${c.topic} missing`); else if (topics[c.topic].lec !== c.lec) err(`Concept ${c.id} lecture mismatch`);
  pagesOk(c.lec, c.p, c.id); xOk(c.x, c.id); if (!c.p.length) err(`Concept ${c.id} has no source page`);
  const core = c.term.replace(/\([^)]*\)/g, '').trim().toLowerCase();
  if (core.length >= 4 && c.def.toLowerCase().includes(core)) warn(`Concept ${c.id} definition contains its term “${core}”`);
  const q = { answer: c.term, alts: c.alts };
  [c.term].concat(c.alts).forEach(a => { if (!Core.check(q, a).ok) err(`Concept ${c.id}: accepted form “${a}” fails its own check`); });
});
DATA.questions.forEach(q => {
  uniq(q.id, q.type); if (!topics[q.topic]) err(`Q ${q.id} topic missing`); if (!concepts[q.cid]) err(`Q ${q.id} concept ${q.cid} missing`);
  pagesOk(q.lec, q.p, q.id); if (!q.p || !q.p.length) err(`Q ${q.id} no pages`); if (![1, 2, 3].includes(q.diff)) err(`Q ${q.id} bad difficulty`);
  if (q.fig && !FIG[q.fig]) err(`Q ${q.id} figure ${q.fig} missing`);
  if (q.type === 'mcq') {
    if (!Array.isArray(q.opts) || q.opts.length !== 4) err(`MCQ ${q.id} needs 4 options`);
    const texts = q.opts.map(o => Core.norm(o[0])); if (new Set(texts).size !== 4) err(`MCQ ${q.id} duplicate options`);
    q.opts.forEach((o, i) => { if (!o[1]) err(`MCQ ${q.id} option ${i} lacks explanation`); });
  } else {
    if (!q.answer) err(`Ident ${q.id} no answer`);
    const selfForms = q.num || q.bands ? [q.answer] : [q.answer].concat(q.alts || []);
    selfForms.forEach(a => { if (!Core.check(q, a).ok) err(`Ident ${q.id}: accepted form “${a}” fails its own check`); });
    if (!q.explain) err(`Ident ${q.id} no explanation`);
  }
});
DATA.recall.forEach(r => { uniq(r.id, 'recall'); if (!concepts[r.cid]) err(`Recall ${r.id} concept missing`); pagesOk(r.lec, r.p, r.id); });
DATA.formulas.forEach(f => { uniq(f.id, 'formula'); pagesOk(f.lec, f.p, f.id); });
DATA.notes.forEach(n => { uniq(n.id, 'note'); pagesOk(n.lec, n.p, n.id); });
Object.keys(FIG).forEach(k => { try { const s = FIG[k](); if (!s.startsWith('<svg')) err(`Figure ${k} bad output`); if (/NaN|undefined/.test(s)) err(`Figure ${k} contains NaN/undefined`); } catch (e) { err(`Figure ${k} threw ${e.message}`); } });

// ---------- Coverage reconciliation ----------
const coverageReport = {};
DATA.lectures.forEach(l => {
  const rows = DATA.coverage[l.id] || [];
  const seen = new Set(rows.map(r => r[0]));
  for (let p = 1; p <= l.pages; p++) if (!seen.has(p)) err(`Coverage ${l.id} missing page ${p}`);
  if (rows.length !== l.pages) err(`Coverage ${l.id} has ${rows.length} rows for ${l.pages} pages`);
  const refC = new Set(), refQ = new Set(), refT = new Set();
  DATA.concepts.filter(c => c.lec === l.id).forEach(c => c.p.forEach(p => refC.add(p)));
  DATA.concepts.forEach(c => (c.x || []).forEach(s => { const [lx, n] = s.split(':'); if (lx === l.id) refC.add(Number(n)); }));
  DATA.questions.filter(q => q.lec === l.id).forEach(q => q.p.forEach(p => refQ.add(p)));
  DATA.topics.filter(t => t.lec === l.id).forEach(t => t.p.forEach(p => refT.add(p)));
  const gaps = [];
  rows.forEach(r => {
    const [p, , , st, tp] = r;
    if ((st === 'S' || st === 'D') && !tp) err(`Coverage ${l.id} p${p} substantive but no topic`);
    if (tp && !topics[tp]) err(`Coverage ${l.id} p${p} topic ${tp} missing`);
    if (st === 'S' && !(refC.has(p) && refQ.has(p))) gaps.push(p + (refC.has(p) ? '' : 'c') + (refQ.has(p) ? '' : 'q'));
    if (st === 'S' && !refT.has(p)) warn(`Coverage ${l.id} p${p} not listed in its topic page set`);
  });
  if (gaps.length) err(`Coverage ${l.id}: substantive pages lacking concept(c)/question(q) links: ${gaps.join(', ')}`);
  coverageReport[l.id] = { pages: l.pages, substantive: rows.filter(r => r[3] === 'S').length };
});
DATA.topics.forEach(t => { if (!DATA.questions.some(q => q.topic === t.id && q.type === 'mcq')) warn(`Topic ${t.id} has no MCQ`); });

// ---------- Logic tests ----------
const testFile = path.join(SRC, 'tests', 'logic.test.mjs');
let testResult = { passed: 0, failed: [] };
if (fs.existsSync(testFile)) {
  const mod = await import('file://' + testFile.replace(/\\/g, '/'));
  testResult = mod.run(Core, DATA);
}

// ---------- Report ----------
const count = t => DATA.questions.filter(q => q.type === t).length;
const stats = { lectures: DATA.lectures.length, topics: DATA.topics.length, concepts: DATA.concepts.length, identHand: count('ident'), identAuto: DATA.concepts.length, mcq: count('mcq'), recall: DATA.recall.length, formulas: DATA.formulas.length, notes: DATA.notes.length, figures: Object.keys(FIG).length, coverage: coverageReport };
console.log('Stats', JSON.stringify(stats));
warns.forEach(w => console.log('WARN', w));
console.log(`Tests: ${testResult.passed} passed, ${testResult.failed.length} failed`);
testResult.failed.forEach(f => console.log('  FAIL', f));
if (errors.length || testResult.failed.length) { errors.forEach(e => console.log('ERROR', e)); console.log(`${errors.length} errors — build aborted`); process.exit(1); }

// ---------- Assemble ----------
const css = ['styles.css', 'styles/shell.css', 'styles/dashboard.css', 'styles/study.css'].map(read).join('\n');
const tpl = read('template.html');
const js = `(function(){'use strict';\n${contentCode}\n${appCode}\n})();`;
if (/<\/script/i.test(js)) { console.log('ERROR script contains </script'); process.exit(1); }
const html = tpl.replace('/*__CSS__*/', () => css).replace('/*__JS__*/', () => js).replace('__BUILD__', new Date().toISOString().slice(0, 10));
fs.writeFileSync(path.join(ROOT, 'remote-sensing-finals-reviewer.html'), html);
fs.writeFileSync(path.join(ROOT, 'index.html'), html);
console.log(`Wrote remote-sensing-finals-reviewer.html and index.html (${(html.length / 1024).toFixed(0)} KB)`);
