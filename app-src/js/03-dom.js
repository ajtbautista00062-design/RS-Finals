// ───────── DOM helpers: safe element builder, inline markup, icons, toasts, modals ─────────
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));

// h('div.card#id', {attrs, on:{click}}, children...) — text children become text nodes (never parsed as HTML).
function h(tag, attrs, ...kids) {
  const m = tag.match(/^([a-z0-9]+)((?:[.#][\w-]+)*)$/i);
  const el = document.createElement(m ? m[1] : tag);
  if (m && m[2]) m[2].replace(/([.#])([\w-]+)/g, (_, t, v) => { if (t === '.') el.classList.add(v); else el.id = v; });
  if (attrs && (typeof attrs !== 'object' || attrs instanceof Node || Array.isArray(attrs))) { kids.unshift(attrs); attrs = null; }
  if (attrs) for (const k in attrs) {
    const v = attrs[k];
    if (v == null || v === false) continue;
    if (k === 'on') { for (const ev in v) el.addEventListener(ev, v[ev]); }
    else if (k === 'class') el.className += (el.className ? ' ' : '') + v;
    else if (k === 'html') el.innerHTML = v; // only used for trusted, generated SVG
    else if (k === 'text') el.textContent = v;
    else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
    else if (k in el && typeof v !== 'string' && k !== 'list') el[k] = v;
    else el.setAttribute(k, v === true ? '' : v);
  }
  appendKids(el, kids);
  return el;
}
function appendKids(el, kids) {
  kids.flat(Infinity).forEach(k => { if (k == null || k === false || k === '') return; el.appendChild(k instanceof Node ? k : document.createTextNode(String(k))); });
  return el;
}
const frag = (...kids) => appendKids(document.createDocumentFragment(), kids);
function clear(el) { while (el.firstChild) el.removeChild(el.firstChild); return el; }

// Inline markup for trusted lesson content: **bold**, *italic*, _{sub}, ^{sup}. Produces DOM nodes only.
function rich(text) {
  const out = document.createDocumentFragment();
  const re = /\*\*(.+?)\*\*|\*(.+?)\*|_\{([^}]*)\}|\^\{([^}]*)\}/g;
  let last = 0, m; const s = String(text == null ? '' : text);
  while ((m = re.exec(s))) {
    if (m.index > last) out.appendChild(document.createTextNode(s.slice(last, m.index)));
    if (m[1] != null) out.appendChild(h('strong', null, rich(m[1])));
    else if (m[2] != null) out.appendChild(h('em', null, m[2]));
    else if (m[3] != null) out.appendChild(h('sub', null, m[3]));
    else out.appendChild(h('sup', null, m[4]));
    last = re.lastIndex;
  }
  if (last < s.length) out.appendChild(document.createTextNode(s.slice(last)));
  return out;
}
const plain = s => String(s == null ? '' : s).replace(/\*\*|_\{|\^\{|\}/g, '').replace(/\*/g, '');

// Icons (stroke-based, 24px grid)
const ICONS = {
  home: 'M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z',
  book: 'M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 5v16M8 7h7',
  target: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 4a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2z',
  list: 'M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01',
  cards: 'M7 4h11a2 2 0 0 1 2 2v11M4 8a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z',
  brain: 'M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3h1V4zm6 0a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3h-1V4z',
  clock: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 4v5l3 2',
  flag: 'M5 21V4m0 0h11l-2 4 2 4H5',
  bookmark: 'M6 3h12v18l-6-4-6 4z',
  glossary: 'M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4zM20 4h-3M20 9h-3M20 14h-3',
  calendar: 'M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM4 10h16M9 2v4M15 2v4',
  layers: 'M12 3l9 5-9 5-9-5zM3 13l9 5 9-5',
  download: 'M12 4v11m0 0l-4-4m4 4l4-4M5 19h14',
  upload: 'M12 20V9m0 0l-4 4m4-4l4 4M5 5h14',
  search: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm9 16l-4.3-4.3',
  sun: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4',
  moon: 'M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z',
  gear: 'M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z',
  menu: 'M4 6h16M4 12h16M4 18h16',
  close: 'M6 6l12 12M18 6L6 18',
  check: 'M5 12.5l4.5 4.5L19 7.5',
  x: 'M7 7l10 10M17 7L7 17',
  info: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 8v6m0-9.5h.01',
  bulb: 'M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z',
  arrowR: 'M5 12h14m-5-5l5 5-5 5', arrowL: 'M19 12H5m5-5l-5 5 5 5',
  print: 'M7 9V3h10v6M7 18H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M7 14h10v7H7z',
  file: 'M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8zM14 3v5h5',
  table: 'M4 5h16v14H4zM4 10h16M10 5v14',
  trash: 'M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13',
  edit: 'M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4',
  plus: 'M12 5v14M5 12h14',
  play: 'M7 5l12 7-12 7z',
  eye: 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zm10-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
  focus: 'M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5',
  fire: 'M12 3c1 3 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3-1-3 0-6 1-9z',
  more: 'M5 12h.01M12 12h.01M19 12h.01'
};
function icon(name, size) {
  const s = size || 20;
  const span = document.createElement('span');
  span.setAttribute('aria-hidden', 'true'); span.style.display = 'inline-flex';
  span.innerHTML = `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${ICONS[name] || ICONS.info}"/></svg>`;
  return span;
}

// Original UAV / quadcopter mark with terrain grid and scan lines.
function logo(size) {
  const s = size || 38, span = document.createElement('span');
  span.setAttribute('aria-hidden', 'true'); span.style.display = 'inline-flex';
  span.innerHTML = `<svg width="${s}" height="${s}" viewBox="0 0 64 64" fill="none"><rect x="1" y="1" width="62" height="62" rx="15" fill="var(--primary)"/>
  <path d="M8 50c8-4 14-4 22 0s14 4 26 0M8 56c8-3 14-3 22 0s14 3 26 0" stroke="var(--accent-line)" stroke-width="1.6" opacity=".9"/>
  <path d="M14 44h36M20 40l-6 12M32 40v12M44 40l6 12" stroke="#ffffff" stroke-opacity=".28" stroke-width="1"/>
  <path d="M32 33L19 47M32 33l13 14" stroke="#f3dfb5" stroke-width="1.4" stroke-dasharray="2 2.5" opacity=".9"/>
  <g stroke="#ffffff" stroke-width="2.6" stroke-linecap="round"><path d="M22 18l6 6M42 18l-6 6M22 34l6-6M42 34l-6-6"/></g>
  <g stroke="#ffffff" stroke-width="2.2"><circle cx="18" cy="14" r="6.5"/><circle cx="46" cy="14" r="6.5"/><circle cx="18" cy="38" r="6.5"/><circle cx="46" cy="38" r="6.5"/></g>
  <rect x="26" y="21" width="12" height="10" rx="3.2" fill="#ffffff"/><circle cx="32" cy="26" r="2.2" fill="var(--primary)"/></svg>`;
  return span;
}
// Subtle topographic contour background for the dashboard hero.
const TOPO_SVG = `<svg viewBox="0 0 600 200" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="1"><path d="M-10 160 C80 120 140 170 230 140 S400 90 610 130"/><path d="M-10 180 C90 140 160 190 250 160 S420 110 610 150"/><path d="M-10 140 C70 100 130 150 215 120 S380 70 610 110"/><path d="M380 40 c30-20 80-10 90 15 s-30 45-70 35 -45-30-20-50z"/><path d="M395 45 c20-10 50-5 55 10 s-20 28-42 22 -28-18-13-32z"/><path d="M410 52 c10-4 25-2 27 5 s-10 13-20 10 -14-9-7-15z"/><path d="M0 60 H600 M0 100 H600" stroke-dasharray="2 10" opacity=".6"/></svg>`;

// Toasts, announcements and modals
function toast(msg, kind) {
  const t = h('div.toast' + (kind === 'bad' ? '.bad' : ''), null, msg);
  $('#toast').appendChild(t); setTimeout(() => t.remove(), kind === 'bad' ? 6000 : 3200);
}
let modalStack = [];
function openModal(title, body, opts) {
  opts = opts || {};
  const prev = document.activeElement;
  const titleId = 'mt' + uid();
  const close = () => { back.remove(); modalStack = modalStack.filter(m => m !== back); document.removeEventListener('keydown', onKey, true); if (prev && prev.focus) prev.focus(); if (opts.onClose) opts.onClose(); };
  const dialog = h('div.modal' + (opts.wide ? '.wide' : ''), { role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': titleId },
    h('div.modal-head', null, h('h2', { id: titleId }, title), h('span.spacer'), h('button.btn.ghost.icon', { 'aria-label': 'Close dialog', on: { click: close } }, icon('close'))),
    body);
  const back = h('div.modal-back', { on: { mousedown: e => { if (e.target === back && !opts.sticky) close(); } } }, dialog);
  function onKey(e) {
    if (modalStack[modalStack.length - 1] !== back) return;
    if (e.key === 'Escape' && !opts.sticky) { e.preventDefault(); close(); }
    if (e.key === 'Tab') { const f = $$('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', dialog).filter(x => !x.disabled && x.offsetParent !== null); if (!f.length) return; const first = f[0], last = f[f.length - 1]; if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); } else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); } }
  }
  document.addEventListener('keydown', onKey, true);
  $('#modal-root').appendChild(back); modalStack.push(back);
  const auto = dialog.querySelector('[data-autofocus]') || dialog.querySelector('input, select, textarea, .btn.primary') || dialog.querySelector('button');
  setTimeout(() => auto && auto.focus(), 20);
  return { close, el: dialog };
}
function confirmDialog(title, message, okLabel, opts) {
  opts = opts || {};
  return new Promise(resolve => {
    let done = false;
    const typed = opts.typeToConfirm ? h('input', { type: 'text', autocomplete: 'off', 'aria-label': `Type ${opts.typeToConfirm} to confirm`, placeholder: opts.typeToConfirm }) : null;
    const ok = h('button.btn' + (opts.danger ? '.danger' : '.primary'), { on: { click: () => { if (typed && typed.value.trim() !== opts.typeToConfirm) { typed.focus(); typed.setAttribute('aria-invalid', 'true'); err.textContent = `Type ${opts.typeToConfirm} exactly to continue.`; return; } done = true; m.close(); resolve(true); } } }, okLabel || 'OK');
    const err = h('p.small', { role: 'alert', style: { color: 'var(--bad)' } });
    const body = h('div.stack', null, typeof message === 'string' ? h('p', null, message) : message, typed ? h('div.field', null, h('label', null, `Type ${opts.typeToConfirm} to confirm`), typed) : null, err,
      h('div.row.end', null, h('button.btn', { on: { click: () => { m.close(); } } }, 'Cancel'), ok));
    const m = openModal(title, body, { onClose: () => { if (!done) resolve(false); } });
  });
}
function download(filename, mime, content) {
  try {
    const blob = content instanceof Blob ? content : new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = h('a', { href: url, download: filename, style: { display: 'none' } });
    document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 1500);
    return true;
  } catch (e) { toast('Download failed: ' + e.message, 'bad'); return false; }
}
function pct(n, d) { return d ? Math.round(n / d * 100) : 0; }
function bar(value, max, opts) {
  opts = opts || {};
  const p = max ? Math.max(0, Math.min(100, value / max * 100)) : 0;
  return h('div.bar' + (opts.accent ? '.accent' : '') + (opts.thin ? '.thin' : ''), { role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': max || 0, 'aria-valuenow': value, 'aria-label': opts.label || 'progress' }, h('span', { style: { width: p.toFixed(1) + '%' } }));
}
function meter(label, value, max, opts) {
  opts = opts || {};
  return h('div.meter', null, h('div.meter-top', null, h('span', null, label), h('b', null, opts.text || `${value} / ${max}`)), bar(value, max, Object.assign({ label }, opts)));
}
function lecChip(lec) { const L = Model.lec(lec); return h('span.chip.' + lec.toLowerCase(), { title: L ? L.title : lec }, L ? L.short : lec); }
function fmtDate(key, opts) { try { return Core.parseKey(key).toLocaleDateString(undefined, opts || { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }); } catch (e) { return key; } }
