// Content registry. Every content file calls these helpers; the build validates the result.
// Page numbers (p) are PDF page numbers inside the item's own lecture PDF.
// Cross-lecture references use x: ['L9:6'].
const DATA = {
  lectures: [], topics: [], concepts: [], questions: [], recall: [],
  formulas: [], coverage: {}, notes: [], limitations: []
};

function lecture(o) { DATA.lectures.push(o); }
function topic(o) { DATA.topics.push(o); }

// Concept = one assessable term. Generates a flashcard (both directions) and a definition-to-term identification item.
function C(lec, topicId, id, term, alts, def, p, extra) {
  DATA.concepts.push(Object.assign({ id, lec, topic: topicId, term, alts: alts || [], def, p: p || [] }, extra || {}));
}

// Hand-written identification item. kind: def | scenario | formula | acronym | visual | process | calc | list
function I(id, lec, topicId, diff, kind, prompt, answer, alts, explain, p, cid, extra) {
  DATA.questions.push(Object.assign({ id, type: 'ident', lec, topic: topicId, diff, kind, prompt, answer, alts: alts || [], explain, p, cid }, extra || {}));
}

// Multiple choice. opts = [[text, why], ...]; the FIRST option is the correct one (shuffled at runtime).
function M(id, lec, topicId, diff, prompt, opts, p, cid, extra) {
  DATA.questions.push(Object.assign({ id, type: 'mcq', lec, topic: topicId, diff, prompt, opts, p, cid }, extra || {}));
}

// Recall-mode item. kind: diff | steps | formula | explain
function R(id, lec, topicId, kind, prompt, model, p, cid) {
  DATA.recall.push({ id, lec, topic: topicId, kind, prompt, model, p, cid });
}

function F(o) { DATA.formulas.push(o); }

// Coverage rows: [pdfPage, printedSlideNo|null, title, status, topicId|null, note?]
// status: S substantive, T title, O outline, D duplicate, R references, X closing, U unlabeled image
function PAGES(lec, rows) { DATA.coverage[lec] = rows; }

// "Lecture wording" vs "Clarification"
function NOTE(id, lec, topicId, p, lectureText, clar) { DATA.notes.push({ id, lec, topic: topicId, p, lecture: lectureText, clar }); }

function LIMIT(lec, p, text) { DATA.limitations.push({ lec, p, text }); }
