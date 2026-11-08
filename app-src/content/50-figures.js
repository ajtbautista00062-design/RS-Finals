// Original inline SVG figures. Colors come from CSS classes (theme-aware); every figure has a text alternative.
const FIG = (function () {
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  let uid = 0;
  // Each SVG gets its own marker/gradient ids so several figures can share one page without duplicate ids.
  const svg = (w, h, label, body) => { const id = 'f' + (++uid); body = body.replace(/url\(#ah\)/g, `url(#${id}ah)`).replace(/id="gr(\d)"/g, `id="${id}gr$1"`).replace(/url\(#gr(\d)\)/g, `url(#${id}gr$1)`); return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}" class="fig-svg" xmlns="http://www.w3.org/2000/svg"><title>${esc(label)}</title><defs><marker id="${id}ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="fg-ah"/></marker></defs>${body}</svg>`; };
  const T = (x, y, s, o = {}) => `<text x="${x}" y="${y}" class="fg-tx${o.cls ? ' ' + o.cls : ''}"${o.a ? ` text-anchor="${o.a}"` : ''}${o.size ? ` font-size="${o.size}"` : ''}${o.w ? ` font-weight="${o.w}"` : ''}${o.rot ? ` transform="rotate(${o.rot} ${x} ${y})"` : ''}>${esc(s)}</text>`;
  const L = (x1, y1, x2, y2, o = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${o.cls || 'fg-ln'}"${o.arrow ? ' marker-end="url(#ah)"' : ''}${o.dash ? ' stroke-dasharray="5 4"' : ''}${o.sw ? ` stroke-width="${o.sw}"` : ''}/>`;
  const R = (x, y, w, h, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx == null ? 6 : o.rx}" class="${o.cls || 'fg-box'}"${o.dash ? ' stroke-dasharray="5 4"' : ''}/>`;
  const Ci = (x, y, r, cls) => `<circle cx="${x}" cy="${y}" r="${r}" class="${cls || 'fg-dot'}"/>`;
  const P = (d, cls, o = {}) => `<path d="${d}" class="${cls || 'fg-ln'}"${o.arrow ? ' marker-end="url(#ah)"' : ''}${o.dash ? ' stroke-dasharray="5 4"' : ''}/>`;
  function rng(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
  function gauss(r) { let u = 0, v = 0; while (!u) u = r(); while (!v) v = r(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }

  const F = {};

  F['fig-process'] = () => svg(640, 270, 'Image interpretation process diagram', [
    R(20, 30, 150, 52), T(95, 62, 'Image', { a: 'middle', w: 600 }),
    R(20, 150, 200, 62), T(120, 176, 'Interpreter’s skills', { a: 'middle' }), T(120, 196, 'and knowledge level', { a: 'middle' }),
    `<ellipse cx="350" cy="112" rx="100" ry="52" class="fg-box-a"/>`, T(350, 108, 'Interpretation', { a: 'middle', w: 600 }), T(350, 128, 'process', { a: 'middle', w: 600 }),
    R(490, 78, 135, 72), T(557, 104, 'INFORMATION', { a: 'middle', w: 600 }), T(557, 122, '– quality', { a: 'middle' }), T(557, 140, '– quantity', { a: 'middle' }),
    L(170, 62, 255, 92, { arrow: true }), L(220, 175, 260, 140, { arrow: true }), L(450, 112, 486, 112, { arrow: true }),
    P('M350,166 C350,240 160,250 130,216', 'fg-ln-b', { arrow: true }), T(290, 252, 'Learning → Perceptions (feedback)', { a: 'middle', cls: 'fg-tx-b' })
  ].join(''));

  F['fig-levels'] = () => svg(720, 300, 'Three levels of interpretation pyramid', [
    `<polygon points="300,20 470,280 130,280" class="fg-fill-c"/>`,
    `<polygon points="300,20 357,107 243,107" class="fg-fill-a"/>`,
    `<polygon points="243,107 357,107 413,193 187,193" class="fg-fill-b"/>`,
    T(300, 85, 'Image reading', { a: 'middle', w: 600, size: 13 }), T(300, 158, 'Image analysis', { a: 'middle', w: 600 }), T(300, 245, 'Image interpretation', { a: 'middle', w: 600 }),
    T(480, 64, 'superficial, quick', { size: 12 }), T(480, 80, 'main features & distribution', { size: 12 }),
    T(430, 150, 'longer, more detailed', { size: 12 }), T(430, 166, 'general & obvious features', { size: 12 }),
    T(10, 230, 'inductive & deductive,', { size: 12 }), T(10, 246, 'with OTHER DATA;', { size: 12 }), T(10, 262, 'functions & inter-relationships', { size: 12 }),
    L(690, 110, 690, 270, { arrow: true }), T(704, 190, 'deeper', { rot: 90, size: 12 })
  ].join(''));

  F['fig-estes'] = () => svg(700, 320, 'Primary ordering of image elements after Estes et al. 1983', [
    `<polygon points="330,24 520,284 140,284" class="fg-fill-c"/>`,
    L(80, 84, 560, 84, { dash: true }), L(80, 148, 560, 148, { dash: true }), L(80, 212, 560, 212, { dash: true }),
    T(330, 70, 'TONE / COLOR', { a: 'middle', w: 600 }), T(330, 126, 'SIZE   SHAPE   TEXTURE', { a: 'middle', w: 600 }),
    T(330, 190, 'PATTERN   HEIGHT   SHADOW', { a: 'middle', w: 600 }), T(330, 258, 'SITE   ASSOCIATION', { a: 'middle', w: 600 }),
    T(14, 62, 'Basic element', { size: 12 }), T(14, 116, 'Spatial arrangement', { size: 12 }), T(14, 132, 'of tone', { size: 12 }),
    T(580, 62, 'Primary', { size: 12 }), T(580, 126, 'Secondary', { size: 12 }), T(580, 190, 'Tertiary', { size: 12 }), T(580, 258, 'Higher', { size: 12 }),
    L(670, 40, 670, 290, { arrow: true }), T(690, 310, 'increasing complexity ↓', { a: 'end', size: 11 })
  ].join(''));

  F['fig-composites'] = () => {
    const panel = (x0, title, rows) => {
      let s = T(x0 + 130, 22, title, { a: 'middle', w: 600 });
      rows.forEach((r, i) => {
        const y = 50 + i * 58;
        s += R(x0, y, 120, 38) + T(x0 + 60, y + 24, r[0], { a: 'middle' });
        s += L(x0 + 122, y + 19, x0 + 196, y + 19, { arrow: true });
        s += `<circle cx="${x0 + 222}" cy="${y + 19}" r="20" class="fg-gun-${r[1]}"/>` + T(x0 + 222, y + 24, r[2], { a: 'middle', w: 700, cls: 'fg-gun-tx' });
      });
      return s;
    };
    return svg(620, 230, 'Band to color-layer assignment for true color and NIR false color composites', panel(20, 'True (normal) color', [['Red band', 'r', 'R'], ['Green band', 'g', 'G'], ['Blue band', 'b', 'B']]) + panel(340, 'NIR false color', [['NIR band', 'r', 'R'], ['Red band', 'g', 'G'], ['Green band', 'b', 'B']]));
  };

  F['fig-featurespace'] = () => {
    const r = rng(7); let s = '';
    s += T(80, 18, 'Image space', { a: 'middle', w: 600 });
    const vals = [[21, 24, 30, 40], [35, 26, 28, 33], [28, 39, 5, 8], [4, 7, 9, 27]];
    vals.forEach((row, i) => row.forEach((v, j) => { s += `<rect x="${20 + j * 30}" y="${30 + i * 30}" width="30" height="30" class="${i === 3 && j === 2 ? 'fg-fill-b' : 'fg-cell'}"/>` + T(35 + j * 30, 50 + i * 30, String(v), { a: 'middle', size: 11 }); }));
    s += T(80, 168, 'Band 4 (Red) DN', { a: 'middle', size: 11 }) + T(80, 184, 'highlighted pixel:', { a: 'middle', size: 11 }) + T(80, 200, 'Red 9, NIR 55', { a: 'middle', size: 11, w: 600 });
    const ox = 220, oy = 220, sc = 2.1;
    s += T(ox + 95, 18, 'Feature space', { a: 'middle', w: 600 }) + L(ox, oy, ox + 200, oy, { arrow: true }) + L(ox, oy, ox, 24, { arrow: true });
    s += T(ox + 100, oy + 30, 'Band 4 (Red)', { a: 'middle', size: 11 }) + T(ox - 12, 120, 'Band 5 (NIR)', { a: 'middle', size: 11, rot: -90 });
    const cl = [[7, 65, 3, 10, 'fg-pt-a'], [30, 25, 9, 7, 'fg-pt-b'], [5, 4, 2, 1.5, 'fg-pt-c']];
    cl.forEach(c => { for (let k = 0; k < 14; k++) { const x = c[0] + gauss(r) * c[2], y = c[1] + gauss(r) * c[3]; s += Ci(ox + x * sc, oy - y * sc, 3, c[4]); } });
    s += Ci(ox + 9 * sc, oy - 55 * sc, 5, 'fg-pt-hi') + L(ox + 60, oy - 140, ox + 9 * sc + 6, oy - 55 * sc - 3, { arrow: true, cls: 'fg-ln-b' });
    s += T(ox + 40, 46, 'A', { w: 700 }) + T(ox + 88, oy - 74, 'B', { w: 700 }) + T(ox + 24, oy - 16, 'C', { w: 700 });
    s += L(ox + 206, 120, ox + 236, 120, { arrow: true });
    const cx = 470; s += T(cx + 80, 18, 'Classified image', { a: 'middle', w: 600 });
    const cls = [['a', 'a', 'b', 'b'], ['a', 'b', 'b', 'c'], ['a', 'a', 'c', 'c'], ['b', 'a', 'a', 'c']];
    cls.forEach((row, i) => row.forEach((v, j) => { s += `<rect x="${cx + 20 + j * 30}" y="${30 + i * 30}" width="30" height="30" class="fg-cls-${v}"/>`; }));
    s += T(cx + 20, 168, 'A high NIR / low red', { size: 11 }) + T(cx + 20, 184, 'B mid values', { size: 11 }) + T(cx + 20, 200, 'C low in both bands', { size: 11 });
    return svg(660, 275, 'Image space to feature space to classified image', s);
  };

  F['fig-classtree'] = () => svg(640, 220, 'Three ways of categorising classifiers', [
    R(200, 12, 240, 40, { cls: 'fg-box-a' }), T(320, 37, 'Ways to categorise classifiers', { a: 'middle', w: 600 }),
    ...[[20, 'Type of learning', 'Supervised', 'Unsupervised'], [225, 'Assumptions on data distribution', 'Parametric', 'Non-parametric'], [430, 'Outputs per spatial unit', 'Hard (crisp)', 'Soft (fuzzy)']].map(([x, h, a, b]) =>
      L(320, 52, x + 95, 90, { arrow: true }) + R(x, 92, 190, 40) + T(x + 95, 117, h, { a: 'middle', size: 12, w: 600 }) +
      L(x + 60, 132, x + 45, 168, { arrow: true }) + L(x + 130, 132, x + 145, 168, { arrow: true }) +
      R(x - 5, 170, 98, 34, { cls: 'fg-box-c' }) + T(x + 44, 192, a, { a: 'middle', size: 12 }) + R(x + 97, 170, 98, 34, { cls: 'fg-box-c' }) + T(x + 146, 192, b, { a: 'middle', size: 12 }))
  ].join(''));

  function clusters(r) {
    return [[38, 30, 4, 4, 'water'], [90, 55, 9, 7, 'forest'], [130, 100, 10, 12, 'crop']].map(c => ({ c, pts: Array.from({ length: 16 }, () => [c[0] + gauss(r) * c[2], c[1] + gauss(r) * c[3]]) }));
  }
  function classifierPanel(kind, x0, showTitle) {
    const r = rng(11), cs = clusters(r), oy = 200, W = 190;
    let s = L(x0, oy, x0 + W, oy, { arrow: true }) + L(x0, oy, x0, 20, { arrow: true });
    s += T(x0 + W / 2, oy + 28, 'DN band 4', { a: 'middle', size: 11 }) + T(x0 - 12, 110, 'DN band 3', { a: 'middle', size: 11, rot: -90 });
    const tx = (p) => [x0 + p[0], oy - p[1]];
    cs.forEach((k, i) => k.pts.forEach(p => { const [x, y] = tx(p); s += Ci(x, y, 2.6, 'fg-pt-' + 'abc'[i]); }));
    const unk = [70, 120];
    if (kind === 'par') {
      cs.forEach((k) => { const xs = k.pts.map(p => p[0]), ys = k.pts.map(p => p[1]); const a = tx([Math.min(...xs), Math.max(...ys)]), b = tx([Math.max(...xs), Math.min(...ys)]); s += R(a[0] - 3, a[1] - 3, b[0] - a[0] + 6, b[1] - a[1] + 6, { cls: 'fg-box-open', dash: true, rx: 0 }); });
      const [ux, uy] = tx(unk); s += Ci(ux, uy, 4, 'fg-pt-hi') + T(ux + 8, uy - 6, showTitle ? '? unclassified' : '?', { size: 11 });
    } else if (kind === 'min') {
      const [ux, uy] = tx(unk); s += Ci(ux, uy, 4, 'fg-pt-hi');
      cs.forEach(k => { const [mx, my] = tx([k.c[0], k.c[1]]); s += L(ux, uy, mx, my, { cls: 'fg-ln-b' }) + `<path d="M${mx - 5},${my} h10 M${mx},${my - 5} v10" class="fg-ln" stroke-width="2.5"/>`; });
    } else {
      cs.forEach(k => { const [mx, my] = tx([k.c[0], k.c[1]]); [1, 2, 3].forEach(n => { s += `<ellipse cx="${mx}" cy="${my}" rx="${k.c[2] * n * 1.1}" ry="${k.c[3] * n * 1.1}" class="fg-box-open"/>`; }); });
    }
    if (showTitle) s += T(x0 + W / 2, 14, { par: 'Parallelepiped', min: 'Minimum distance', ml: 'Maximum likelihood' }[kind], { a: 'middle', w: 600 });
    return s;
  }
  F['fig-classifiers'] = () => svg(700, 240, 'Parallelepiped, minimum distance and maximum likelihood classifiers in feature space', classifierPanel('par', 30, true) + classifierPanel('min', 260, true) + classifierPanel('ml', 490, true));
  F['q-parallelepiped'] = () => svg(240, 240, 'Feature space with a classifier drawn (classifier name hidden)', classifierPanel('par', 30, false));
  F['q-mindist'] = () => svg(240, 240, 'Feature space with a classifier drawn (classifier name hidden)', classifierPanel('min', 30, false));
  F['q-ml'] = () => svg(240, 240, 'Feature space with a classifier drawn (classifier name hidden)', classifierPanel('ml', 30, false));

  F['fig-mixed'] = () => {
    let s = ''; const items = [['A', 'small sub-pixel', 'targets'], ['B', 'boundary of', 'discrete classes'], ['C', 'gradual transition', '(continuum)'], ['D', 'contribution from', 'outside the pixel']];
    items.forEach((it, i) => {
      const x = 20 + i * 160, y = 20;
      if (i === 0) { s += `<rect x="${x + 20}" y="${y}" width="100" height="100" class="fg-cls-b"/>`; [[40, 30], [70, 60], [90, 25], [55, 80]].forEach(p => { s += `<rect x="${x + p[0]}" y="${y + p[1]}" width="9" height="9" class="fg-cls-a"/>`; }); }
      if (i === 1) { s += `<rect x="${x + 20}" y="${y}" width="100" height="100" class="fg-cls-b"/><polygon points="${x + 20},${y} ${x + 85},${y} ${x + 50},${y + 100} ${x + 20},${y + 100}" class="fg-cls-c"/>`; }
      if (i === 2) { s += `<defs><linearGradient id="gr${i}" x1="0" x2="1"><stop offset="0" class="fg-stop-a"/><stop offset="1" class="fg-stop-b"/></linearGradient></defs><rect x="${x + 20}" y="${y}" width="100" height="100" fill="url(#gr${i})"/>`; }
      if (i === 3) { s += `<rect x="${x + 5}" y="${y - 10}" width="130" height="120" class="fg-box-open" stroke-dasharray="5 4"/><rect x="${x + 20}" y="${y}" width="100" height="100" class="fg-cls-b"/><rect x="${x + 5}" y="${y + 30}" width="15" height="40" class="fg-cls-c"/>`; s += L(x + 12, y + 50, x + 32, y + 50, { arrow: true }); }
      s += `<rect x="${x + 20}" y="${y}" width="100" height="100" class="fg-box-open"/>`;
      s += T(x + 70, y + 125, it[0], { a: 'middle', w: 700 }) + T(x + 70, y + 143, it[1], { a: 'middle', size: 11 }) + T(x + 70, y + 157, it[2], { a: 'middle', size: 11 });
    });
    return svg(660, 185, 'Four causes of mixed pixels after Foody 2004', s);
  };

  F['fig-ann'] = () => {
    let s = ''; const layers = [[150, 4], [300, 5], [450, 3]]; const pos = layers.map(([x, n]) => Array.from({ length: n }, (_, i) => [x, 40 + (i + 0.5) * (160 / n)]));
    for (let l = 0; l < 2; l++) pos[l].forEach(a => pos[l + 1].forEach(b => { s += L(a[0], a[1], b[0], b[1], { cls: 'fg-ln-thin' }); }));
    pos.forEach(ps => ps.forEach(p => { s += Ci(p[0], p[1], 10, 'fg-node'); }));
    s += T(150, 26, 'Input', { a: 'middle', w: 600 }) + T(300, 26, 'Hidden', { a: 'middle', w: 600 }) + T(450, 26, 'Output', { a: 'middle', w: 600 });
    s += T(20, 110, 'RS discriminating', { size: 11 }) + T(20, 126, 'variables (bands)', { size: 11 });
    ['Class 1', 'Class 2', 'Class n'].forEach((c, i) => { s += T(470, pos[2][i][1] + 4, c, { size: 12 }); });
    s += T(300, 222, 'all neurons linked by weighted connections', { a: 'middle', size: 11 });
    return svg(560, 232, 'Artificial neural network with input, hidden and output layers', s);
  };

  F['fig-dtree'] = () => {
    const box = (x, y, w, t1, t2, cls) => R(x - w / 2, y - 18, w, t2 ? 42 : 30, { cls: cls || 'fg-box', rx: 14 }) + T(x, y + 1, t1, { a: 'middle', size: 12 }) + (t2 ? T(x, y + 17, t2, { a: 'middle', size: 12 }) : '');
    const leaf = (x, y, t) => R(x - 44, y - 16, 88, 30, { cls: t === '?' ? 'fg-box-c' : 'fg-box-a', rx: 4 }) + T(x, y + 4, t, { a: 'middle', size: 12, w: 600 });
    const tf = (x1, y1, x2, y2, lab) => L(x1, y1, x2, y2, { arrow: true }) + T((x1 + x2) / 2 + (x2 > x1 ? 6 : -6), (y1 + y2) / 2, lab, { a: x2 > x1 ? 'start' : 'end', size: 11, cls: 'fg-tx-b' });
    return svg(640, 330, 'Decision tree example after Tso and Mather 2001', [
      leaf(320, 22, 'Input pixel reflectance').replace('class="fg-box-a"', 'class="fg-box"'),
      L(320, 38, 320, 58, { arrow: true }), box(320, 80, 220, 'NIR reflectance > 50% ?'),
      tf(250, 102, 160, 142, 'True'), tf(390, 102, 480, 142, 'False'),
      box(160, 162, 190, 'Red reflectance < 12% ?'), box(480, 162, 200, 'NIR reflectance < 5% ?'),
      tf(110, 184, 80, 226, 'True'), tf(210, 184, 240, 226, 'False'), leaf(80, 244, 'Vegetation'), leaf(240, 244, '?'),
      tf(430, 184, 400, 222, 'True'), tf(540, 184, 580, 226, 'False'), leaf(580, 244, '?'),
      box(400, 242, 180, 'Red reflectance < 10% ?'), tf(350, 264, 330, 296, 'True'), tf(450, 264, 480, 296, 'False'), leaf(320, 312, 'Water'), leaf(490, 312, '?')
    ].join(''));
  };

  F['fig-fuzzy'] = () => {
    const ox = 60, oy = 230, sx = 6, sy = 180; const X = v => ox + v * sx, Y = m => oy - m * sy;
    let s = L(ox, oy, X(92), oy, { arrow: true }) + L(ox, oy, ox, Y(1.12), { arrow: true });
    [0, 24, 30, 36, 55, 60, 70, 90].forEach(v => { s += L(X(v), oy, X(v), oy + 5) + T(X(v), oy + 18, String(v), { a: 'middle', size: 11 }); });
    [0, 0.5, 1].forEach(m => { s += T(ox - 8, Y(m) + 4, String(m), { a: 'end', size: 11 }); });
    s += T(X(45), oy + 38, 'Hypothetical near-infrared brightness value', { a: 'middle', size: 12 }) + T(18, Y(0.5), 'Membership', { a: 'middle', size: 12, rot: -90 });
    s += `<polyline points="${X(0)},${Y(1)} ${X(24)},${Y(1)} ${X(36)},${Y(0)}" class="fg-ln-a" fill="none"/>`;
    s += `<polyline points="${X(24)},${Y(0)} ${X(36)},${Y(1)} ${X(55)},${Y(1)} ${X(70)},${Y(0)}" class="fg-ln-b" fill="none"/>`;
    s += `<polyline points="${X(55)},${Y(0)} ${X(70)},${Y(1)} ${X(90)},${Y(1)}" class="fg-ln-c" fill="none"/>`;
    s += L(X(30), Y(1.1), X(30), oy, { dash: true }) + L(X(60), Y(1.1), X(60), oy, { dash: true });
    s += T(X(12), Y(1) - 8, 'Water', { a: 'middle', size: 12, w: 600 }) + T(X(45), Y(1) - 8, 'Forested wetland', { a: 'middle', size: 12, w: 600 }) + T(X(80), Y(1) - 8, 'Upland forest', { a: 'middle', size: 12, w: 600 });
    s += Ci(X(30), Y(0.5), 4.5, 'fg-pt-hi') + T(X(30) - 8, Y(0.5) - 8, '0.5 / 0.5', { a: 'end', size: 11 });
    s += Ci(X(60), Y(0.667), 4.5, 'fg-pt-hi') + Ci(X(60), Y(0.333), 4.5, 'fg-pt-hi') + T(X(60) + 8, Y(0.667) - 4, '≈0.7 wetland', { size: 11 }) + T(X(60) + 8, Y(0.333) + 14, '≈0.3 upland', { size: 11 });
    s += T(4, oy + 60, 'Hard rules:', { size: 11, cls: 'fg-tx-b', w: 700 }) + T(X(15), oy + 60, '0–30 water', { a: 'middle', size: 11, cls: 'fg-tx-b' }) + T(X(45), oy + 60, '30–60 forested wetland', { a: 'middle', size: 11, cls: 'fg-tx-b' }) + T(X(75), oy + 60, '60–90 upland forest', { a: 'middle', size: 11, cls: 'fg-tx-b' });
    return svg(640, 305, 'Fuzzy membership functions and hard thresholds after Jensen 1996', s);
  };

  F['fig-spatfreq'] = () => {
    const grid = (x0, het) => { let s = ''; const r = rng(het ? 5 : 3); for (let i = 0; i < 9; i++) for (let j = 0; j < 9; j++) { const c = het ? 'abc'[Math.floor(r() * 3)] : (j < 6 ? 'b' : 'c'); s += `<rect x="${x0 + j * 18}" y="${24 + i * 18}" width="18" height="18" class="fg-cls-${c}"/>`; } s += `<rect x="${x0 + 54}" y="${78}" width="54" height="54" class="fg-box-open" stroke-width="3"/><rect x="${x0 + 72}" y="${96}" width="54" height="54" class="fg-box-open" stroke-width="2" stroke-dasharray="4 3"/>`; return s; };
    return svg(620, 230, 'Reference plot of 3 by 3 pixels in low and high spatial frequency images with a one pixel shift', grid(40, false) + T(121, 16, 'Low spatial frequency (homogeneous)', { a: 'middle', size: 12, w: 600 }) + grid(380, true) + T(461, 16, 'High spatial frequency (heterogeneous)', { a: 'middle', size: 12, w: 600 }) + T(310, 214, 'solid = 3×3 reference plot · dashed = same plot shifted ±1 pixel', { a: 'middle', size: 11 }));
  };

  function samplingPanel(kind, x0, title) {
    const r = rng({ rand: 2, strat: 4, sys: 6, non: 8, clus: 10 }[kind]); const W = 120;
    let s = '';
    if (kind === 'strat') s += `<rect x="${x0}" y="20" width="${W}" height="${W}" class="fg-cls-b"/><polygon points="${x0},20 ${x0 + 70},20 ${x0 + 40},${20 + W} ${x0},${20 + W}" class="fg-cls-a"/><polygon points="${x0 + 80},${20 + W} ${x0 + W},${80} ${x0 + W},${20 + W}" class="fg-cls-c"/>`;
    else s += `<rect x="${x0}" y="20" width="${W}" height="${W}" class="fg-cell"/>`;
    const dot = (x, y) => { s += Ci(x0 + x, 20 + y, 3.4, 'fg-pt-hi'); };
    if (kind === 'rand') for (let i = 0; i < 14; i++) dot(6 + r() * 108, 6 + r() * 108);
    if (kind === 'strat') { [[10, 60, 10, 90, 5], [55, 110, 10, 70, 5], [92, 116, 92, 116, 3]].forEach(([a, b, c, d, n]) => { for (let i = 0; i < n; i++) dot(a + r() * (b - a), c + r() * (d - c)); }); }
    if (kind === 'sys') for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) dot(15 + j * 30, 15 + i * 30);
    if (kind === 'non') { for (let k = 1; k < 4; k++) { s += L(x0 + k * 30, 20, x0 + k * 30, 20 + W, { cls: 'fg-ln-thin' }) + L(x0, 20 + k * 30, x0 + W, 20 + k * 30, { cls: 'fg-ln-thin' }); } for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) dot(j * 30 + 5 + r() * 20, i * 30 + 5 + r() * 20); }
    if (kind === 'clus') { [[30, 30], [85, 50], [45, 95]].forEach(([cx, cy]) => { s += `<path d="M${x0 + cx - 6},${20 + cy - 6} l12,12 M${x0 + cx + 6},${20 + cy - 6} l-12,12" class="fg-ln" stroke-width="2"/>`; for (let i = 0; i < 4; i++) dot(cx + (r() - 0.5) * 26, cy + (r() - 0.5) * 26); }); }
    s += `<rect x="${x0}" y="20" width="${W}" height="${W}" class="fg-box-open"/>`;
    if (title) s += T(x0 + W / 2, 160, title, { a: 'middle', size: 12, w: 600 });
    return s;
  }
  F['fig-sampling'] = () => svg(700, 172, 'Five sampling designs', ['rand', 'strat', 'sys', 'non', 'clus'].map((k, i) => samplingPanel(k, 10 + i * 138, ['Simple random', 'Stratified random', 'Systematic', 'Systematic non-aligned', 'Cluster'][i])).join(''));
  F['q-nonaligned'] = () => svg(140, 150, 'A sampling pattern (design name hidden)', samplingPanel('non', 10, ''));
  F['q-cluster'] = () => svg(140, 150, 'A sampling pattern (design name hidden)', samplingPanel('clus', 10, ''));
  F['q-stratified'] = () => svg(140, 150, 'A sampling pattern over three land cover categories (design name hidden)', samplingPanel('strat', 10, ''));
  F['q-systematic'] = () => svg(140, 150, 'A sampling pattern (design name hidden)', samplingPanel('sys', 10, ''));

  F['fig-spectrum'] = () => svg(720, 190, 'Spectrum regions used in optical, thermal and microwave remote sensing (not to scale)', [
    R(20, 50, 90, 40, { cls: 'fg-fill-vis', rx: 0 }), T(65, 75, 'Visible', { a: 'middle', size: 12 }), T(65, 108, '0.4–0.7 µm', { a: 'middle', size: 11 }),
    R(110, 50, 150, 40, { cls: 'fg-fill-c', rx: 0 }), T(185, 75, 'Reflected IR', { a: 'middle', size: 12 }), T(185, 108, '0.7–3 µm', { a: 'middle', size: 11 }),
    R(260, 50, 280, 40, { cls: 'fg-fill-b', rx: 0 }), T(400, 44, 'Thermal (emitted) IR  3–100 µm', { a: 'middle', size: 12 }),
    R(275, 54, 60, 32, { cls: 'fg-fill-a', rx: 3 }), T(305, 75, '3–5', { a: 'middle', size: 12, w: 700 }), R(370, 54, 110, 32, { cls: 'fg-fill-a', rx: 3 }), T(425, 75, '8–14 µm', { a: 'middle', size: 12, w: 700 }),
    T(305, 108, 'fires (night use)', { a: 'middle', size: 11 }), T(425, 108, 'Earth ~300 K', { a: 'middle', size: 11 }),
    R(560, 50, 140, 40, { cls: 'fg-fill-c', rx: 0 }), T(630, 75, 'Microwave / radar', { a: 'middle', size: 12 }), T(630, 108, '1–100 cm', { a: 'middle', size: 11 }),
    P('M20,130 v8 h240 v-8', 'fg-ln'), T(140, 156, 'reflected solar energy', { a: 'middle', size: 12 }),
    P('M260,130 v8 h280 v-8', 'fg-ln'), T(400, 156, 'emitted energy (passive TIR)', { a: 'middle', size: 12 }),
    P('M560,130 v8 h140 v-8', 'fg-ln'), T(630, 156, 'active: own pulse', { a: 'middle', size: 12 }),
    T(360, 184, 'Wavelength increases →   (schematic, not to scale)', { a: 'middle', size: 11 })
  ].join(''));

  F['fig-planck'] = () => {
    const h = 6.626e-34, c = 2.998e8, k = 1.381e-23;
    const B = (lum, T) => { const l = lum * 1e-6; return 1 / (Math.pow(l, 5) * (Math.exp(h * c / (l * k * T)) - 1)); };
    const ox = 60, oy = 220, W = 520, H = 180, lmax = 20; let s = L(ox, oy, ox + W + 10, oy, { arrow: true }) + L(ox, oy, ox, oy - H - 10, { arrow: true });
    [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20].forEach(v => { s += L(ox + v / lmax * W, oy, ox + v / lmax * W, oy + 5) + T(ox + v / lmax * W, oy + 18, String(v), { a: 'middle', size: 11 }); });
    s += T(ox + W / 2, oy + 38, 'Wavelength (µm)', { a: 'middle', size: 12 }) + T(22, oy - H / 2, 'Relative exitance', { a: 'middle', size: 12, rot: -90 });
    [[300, 'fg-ln-a', 9.66, 40], [800, 'fg-ln-b', 3.6225, 14]].forEach(([T0, cls, lm, dy]) => {
      const peak = B(lm, T0); let d = '';
      for (let i = 0; i <= 200; i++) { const l = 0.5 + i * (lmax - 0.5) / 200; const y = oy - B(l, T0) / peak * H; d += (i ? 'L' : 'M') + (ox + l / lmax * W).toFixed(1) + ',' + y.toFixed(1); }
      s += `<path d="${d}" class="${cls}" fill="none"/>` + L(ox + lm / lmax * W, oy, ox + lm / lmax * W, oy - H, { dash: true }) + T(ox + lm / lmax * W + 6, oy - H + dy, `${T0} K: λmax ≈ ${lm.toFixed(2)} µm`, { size: 12, w: 600 });
    });
    s += T(ox + W, oy - H - 4, 'each curve scaled to its own peak', { a: 'end', size: 10 });
    return svg(620, 270, 'Blackbody curves for 300 K and 800 K with Wien peaks', s);
  };

  F['fig-radargeom'] = () => svg(680, 340, 'Side-looking radar geometry', [
    L(20, 270, 660, 270, { cls: 'fg-ln', sw: 2 }),
    `<path d="M60,60 l30,-7 l30,7 l-30,7 z" class="fg-fill-a"/>`, T(90, 36, 'antenna (platform)', { a: 'middle', size: 12 }),
    L(90, 66, 90, 270, { dash: true }), T(96, 262, 'nadir', { size: 11 }),
    L(90, 62, 270, 268, { arrow: true }), L(90, 62, 620, 268, { arrow: true }),
    L(90, 62, 660, 62, { dash: true }), P('M210,62 A120,120 0 0 1 201.6,106', 'fg-ln-b'), T(220, 92, 'γ depression angle', { size: 12, cls: 'fg-tx-b' }),
    P('M90,140 A78,78 0 0 0 140.8,121.2', 'fg-ln-b'), T(98, 168, 'θ look angle', { size: 12, cls: 'fg-tx-b' }),
    T(420, 170, 'slant range (line of sight)', { a: 'middle', size: 12, rot: 21.6 }),
    T(270, 290, 'near range', { a: 'middle', size: 12, w: 600 }), T(620, 290, 'far range', { a: 'middle', size: 12, w: 600 }),
    P('M270,302 H620', 'fg-ln-b', { arrow: true }), T(445, 320, 'ground range — the range (look) direction, at right angles to flight', { a: 'middle', size: 12 }),
    T(20, 336, 'Flight (azimuth) direction: into the page', { size: 11 })
  ].join(''));

  function scatterPanel(kind, x0, title) {
    let s = ''; const gy = 130;
    if (kind === 'spec') { s += L(x0 + 10, gy, x0 + 170, gy, { sw: 2.5 }) + L(x0 + 20, 30, x0 + 90, gy - 2, { arrow: true }) + L(x0 + 90, gy - 2, x0 + 160, 30, { arrow: true, cls: 'fg-ln-b' }) + (title ? T(x0 + 90, gy + 20, 'smooth surface', { a: 'middle', size: 11 }) : ''); }
    if (kind === 'diff') { let d = `M${x0 + 10},${gy}`; for (let i = 0; i < 16; i++) d += ` l5,${i % 2 ? 9 : -9}`; s += P(d + ` L${x0 + 170},${gy}`, 'fg-ln') + L(x0 + 20, 30, x0 + 85, gy - 8, { arrow: true }); [[-60, -70], [-25, -85], [10, -88], [45, -78], [75, -55]].forEach(([dx, dy]) => { s += L(x0 + 88, gy - 10, x0 + 88 + dx * 0.8, gy - 10 + dy * 0.8, { arrow: true, cls: 'fg-ln-b' }); }); s += (title ? T(x0 + 90, gy + 20, 'rough surface', { a: 'middle', size: 11 }) : ''); }
    if (kind === 'double') { s += L(x0 + 10, gy, x0 + 170, gy, { sw: 2.5 }) + L(x0 + 140, gy, x0 + 140, 30, { sw: 2.5 }) + L(x0 + 20, 40, x0 + 100, gy - 2, { arrow: true }) + L(x0 + 100, gy - 2, x0 + 138, 80, { arrow: true }) + L(x0 + 138, 80, x0 + 30, 55, { arrow: true, cls: 'fg-ln-b' }) + (title ? T(x0 + 90, gy + 20, 'two perpendicular surfaces', { a: 'middle', size: 11 }) : ''); }
    if (kind === 'vol') { s += L(x0 + 10, gy, x0 + 170, gy, { sw: 2 }) + L(x0 + 90, gy, x0 + 90, 95, { sw: 3 }); [[70, 75], [90, 62], [110, 75], [80, 90], [102, 90]].forEach(([cx, cy]) => { s += Ci(x0 + cx, cy, 16, 'fg-fill-a'); }); s += L(x0 + 20, 25, x0 + 82, 70, { arrow: true }); [[-55, -45], [-20, -60], [30, -55], [60, -20], [-50, 5]].forEach(([dx, dy]) => { s += L(x0 + 90, 75, x0 + 90 + dx * 0.9, 75 + dy * 0.9, { arrow: true, cls: 'fg-ln-b' }); }); s += (title ? T(x0 + 90, gy + 20, 'canopy / dry snow', { a: 'middle', size: 11 }) : ''); }
    if (title) s += T(x0 + 90, 16, title, { a: 'middle', size: 12, w: 600 });
    return s;
  }
  F['fig-scatter'] = () => svg(740, 170, 'Four radar scattering mechanisms', ['spec', 'diff', 'double', 'vol'].map((k, i) => scatterPanel(k, 5 + i * 183, ['Specular reflection', 'Diffuse scattering', 'Double bounce', 'Volume scattering'][i])).join(''));
  F['q-specular'] = () => svg(185, 160, 'A radar scattering mechanism (name hidden)', scatterPanel('spec', 2, ''));
  F['q-diffuse'] = () => svg(185, 160, 'A radar scattering mechanism (name hidden)', scatterPanel('diff', 2, ''));
  F['q-double'] = () => svg(185, 160, 'A radar scattering mechanism (name hidden)', scatterPanel('double', 2, ''));
  F['q-volume'] = () => svg(185, 160, 'A radar scattering mechanism (name hidden)', scatterPanel('vol', 2, ''));

  F['fig-canopy'] = () => svg(680, 320, 'Sources of radar backscatter from a vegetation canopy and penetration by band', [
    R(40, 40, 330, 60, { cls: 'fg-fill-a', rx: 24 }), T(380, 74, 'canopy', { size: 12 }),
    L(100, 100, 100, 220, { sw: 4 }), L(205, 100, 205, 220, { sw: 4 }), L(310, 100, 310, 220, { sw: 4 }), T(380, 165, 'trunks', { size: 12 }),
    L(20, 220, 400, 220, { sw: 2 }), T(380, 238, 'ground (soil)', { size: 12 }),
    L(70, 20, 70, 60, { arrow: true }), L(78, 60, 78, 20, { arrow: true, cls: 'fg-ln-b' }), T(84, 18, 'σ°c leaves', { size: 12, cls: 'fg-tx-b' }),
    L(140, 20, 140, 214, { arrow: true }), L(148, 214, 148, 20, { arrow: true, cls: 'fg-ln-b' }), T(154, 32, 'σ°s soil', { size: 12, cls: 'fg-tx-b' }),
    L(250, 20, 300, 150, { arrow: true }), L(300, 150, 252, 24, { arrow: true, cls: 'fg-ln-b' }), T(258, 18, 'σ°t trunk', { size: 12, cls: 'fg-tx-b' }),
    L(330, 108, 350, 214, { arrow: true }), L(350, 214, 300, 160, { arrow: true }), L(300, 160, 340, 24, { arrow: true, cls: 'fg-ln-b' }), T(346, 34, 'σ°m multiple', { size: 12, cls: 'fg-tx-b' }),
    T(560, 30, 'Penetration by band', { a: 'middle', size: 12, w: 600 }),
    ...[['X  3 cm', 60], ['C  5.8 cm', 95], ['L  23.5 cm', 165], ['P  30–100 cm', 228]].map(([t, d], i) => L(470 + i * 45, 46, 470 + i * 45, 46 + d, { arrow: true, cls: 'fg-ln-b' }) + T(470 + i * 45, 46 + d + 16, t.split('  ')[0], { a: 'middle', size: 12, w: 700 }) + T(470 + i * 45, 46 + d + 30, t.split('  ')[1], { a: 'middle', size: 10 }))
  ].join(''));

  F['fig-pol'] = () => svg(520, 210, 'Radar polarization combinations', [
    T(310, 20, 'RECEIVED', { a: 'middle', size: 12, w: 600 }), T(240, 44, 'H', { a: 'middle', w: 700 }), T(380, 44, 'V', { a: 'middle', w: 700 }),
    T(60, 125, 'TRANSMITTED', { a: 'middle', size: 12, w: 600, rot: -90 }), T(130, 95, 'H', { a: 'middle', w: 700 }), T(130, 165, 'V', { a: 'middle', w: 700 }),
    R(170, 56, 140, 62, { cls: 'fg-fill-a' }), T(240, 84, 'HH', { a: 'middle', w: 700, size: 16 }), T(240, 104, 'like', { a: 'middle', size: 12 }),
    R(310, 56, 140, 62, { cls: 'fg-fill-b' }), T(380, 84, 'HV', { a: 'middle', w: 700, size: 16 }), T(380, 104, 'cross', { a: 'middle', size: 12 }),
    R(170, 126, 140, 62, { cls: 'fg-fill-b' }), T(240, 154, 'VH', { a: 'middle', w: 700, size: 16 }), T(240, 174, 'cross', { a: 'middle', size: 12 }),
    R(310, 126, 140, 62, { cls: 'fg-fill-a' }), T(380, 154, 'VV', { a: 'middle', w: 700, size: 16 }), T(380, 174, 'like', { a: 'middle', size: 12 }),
    T(260, 204, '1st letter = transmitted · 2nd letter = received', { a: 'middle', size: 11 })
  ].join(''));

  // Radar geometric distortions computed with parallel rays at depression angle γ = 40°.
  function distortPanel(kind, x0, title) {
    const g = 40 * Math.PI / 180, cg = Math.cos(g), sg = Math.sin(g);
    const cfg = { fore: [[40, 0], [109.3, 40], [219.2, 0]], lay: [[60, 0], [88, 60], [216.7, 0]], sha: [[30, 0], [116.6, 50], [145.5, 0]] }[kind];
    const gy = 150, X = x => x0 + x, Y = y => gy - y; let s = '';
    s += L(x0, gy, x0 + 230, gy, { sw: 1.5 });
    if (kind === 'sha') { const xs = cfg[1][0] + cfg[1][1] * cg / sg; s += `<polygon points="${X(cfg[1][0])},${Y(cfg[1][1])} ${X(cfg[2][0])},${Y(0)} ${X(xs)},${Y(0)}" class="fg-shadow"/>`; s += L(X(cfg[1][0]), Y(cfg[1][1]), X(xs), Y(0), { dash: true }); }
    s += `<polygon points="${cfg.map(p => X(p[0]) + ',' + Y(p[1])).join(' ')}" class="fg-fill-c"/>`;
    [0, 1, 2].forEach(i => { const [x, y] = cfg[i]; s += L(X(x) - 70 * cg, Y(y) - 70 * sg, X(x), Y(y), { arrow: true, cls: 'fg-ln-thin' }); });
    ['a', 'b', 'c'].forEach((n, i) => { s += T(X(cfg[i][0]) + (i === 1 ? 0 : 0), Y(cfg[i][1]) + (i === 1 ? -6 : 14), n, { a: 'middle', size: 12, w: 700 }); });
    const sr = cfg.map(([x, y]) => x * cg - y * sg); const mn = Math.min(...sr) - 10, k = 0.9; const iy = gy + 34;
    s += L(x0 + 5, iy, x0 + 225, iy, { sw: 2, cls: 'fg-ln-b' });
    sr.forEach((v, i) => { const px = x0 + 10 + (v - mn) * k; s += L(px, iy - 6, px, iy + 6, { sw: 2 }) + T(px, iy + 20, ['a′', 'b′', 'c′'][i], { a: 'middle', size: 12, w: 700 }); });
    s += T(x0 + 228, iy - 6, 'image', { a: 'end', size: 10 });
    if (title) s += T(x0 + 115, 18, title, { a: 'middle', size: 12, w: 600 });
    s += T(x0 + 6, 40, 'radar ↘', { size: 10 });
    return s;
  }
  F['fig-distort'] = () => svg(740, 220, 'Foreshortening, layover and radar shadow with slant-range image positions', distortPanel('fore', 5, 'Foreshortening') + distortPanel('lay', 252, 'Layover') + distortPanel('sha', 499, 'Shadow'));
  F['q-foreshort'] = () => svg(240, 220, 'A radar geometric distortion with slant-range image positions (name hidden)', distortPanel('fore', 5, ''));
  F['q-layover'] = () => svg(240, 220, 'A radar geometric distortion with slant-range image positions (name hidden)', distortPanel('lay', 5, ''));
  F['q-shadow'] = () => svg(240, 220, 'A radar geometric distortion with slant-range image positions (name hidden)', distortPanel('sha', 5, ''));

  return F;
})();
