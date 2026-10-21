/* Walk Melbourne: a small top-down pixel world. Drawn entirely in code, original art. */
(() => {
'use strict';
const S = window.__site, root = document.getElementById('world');
if (!S || !root) return;
const WORK = window.WORK, ME = window.ME, reduce = S.reduce;
const T = 16, MW = 46, MH = 30;
const MODEC = { work: '#F2F2F2', play: '#9B4DFF', build: '#D4FF3A' }, MODEN = { work: 'Work', play: 'Play', build: 'Build' };
const $ = (s, r = root) => r.querySelector(s);
const sleep = ms => new Promise(r => setTimeout(r, ms));
const rnd = (a, b) => a + Math.random() * (b - a), ri = (a, b) => Math.floor(rnd(a, b + 1)), pick = a => a[Math.floor(Math.random() * a.length)];
const clamp = (v, a, b) => Math.max(a, Math.min(b, v)), lerp = (a, b, t) => a + (b - a) * t;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const FONT = 'ui-monospace, "SF Mono", Menlo, Consolas, monospace';

/* ── Styles ─────────────────────────────────────────────────────────────── */
const css = document.createElement('style');
css.textContent = `
#world{position:relative;height:max(620px,calc(100svh - 50px));overflow:hidden;background:#07070a;user-select:none;-webkit-user-select:none;touch-action:none;outline:none}
#world{font-family:ui-monospace,'SF Mono',Menlo,Consolas,monospace}
#world button{font-family:inherit}
#world canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.wh{position:absolute;left:var(--pad);right:var(--pad);top:14px;display:flex;justify-content:space-between;gap:12px;align-items:flex-start;z-index:5;pointer-events:none}
.wobj{font-size:12.5px;line-height:1.55;background:rgba(0,0,0,.66);border:1px solid var(--rule);border-radius:12px;padding:9px 13px 8px;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}
.wobj b{display:block;font-weight:500;margin-bottom:2px}
.wobj span{display:block;color:var(--mid)}
.wobj span.ok{color:var(--ink)}
.wobj span.ok::before{content:"[x] "}
.wobj span::before{content:"[ ] ";color:var(--mid)}
.wh .tog{pointer-events:auto;background:rgba(0,0,0,.66)}
.whint{position:absolute;left:50%;transform:translateX(-50%);bottom:calc(var(--pad) + 6px);z-index:5;font-size:12.5px;background:rgba(0,0,0,.7);border:1px solid var(--rule);border-radius:999px;padding:6px 14px 5px;pointer-events:none;opacity:0;transition:opacity .2s ease}
.whint.on{opacity:1}
.wbox{position:absolute;left:50%;transform:translateX(-50%);bottom:var(--pad);width:min(760px,calc(100% - 2 * var(--pad)));z-index:8;background:rgba(0,0,0,.92);border:2px solid #F2F2F2;border-radius:12px;padding:16px 22px 18px;min-height:86px;font-size:clamp(15px,1.5vw,18px);line-height:1.4;cursor:pointer}
.wbox .nx{position:absolute;right:16px;bottom:10px;font-size:11px;animation:wnx .8s ease-in-out infinite}
@keyframes wnx{50%{transform:translateY(3px)}}
.wbox b{font-weight:500;background:#fff;color:#000;padding:0 5px}
.wmenu{position:absolute;inset:0;z-index:9;display:grid;place-items:center;padding:0 var(--pad);background:rgba(0,0,0,.62);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}
.wm{width:min(560px,100%);max-height:88%;overflow:auto;background:#050507;border:2px solid #F2F2F2;border-radius:14px;padding:18px 18px 16px}
.wm h3{font-weight:500;font-size:clamp(22px,3vw,30px);letter-spacing:-.02em;line-height:1;margin-bottom:8px}
.wm p{color:var(--mid);font-size:13.5px;line-height:1.45;margin-bottom:14px}
.wl{display:grid;gap:6px}
.wl button,.wc button{display:flex;align-items:center;gap:10px;text-align:left;border:1px solid var(--rule);border-radius:10px;padding:10px 13px 9px;font-size:14.5px;line-height:1.25;width:100%;color:var(--ink);transition:background-color .15s ease,color .15s ease,border-color .15s ease}
.wl button small,.wc button small{display:block;font-size:12px;opacity:.6;margin-top:2px}
.wl button .dot,.wc button .dot{width:9px;height:9px;border-radius:2px;flex:none;background:var(--tc,#fff)}
.wl button.sel,.wc button.sel,.wl button:hover,.wc button:hover{background:#F2F2F2;color:#000;border-color:#F2F2F2}
.wl button .ar{margin-left:auto;opacity:.5}
.wbat{position:absolute;inset:0;z-index:7;pointer-events:none}
.wbat .bi{position:absolute;background:rgba(0,0,0,.78);border:2px solid #F2F2F2;border-radius:12px;padding:9px 13px 10px;min-width:min(240px,46%);font-size:13px;line-height:1.3}
.wbat .bi b{font-weight:500;font-size:15px;display:block}
.wbat .bi small{display:block;color:var(--mid);margin-top:5px;font-size:11.5px}
.wbat .hp{height:8px;background:#222;border-radius:4px;margin-top:6px;overflow:hidden}
.wbat .hp i{display:block;height:100%;width:100%;background:#fff;transition:width .7s cubic-bezier(.2,.8,.2,1),background-color .3s ease}
.wbat .hp i.mid{background:#9a9a9a}.wbat .hp i.low{background:repeating-linear-gradient(90deg,#888 0 4px,#222 4px 8px)}
.wbat .bf{left:var(--pad);top:60px}
.wbat .bm{right:var(--pad);top:46%}
.wc{position:absolute;left:50%;transform:translateX(-50%);bottom:var(--pad);width:min(760px,calc(100% - 2 * var(--pad)));z-index:8;background:rgba(0,0,0,.94);border:2px solid #F2F2F2;border-radius:12px;padding:12px;pointer-events:auto}
.wc .q{font-size:13px;color:var(--mid);margin:0 4px 9px}
.wc .gr{display:grid;grid-template-columns:1fr 1fr;gap:6px}
.wc .gr.c3{grid-template-columns:repeat(3,1fr)}
.wc button{padding:10px 12px 9px;font-size:14px}
.wflash{position:absolute;inset:0;z-index:20;pointer-events:none;background:repeating-linear-gradient(0deg,#fff 0 12.5%,#000 12.5% 25%);opacity:0}
.wflash.go{animation:wfl .7s steps(7) forwards}
@keyframes wfl{0%{opacity:0;clip-path:inset(0 100% 0 0)}30%{opacity:1}100%{opacity:1;clip-path:inset(0 0 0 0)}}
.wfade{position:absolute;inset:0;z-index:19;pointer-events:none;background:#000;opacity:0;transition:opacity .35s ease}
.wpad{position:absolute;left:var(--pad);bottom:var(--pad);z-index:6;display:none;grid-template-columns:repeat(3,52px);grid-template-rows:repeat(3,52px);gap:4px;touch-action:none}
.wpad button{border:1px solid var(--rule);border-radius:12px;background:rgba(0,0,0,.6);font-size:18px;color:var(--ink);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);touch-action:none}
.wpad button:active{background:#F2F2F2;color:#000}
.wA{position:absolute;right:var(--pad);bottom:calc(var(--pad) + 40px);z-index:6;display:none;width:68px;height:68px;border-radius:50%;border:2px solid #fff;background:rgba(0,0,0,.6);color:#fff;font-weight:600;font-size:18px;touch-action:none}
.wA:active{background:#fff;color:#000}
.wcoarse .wpad{display:grid}.wcoarse .wA{display:block}
.wcoarse .whint{display:none}
@media(max-width:820px){.wobj{font-size:11.5px;padding:7px 10px 6px}.wbat .bf{top:64px}.wbat .bm{top:auto;bottom:230px;right:var(--pad)}}
`;
document.head.appendChild(css);

/* ── DOM ─────────────────────────────────────────────────────────────────── */
root.setAttribute('tabindex', '-1');
root.innerHTML = `<canvas id="wc"></canvas>
<div class="wh"><div class="wobj" id="wObj"></div><button type="button" class="tog" id="wSkip">Skip to the work</button></div>
<div class="wbat" id="wBat" hidden><div class="bi bf"><b id="bfN"></b><div class="hp"><i id="bfH"></i></div><small id="bfW"></small></div><div class="bi bm"><b>Ebony</b><div class="hp"><i id="bmH"></i></div><small id="bmS"></small></div></div>
<div class="whint" id="wHint">space · talk</div>
<div class="wbox" id="wBox" hidden><span id="wTxt"></span><span class="nx" id="wNx">▼</span></div>
<div class="wc" id="wCmd" hidden></div>
<div class="wmenu" id="wMenu" hidden></div>
<div class="wpad" id="wPad"><span></span><button type="button" data-d="up" aria-label="Up">▲</button><span></span><button type="button" data-d="left" aria-label="Left">◀</button><span></span><button type="button" data-d="right" aria-label="Right">▶</button><span></span><button type="button" data-d="down" aria-label="Down">▼</button><span></span></div>
<button type="button" class="wA" id="wA" aria-label="Action">A</button>
<div class="wflash" id="wFlash"></div><div class="wfade" id="wFade"></div>`;
const cv = $('#wc'), out = cv.getContext('2d'), lo = document.createElement('canvas'), ctx = lo.getContext('2d');
if (matchMedia('(pointer:coarse)').matches || innerWidth <= 820) root.classList.add('wcoarse');

/* ── 1-bit pixel art ─────────────────────────────────────────────────────────
   Two colours only. Everything is drawn on a small canvas, then scaled up with no smoothing. */
const INK = '#f4f4ef', BG = '#050508';
const mk = (w, h, fn) => { const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d'); g.imageSmoothingEnabled = false; fn(g, w, h); return c; };
const W_ = (g, x, y, w, h) => { g.fillStyle = INK; g.fillRect(x, y, w, h); };
const K_ = (g, x, y, w, h) => { g.fillStyle = BG; g.fillRect(x, y, w, h); };
const disc = (g, cx, cy, r, c) => { g.fillStyle = c || INK; for (let y = -r; y <= r; y++) { const w = Math.floor(Math.sqrt(r * r - y * y) + .5); g.fillRect(cx - w, cy + y, w * 2 + 1, 1); } };
const ring = (g, cx, cy, rx, ry, step) => { g.fillStyle = INK; const n = 140; for (let i = 0; i < n; i++) { const a = i / n * Math.PI * 2; if (step && i % step) continue; g.fillRect(Math.round(cx + Math.cos(a) * rx), Math.round(cy + Math.sin(a) * ry), 1, 1); } };
// patterns: fill a rect with white pixels in a repeating pattern
function pat(g, x, y, w, h, kind, ink) {
  g.fillStyle = ink || INK;
  for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) {
    const a = x + i, b = y + j; let on = false;
    if (kind === 'solid') on = true;
    else if (kind === 'checker') on = (a + b) & 1;
    else if (kind === 'dots') on = !(a & 1) && !(b & 1);
    else if (kind === 'dense') on = ((a + b) & 1) || (!(a & 1) && !(b & 1));
    else if (kind === 'hline') on = !(b & 1);
    else if (kind === 'vline') on = !(a & 1);
    else if (kind === 'diag') on = ((a + b) & 3) === 0;
    if (on) g.fillRect(a, b, 1, 1);
  }
}

/* 3×5 pixel font */
const GLY = {
  A: ['010', '101', '111', '101', '101'], B: ['110', '101', '110', '101', '110'], C: ['011', '100', '100', '100', '011'], D: ['110', '101', '101', '101', '110'], E: ['111', '100', '110', '100', '111'], F: ['111', '100', '110', '100', '100'], G: ['011', '100', '101', '101', '011'], H: ['101', '101', '111', '101', '101'], I: ['111', '010', '010', '010', '111'], J: ['001', '001', '001', '101', '010'], K: ['101', '101', '110', '101', '101'], L: ['100', '100', '100', '100', '111'], M: ['101', '111', '111', '101', '101'], N: ['110', '101', '101', '101', '101'], O: ['010', '101', '101', '101', '010'], P: ['110', '101', '110', '100', '100'], Q: ['010', '101', '101', '011', '001'], R: ['110', '101', '110', '101', '101'], S: ['011', '100', '010', '001', '110'], T: ['111', '010', '010', '010', '010'], U: ['101', '101', '101', '101', '111'], V: ['101', '101', '101', '101', '010'], W: ['101', '101', '111', '111', '101'], X: ['101', '101', '010', '101', '101'], Y: ['101', '101', '010', '010', '010'], Z: ['111', '001', '010', '100', '111'],
  0: ['111', '101', '101', '101', '111'], 1: ['010', '110', '010', '010', '111'], 2: ['110', '001', '010', '100', '111'], 3: ['110', '001', '010', '001', '110'], 4: ['101', '101', '111', '001', '001'], 5: ['111', '100', '110', '001', '110'], 6: ['011', '100', '111', '101', '111'], 7: ['111', '001', '010', '010', '010'], 8: ['111', '101', '111', '101', '111'], 9: ['111', '101', '111', '001', '110'],
  '!': ['010', '010', '010', '000', '010'], '?': ['110', '001', '010', '000', '010'], '.': ['000', '000', '000', '000', '010'], ',': ['000', '000', '000', '010', '100'], '-': ['000', '000', '111', '000', '000'], '+': ['000', '010', '111', '010', '000'], ':': ['000', '010', '000', '010', '000'], '/': ['001', '001', '010', '100', '100'], '$': ['011', '110', '010', '011', '110'], '*': ['000', '101', '010', '101', '000'], '#': ['101', '111', '101', '111', '101'], '%': ['101', '001', '010', '100', '101'], '&': ['010', '101', '010', '101', '011'], '@': ['010', '101', '111', '100', '011'], "'": ['010', '010', '000', '000', '000']
};
const txtW = (s, k) => String(s).length * 4 * k - k;
function ptxt(g, s, x, y, k, align, ink) {
  s = String(s).toUpperCase(); k = k || 1; const w = txtW(s, k); if (align === 'center') x -= Math.floor(w / 2); else if (align === 'right') x -= w;
  g.fillStyle = ink || INK;
  for (let i = 0; i < s.length; i++) { const gl = GLY[s[i]]; if (!gl) continue; for (let r = 0; r < 5; r++) for (let c = 0; c < 3; c++) if (gl[r][c] === '1') g.fillRect(x + i * 4 * k + c * k, y + r * k, k, k); }
  return w;
}
const ARR = { left: ['00100', '01000', '11111', '01000', '00100'], right: ['00100', '00010', '11111', '00010', '00100'], up: ['00100', '01110', '10101', '00100', '00100'], down: ['00100', '00100', '10101', '01110', '00100'] };
function arrow(g, dir, cx, cy, ink) { g.fillStyle = ink || INK; ARR[dir].forEach((row, r) => { for (let c = 0; c < 5; c++) if (row[c] === '1') g.fillRect(cx - 2 + c, cy - 2 + r, 1, 1); }); }

/* People: 16×20, white shapes on black. Hair, shirt and props tell them apart. */
function drawPerson(g, dir, fr, o) {
  const W = (x, y, w, h) => W_(g, x, y, w, h), K = (x, y, w, h) => K_(g, x, y, w, h);
  const side = dir === 'left' || dir === 'right', fl = dir === 'left' ? -1 : 1, back = dir === 'up';
  const bob = fr === 1 ? -1 : 0, lA = fr === 1 ? 2 : 0, lB = fr === 2 ? 2 : 0;
  const bw = o.wide ? 10 : 8, bx = o.wide ? 3 : 4;
  // legs
  if (side) { W(6, 17, 3, 3 - lA); W(8, 17, 3, 3 - lB); K(8, 17, 1, 3); } else { W(5, 17, 3, 3 - lA); W(9, 17, 3, 3 - lB); }
  // body
  const ty = 12 + bob;
  if (o.torso === 'solid') W(bx, ty, bw, 6);
  else if (o.torso === 'dark') { W(bx, ty, bw, 6); K(bx + 1, ty + 1, bw - 2, 4); }
  else if (o.torso === 'checker') { W(bx, ty, bw, 6); for (let j = 1; j < 5; j++) for (let i = 1; i < bw - 1; i++) if (((i + j) & 1)) K(bx + i, ty + j, 1, 1); }
  else if (o.torso === 'stripe') { W(bx, ty, bw, 6); for (let j = 1; j < 5; j += 2) K(bx + 1, ty + j, bw - 2, 1); }
  if (side) { W(7 + fl * 1, ty + 1, 3, 4); K(8 + fl * 1, ty + 2, 1, 2); } else { W(bx - 1, ty + 1, 1, 5); W(bx + bw, ty + 1, 1, 5); }
  if (o.extra === 'tie' && !back && !side) { W(7, ty, 2, 5); K(7, ty + 3, 2, 1); }
  if (o.extra === 'apron' && !back) { W(bx + 1, ty + 3, bw - 2, 3); K(bx + 3, ty + 4, bw - 6, 1); }
  if (o.extra === 'guitar') { disc(g, side ? 8 : 10, ty + 5, 3); disc(g, side ? 8 : 10, ty + 5, 1, BG); for (let i = 0; i < 8; i++) W(side ? 9 + i * fl : 11 + i, ty + 3 - i, 1, 1); }
  if (o.clip && !back) { W(11, ty + 1, 4, 6); K(12, ty + 2, 2, 4); W(12, ty + 3, 2, 1); }
  // head
  const hy = 3 + bob;
  const hairBlock = (x, y, w, h) => W(x, y + bob, w, h);
  const fx = side ? (fl > 0 ? 6 : 4) : 5;
  const face = () => { W(fx, 8 + bob, 6, 5); };
  const eyes = () => { if (back) return; if (side) { K(fl > 0 ? 10 : 5, 9 + bob, 1, 2); W(fl > 0 ? 11 : 4, 10 + bob, 1, 1); } else { K(6, 9 + bob, 1, 2); K(9, 9 + bob, 1, 2); } if (o.shades) { if (side) K(fl > 0 ? 8 : 4, 9 + bob, 3, 2); else { K(5, 9 + bob, 2, 2); K(9, 9 + bob, 2, 2); K(7, 9 + bob, 2, 1); } } if (o.specs && !side) { W(5, 8 + bob, 1, 1); K(6, 9 + bob, 1, 2); } };
  const hair = o.hair;
  if (hair === 'curly') {
    const sh = side ? -fl : 0;
    [[5, 5, 3], [8, 3, 3], [11, 5, 3], [8, 6, 4], [3, 9, 2], [13, 9, 2]].forEach(([cx, cy, r]) => disc(g, cx + sh, cy + bob, r));
    if (back || side) disc(g, 8 + sh, 9 + bob, 5);
    [[6, 3], [10, 4], [4, 6], [12, 6], [8, 5], [5, 9], [11, 9], [3, 10], [13, 10], [8, 2]].forEach(([cx, cy]) => K(cx + sh, cy + bob, 1, 1));
    if (!back) { face(); K(fx, 7 + bob, 6, 1); }
  } else if (hair === 'short') { hairBlock(5, hy, 6, 4); if (back) hairBlock(5, hy, 6, 10); else { face(); K(fx, 7 + bob, 6, 1); } }
  else if (hair === 'bun') { hairBlock(5, hy, 6, 4); disc(g, 8, 2 + bob, 2); if (back) hairBlock(5, hy, 6, 10); else { face(); K(fx, 7 + bob, 6, 1); } }
  else if (hair === 'cap') { hairBlock(5, hy - 1, 6, 4); hairBlock(side ? (fl > 0 ? 5 : 3) : 4, 6, 8, 1); if (back) hairBlock(5, hy - 1, 6, 11); else { face(); K(fx, 7 + bob, 6, 1); } }
  else if (hair === 'beanie') { hairBlock(5, hy - 1, 6, 5); K(5, 5 + bob, 6, 1); W(7, 1 + bob, 2, 1); if (back) hairBlock(5, hy - 1, 6, 11); else { face(); K(fx, 8 + bob, 6, 1); } }
  else { hairBlock(5, hy, 6, 10); if (!back) { K(5, 7 + bob, 6, 1); } }
  eyes();
}
function makePerson(o) {
  const out = {};
  ['up', 'down', 'left', 'right'].forEach(d => { out[d] = [0, 1, 2].map(f => mk(16, 20, g => drawPerson(g, d, f, o))); });
  return out;
}
const PAL = {
  me: { hair: 'curly', torso: 'checker' },
  barista: { hair: 'bun', torso: 'dark', extra: 'apron' },
  recA: { hair: 'short', torso: 'dark', extra: 'tie', clip: 1 },
  recB: { hair: 'bun', torso: 'dark', extra: 'tie', specs: 1 },
  boss: { hair: 'short', torso: 'dark', extra: 'tie', specs: 1, wide: 1 },
  busker: { hair: 'beanie', torso: 'stripe', extra: 'guitar' },
  bouncer: { hair: 'none', torso: 'dark', wide: 1, shades: 1 },
  usher: { hair: 'cap', torso: 'dark', extra: 'tie' },
  p1: { hair: 'short', torso: 'stripe' }, p2: { hair: 'bun', torso: 'solid' }, p3: { hair: 'cap', torso: 'checker' }, p4: { hair: 'curly', torso: 'dark' }
};
const SPR = {}; Object.keys(PAL).forEach(k => SPR[k] = makePerson(PAL[k]));

/* Monsters: 48×48 */
const BLOB = {
  scope: mk(48, 48, g => {
    for (let i = 0; i < 16; i++) { const a = i / 16 * Math.PI * 2, r = i % 2 ? 19 : 22; disc(g, Math.round(24 + Math.cos(a) * r), Math.round(26 + Math.sin(a) * r), 3); }
    disc(g, 24, 26, 17); pat(g, 10, 12, 28, 28, 'checker'); disc(g, 24, 26, 15, INK); disc(g, 24, 26, 14, BG); pat(g, 12, 14, 24, 24, 'dots');
    K_(g, 14, 20, 8, 8); K_(g, 26, 20, 8, 8); W_(g, 16, 22, 4, 4); W_(g, 28, 22, 4, 4); K_(g, 17, 23, 2, 2); K_(g, 29, 23, 2, 2);
    for (let i = 0; i < 7; i++) W_(g, 15 + i * 3, 33 + (i & 1) * 2, 3, 1);
    [[4, 8], [41, 10], [40, 40], [5, 38]].forEach(([x, y]) => { W_(g, x, y + 2, 5, 1); W_(g, x + 2, y, 1, 5); });
  }),
  feedback: mk(48, 48, g => {
    W_(g, 3, 3, 42, 28); K_(g, 5, 5, 38, 24);
    for (let i = 0; i < 9; i++) { W_(g, 10, 31 + i, 9 - i, 1); K_(g, 11, 31 + i, Math.max(0, 7 - i), 1); }
    K_(g, 11, 30, 7, 1);
    ptxt(g, 'POP', 6, 11, 3); W_(g, 41, 1, 1, 3); W_(g, 40, 2, 3, 1);
    [[8, 40], [34, 38], [40, 44]].forEach(([x, y]) => W_(g, x, y, 2, 2));
  }),
  spec: mk(48, 48, g => {
    disc(g, 24, 24, 21); disc(g, 24, 24, 19, BG); disc(g, 24, 24, 17); pat(g, 5, 5, 38, 38, 'dots', BG); disc(g, 24, 24, 13, BG);
    ptxt(g, '$', 18, 14, 4);
    [[1, 2], [40, 3], [41, 39], [1, 40]].forEach(([x, y]) => { W_(g, x, y + 2, 5, 1); W_(g, x + 2, y, 1, 5); });
  })
};

/* ── The map ─────────────────────────────────────────────────────────────── */
// tile codes: 0 footpath, 1 road, 2 tram track, 3 grass, 4 long grass, 5 water, 6 plaza
const tiles = Array.from({ length: MH }, () => Array(MW).fill(0));
const fill = (t, x, y, w, h) => { for (let j = y; j < y + h; j++) for (let i = x; i < x + w; i++) if (tiles[j] && tiles[j][i] !== undefined) tiles[j][i] = t; };
fill(1, 22, 0, 2, MH); fill(1, 0, 11, MW, 3); fill(2, 0, 12, MW, 1);
fill(3, 1, 23, 19, 5); fill(4, 3, 24, 6, 3); fill(4, 12, 25, 6, 2);
fill(6, 25, 22, 20, 6); fill(4, 28, 23, 4, 2); fill(4, 38, 24, 4, 2);
fill(5, 0, 28, MW, 2);
const solid = Array.from({ length: MH }, () => Array(MW).fill(false));
const BLD = [
  { id: 'studio', x: 3, y: 2, w: 8, h: 6, door: [6, 7], name: 'STUDIO', acc: '#F2F2F2', tag: 'WORK' },
  { id: 'cafe', x: 13, y: 3, w: 6, h: 5, door: null, name: 'CAFE', acc: '#ff9d4d' },
  { id: 'station', x: 28, y: 1, w: 14, h: 7, door: [34, 7], name: 'FLINDERS ST', acc: '#d9a82b', special: 'station' },
  { id: 'home', x: 3, y: 16, w: 7, h: 6, door: [6, 21], name: 'HOME', acc: '#D4FF3A', tag: 'BUILD' },
  { id: 'laneway', x: 14, y: 15, w: 6, h: 7, door: null, name: '', acc: '#9B4DFF', special: 'graffiti' },
  { id: 'cinema', x: 26, y: 15, w: 7, h: 6, door: [29, 20], name: 'PICTURE HOUSE', acc: '#ff5d7a' },
  { id: 'venue', x: 36, y: 15, w: 8, h: 6, door: [39, 20], name: 'LANEWAY ROOM', acc: '#9B4DFF', tag: 'PLAY' }
];
BLD.forEach(b => { for (let j = b.y; j < b.y + b.h; j++) for (let i = b.x; i < b.x + b.w; i++) { tiles[j][i] = 0; solid[j][i] = !(b.door && b.door[0] === i && b.door[1] === j); } });
const TREES = [[1, 9], [12, 9], [20, 9], [43, 9], [21, 15], [1, 14], [12, 14], [34, 10], [37, 9], [1, 23], [10, 23], [19, 23], [20, 26], [25, 23], [33, 26], [44, 22], [36, 26], [11, 26], [44, 14], [24, 14]];
TREES.forEach(([x, y]) => { if (tiles[y][x] !== 1 && tiles[y][x] !== 2) solid[y][x] = true; });
for (let x = 0; x < MW; x++) { if (tiles[28][x] === 5) solid[28][x] = solid[29][x] = true; }
const SIGNS = [{ x: 25, y: 10, id: 'tram' }];
SIGNS.forEach(s => solid[s.y][s.x] = true);
// make sure the start area and tree squares are clear of tall-grass encounters
const hash = (a, b, c) => { let h = (a * 374761393 + b * 668265263 + c * 2147483647) | 0; h = (h ^ (h >> 13)) * 1274126177; return ((h ^ (h >> 16)) >>> 0) / 4294967295; };

/* ── Actors ──────────────────────────────────────────────────────────────── */
class Actor {
  constructor(o) { Object.assign(this, { dir: 'down', moving: false, p: 0, alt: false, fx: o.x, fy: o.y, tx: o.x, ty: o.y }, o); }
  get px() { return lerp(this.fx, this.tx, this.p); } get py() { return lerp(this.fy, this.ty, this.p); }
}
const DV = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] };
const me = new Actor({ x: 20, y: 10, dir: 'right', spr: 'me', me: true });
const NPCS = [
  new Actor({ id: 'barista', x: 16, y: 8, dir: 'down', spr: 'barista' }),
  new Actor({ id: 'recA', x: 10, y: 10, dir: 'right', spr: 'recA', trainer: 'recA', sight: 5 }),
  new Actor({ id: 'recB', x: 31, y: 14, dir: 'left', spr: 'recB', trainer: 'recB', sight: 5 }),
  new Actor({ id: 'boss', x: 34, y: 8, dir: 'down', spr: 'boss', trainer: 'boss', sight: 0 }),
  new Actor({ id: 'busker', x: 27, y: 9, dir: 'down', spr: 'busker' }),
  new Actor({ id: 'bouncer', x: 41, y: 21, dir: 'left', spr: 'bouncer' }),
  new Actor({ id: 'usher', x: 28, y: 21, dir: 'up', spr: 'usher' }),
  new Actor({ id: 'p1', x: 17, y: 14, dir: 'right', spr: 'p1' }),
  new Actor({ id: 'p2', x: 24, y: 21, dir: 'up', spr: 'p2' }),
  new Actor({ id: 'p3', x: 8, y: 22, dir: 'right', spr: 'p3' }),
  new Actor({ id: 'p4', x: 12, y: 8, dir: 'down', spr: 'p4' })
];
const npcAt = (x, y) => NPCS.find(n => !n.gone && ((n.tx === x && n.ty === y) || (n.fx === x && n.fy === y && n.moving)));
const walkable = (x, y) => x >= 0 && y >= 0 && x < MW && y < MH && !solid[y][x] && !npcAt(x, y);

/* ── Game state ──────────────────────────────────────────────────────────── */
const G = { mode: 'walk', beat: { recA: false, recB: false, boss: false }, gig: false, film: false, coffee: 1, gotCoffee: false, conf: 80, maxConf: 80, steps: 0, offer: false, intro: false };
let dl = null, pk = null, running = false, last = 0, cam = { x: 0, y: 0 }, view = { w: 0, h: 0, s: 3, d: 1, lw: 1, lh: 1 }, foeAnim = { hit: 0 }, battleCtx = null, rhythm = null, tram = { x: -30 };
const keysHeld = []; // direction stack
let queued = null;

/* ── Layout ──────────────────────────────────────────────────────────────── */
function fit() {
  const r = root.getBoundingClientRect(); view.d = Math.min(2, devicePixelRatio || 1); view.w = r.width; view.h = r.height;
  view.s = r.width >= 1000 ? 3 : 2; view.lw = Math.ceil(r.width / view.s); view.lh = Math.ceil(r.height / view.s);
  lo.width = view.lw; lo.height = view.lh; cv.width = Math.round(r.width * view.d); cv.height = Math.round(r.height * view.d); ctx.imageSmoothingEnabled = false;
}
addEventListener('resize', () => { if (running) fit(); });

/* ── Objectives / HUD ────────────────────────────────────────────────────── */
function hud() {
  const rec = (G.beat.recA ? 1 : 0) + (G.beat.recB ? 1 : 0);
  const L = [[rec >= 2, `Win two screening calls (${rec}/2)`], [G.gig, 'Catch a gig'], [G.film, 'Catch a film'], [G.beat.boss, 'Meet the hiring manager']];
  $('#wObj').innerHTML = '<b>Find a job</b>' + L.map(([ok, t]) => `<span class="${ok ? 'ok' : ''}">${t}</span>`).join('');
}

/* ── Dialogue ────────────────────────────────────────────────────────────── */
const box = $('#wBox'), txt = $('#wTxt'), nx = $('#wNx');
function typeLine(text) {
  return new Promise(res => {
    box.hidden = false; nx.style.visibility = 'hidden'; txt.innerHTML = '';
    const plain = text.replace(/<[^>]+>/g, ''); let i = 0, iv = null;
    const d = { done: false, res, finish() { clearInterval(iv); txt.innerHTML = text; nx.style.visibility = 'visible'; d.done = true; } };
    dl = d; if (reduce) { d.finish(); return; }
    iv = setInterval(() => { i++; if (i >= plain.length) { d.finish(); return; } let n = 0, out = ''; for (const ch of text.split(/(<[^>]+>)/)) { if (ch[0] === '<') out += ch; else { const take = Math.min(ch.length, i - n); out += ch.slice(0, Math.max(0, take)); n += ch.length; } } txt.innerHTML = out; }, 20);
  });
}
async function say(lines) { lines = [].concat(lines); for (const l of lines) { await typeLine(l); dl = null; } box.hidden = true; }
function pressA() { if (!dl) return false; if (!dl.done) dl.finish(); else { const r = dl.res; dl = null; r(); } return true; }
box.addEventListener('click', pressA);

/* ── Pick lists (menus and battle commands share this) ───────────────────── */
function choose(container, items, cols) {
  return new Promise(res => {
    container.innerHTML = ''; const btns = [];
    items.forEach((it, i) => { const b = document.createElement('button'); b.type = 'button'; b.innerHTML = it.html; b.addEventListener('mouseenter', () => sel(i)); b.addEventListener('click', () => done(i)); container.appendChild(b); btns.push(b); });
    let s = 0; const sel = i => { s = i; btns.forEach((b, k) => b.classList.toggle('sel', k === i)); };
    const done = i => { pk = null; res(items[i]); };
    pk = { move(dx, dy) { if (cols > 1) { let n = s + dx + dy * cols; if (n >= 0 && n < items.length) sel(n); } else sel(clamp(s + dy + dx, 0, items.length - 1)); }, enter() { done(s); }, cancel() { const i = items.findIndex(x => x.cancel); if (i >= 0) done(i); } };
    sel(0);
  });
}

/* ── Menus for places ────────────────────────────────────────────────────── */
const menuEl = $('#wMenu');
const row = (label, sub, color, arrow) => `<span class="dot"></span><span>${label}${sub ? `<small>${esc(sub)}</small>` : ''}</span>${arrow ? '<span class="ar">↗</span>' : ''}`;
async function menu(title, text, items) {
  G.mode = 'menu'; menuEl.hidden = false;
  menuEl.innerHTML = `<div class="wm"><h3>${esc(title)}</h3><p>${text}</p><div class="wl" id="wml"></div></div>`;
  items.push({ html: row('Leave', '', '#666'), cancel: true, key: 'leave' });
  const it = await choose($('#wml'), items, 1);
  menuEl.hidden = true; G.mode = 'walk';
  if (it.fn) await it.fn();
}
const projItems = mode => WORK.filter(p => p.mode === mode).map(p => ({ html: row(esc(p.title), p.discipline + ' · ' + p.client, p.color), fn: () => { S.openProject(p.id, null); } }));
async function enterPlace(id) {
  fadeFlash();
  if (id === 'studio') await menu('STUDIO', 'Client work. Pick a project to open it.', projItems('work'));
  else if (id === 'home') await menu('HOME', 'Things I designed <i>and</i> built. HTML, CSS and JS: enough to ship Rounds.', projItems('build'));
  else if (id === 'venue') {
    const items = projItems('play');
    items.push({ html: row('Tonight&rsquo;s playlist', 'open on spotify', '#1DB954', true), fn: () => window.open('https://open.spotify.com/playlist/0EG90swSbEAmwCbCSSAccm', '_blank', 'noopener') });
    items.push({ html: row('Suggest a track', 'goes to the Play list', '#9B4DFF', true), fn: () => S.toList('play', '#playSec') });
    await menu('LANEWAY ROOM', G.gig ? 'You&rsquo;re on the list. Made because I wanted to:' : 'Made because I wanted to.', items);
  }
  else if (id === 'cinema') await filmMenu();
  else if (id === 'station') {
    if (!G.beat.boss) { await say(['Staff only. Someone with a clipboard is standing in front of the door.']); return; }
    const items = [
      { html: row('Email Ebony', ME.email, '#D4FF3A', true), fn: () => { location.href = 'mailto:' + ME.email; } },
      { html: row('LinkedIn', 'ebonyrosedesign', '#0A66C2', true), fn: () => window.open(ME.linkedin, '_blank', 'noopener') },
      { html: row('Copy my details', 'email + linkedin', '#fff'), fn: async () => { try { await navigator.clipboard.writeText(ME.email + '\n' + ME.linkedin); await say(['Copied.']); } catch (e) { await say(['Couldn&rsquo;t copy. It&rsquo;s ' + ME.email]); } } }
    ];
    await menu('JOB OFFER', 'You got through. Let&rsquo;s talk.', items);
  }
}
async function filmMenu() {
  const done = async () => { if (!G.film) { G.film = true; hud(); } };
  const items = [
    { html: row('Hacks', 'watching', '#ff5d7a'), fn: async () => { await say(['<b>Hacks.</b> Season finale.', '&ldquo;why did it have to end&rdquo;']); done(); } },
    { html: row('Something long and quiet', 'film', '#ff5d7a'), fn: async () => { await say(['Three hours in a dark room, no phone.', '&ldquo;my eyes are permanently square now&rdquo;']); done(); } },
    { html: row('Red Dead Redemption 2', 'not a film, they let you in anyway', '#ff5d7a'), fn: async () => { await say(['Ticket for one horse, please.', '&ldquo;mostly just riding around&rdquo;']); done(); } }
  ];
  await menu('PICTURE HOUSE', 'Now showing:', items);
}

/* ── NPC talk ────────────────────────────────────────────────────────────── */
async function talk(n) {
  const face = { up: 'down', down: 'up', left: 'right', right: 'left' }[me.dir]; n.dir = face;
  G.mode = 'dialog';
  try {
    if (n.id === 'barista') {
      if (!G.gotCoffee) { G.gotCoffee = true; G.coffee++; await say(['&ldquo;You look like you&rsquo;ve been refreshing job boards.&rdquo;', '&ldquo;Flat white. On the house.&rdquo;', '<b>Got a flat white.</b> It heals you in a battle.']); }
      else await say(['&ldquo;Back again? Go and get that job.&rdquo;']);
    } else if (n.id === 'busker') {
      await say(['&ldquo;Know any good songs? I&rsquo;m out of ones I like.&rdquo;']);
      const c = $('#wCmd'); c.hidden = false; c.innerHTML = '<div class="q">Suggest one?</div><div class="gr" id="wcg"></div>';
      const it = await choose($('#wcg'), [{ html: 'Yes, I have one', go: 1 }, { html: 'Not right now', cancel: true }], 2); c.hidden = true;
      if (it.go) { await say(['&ldquo;Legend. Put it in the box on the Play page.&rdquo;']); S.toList('play', '#playSec'); }
    } else if (n.id === 'bouncer') {
      if (!G.gig) {
        await say(['&ldquo;Band&rsquo;s on. Keep up with them and you&rsquo;re in the crowd for free.&rdquo;']);
        const c = $('#wCmd'); c.hidden = false; c.innerHTML = '<div class="q">Join the gig?</div><div class="gr" id="wcg"></div>';
        const it = await choose($('#wcg'), [{ html: 'Let&rsquo;s go', go: 1 }, { html: 'Later', cancel: true }], 2); c.hidden = true;
        if (it.go) await startRhythm();
      } else await say(['&ldquo;You&rsquo;re on the list. Go on in.&rdquo;']);
    } else if (n.id === 'usher') { await say(['&ldquo;Tonight&rsquo;s picks. What are you watching?&rdquo;']); G.mode = 'walk'; await filmMenu(); }
    else if (n.id === 'boss') {
      if (G.beat.boss) await say(['&ldquo;Send the portfolio over. We&rsquo;ll be in touch.&rdquo;']);
      else if (!(G.beat.recA && G.beat.recB)) await say(['&ldquo;I only see candidates who&rsquo;ve been through screening.&rdquo;', 'Win the two screening calls first.']);
      else await trainerBattle(n);
    } else if (n.trainer) { if (G.beat[n.trainer]) await say(['&ldquo;Honestly? Impressive. I put you through.&rdquo;']); else await trainerBattle(n); }
    else if (n.id === 'p1') await say(['&ldquo;Four seasons in one day. Classic Melbourne.&rdquo;']);
    else if (n.id === 'p2') await say(['&ldquo;The 96 is running late again.&rdquo;']);
    else if (n.id === 'p3') await say(['&ldquo;Don&rsquo;t go in the long grass. Something in there keeps asking for &lsquo;one small change&rsquo;.&rdquo;']);
    else if (n.id === 'p4') await say(['&ldquo;Heard the studio on Collins is hiring.&rdquo;', '&ldquo;Recruiters are out front though.&rdquo;']);
  } finally { if (G.mode === 'dialog') G.mode = 'walk'; }
}
async function signTalk(s) {
  G.mode = 'dialog';
  await say(['<b>TRAM 96.</b> It runs through your whole career, if you want the short version.']);
  const c = $('#wCmd'); c.hidden = false; c.innerHTML = '<div class="q">Ride the tram?</div><div class="gr" id="wcg"></div>';
  const it = await choose($('#wcg'), [{ html: 'Yes, show me the CV', go: 1 }, { html: 'Stay here', cancel: true }], 2); c.hidden = true;
  G.mode = 'walk'; if (it.go) S.toList(null, '#cvh');
}

/* ── Battle ──────────────────────────────────────────────────────────────── */
const FOES = {
  recA: { name: 'Recruiter', kind: 'person', spr: 'recA', hp: 70, weak: 'work', wants: 'wants: real client experience', atk: [7, 11], intro: 'The recruiter blocks the footpath. &ldquo;Quick screening call?&rdquo;', lines: ['&ldquo;Where do you see yourself in five years?&rdquo;', '&ldquo;Do you have ten years of Figma experience?&rdquo;', '&ldquo;So&hellip; why are you leaving your current role?&rdquo;'], win: ['&ldquo;Honestly? Impressive.&rdquo;', '&ldquo;I&rsquo;ll put you through to the next round.&rdquo;'], trainer: true },
  recB: { name: 'Recruiter', kind: 'person', spr: 'recB', hp: 75, weak: 'play', wants: 'wants: personality, not another template', atk: [7, 12], intro: 'Another recruiter steps out. &ldquo;I have just a few questions.&rdquo;', lines: ['&ldquo;Can you walk me through your process in 30 seconds?&rdquo;', '&ldquo;We&rsquo;re a family here. Are you flexible?&rdquo;', '&ldquo;What&rsquo;s your biggest weakness?&rdquo;'], win: ['&ldquo;Okay, that&rsquo;s the most fun portfolio I&rsquo;ve seen this month.&rdquo;', '&ldquo;You&rsquo;re through.&rdquo;'], trainer: true },
  boss: { name: 'Hiring Manager', kind: 'person', spr: 'boss', hp: 100, weak: 'build', wants: 'wants: proof you can actually ship', atk: [9, 13], intro: 'The hiring manager looks up from a clipboard. &ldquo;Right. Impress me.&rdquo;', lines: ['&ldquo;We love your work, but have you considered a rebrand?&rdquo;', '&ldquo;Can you start Monday? Realistically, yesterday.&rdquo;', '&ldquo;What would you change about our website?&rdquo;'], win: ['&ldquo;You designed it <i>and</i> built it?&rdquo;', '&ldquo;&hellip;When can you start?&rdquo;'], trainer: true },
  scope: { name: 'Scope Creep', kind: 'blob', spr: 'scope', hp: 55, weak: 'build', wants: 'wants: something shipped, finally', atk: [6, 10], intro: 'A wild <b>Scope Creep</b> appeared!', lines: ['Scope Creep added a &ldquo;tiny&rdquo; extra requirement!', 'Scope Creep grew a new feature request!', 'Scope Creep says &ldquo;while you&rsquo;re in there&hellip;&rdquo;'], win: ['Scope Creep was shipped.'] },
  feedback: { name: '&ldquo;Make it pop&rdquo;', kind: 'blob', spr: 'feedback', hp: 55, weak: 'play', wants: 'wants: a bit more fun', atk: [6, 10], intro: 'A wild <b>&ldquo;Make it pop&rdquo;</b> appeared!', lines: ['&ldquo;Can the logo be bigger?&rdquo;', '&ldquo;Can we try it in blue?&rdquo;', '&ldquo;It just needs more&hellip; energy?&rdquo;'], win: ['&ldquo;Make it pop&rdquo; popped.'] },
  spec: { name: 'Unpaid Spec Work', kind: 'blob', spr: 'spec', hp: 55, weak: 'work', wants: 'wants: real client proof', atk: [6, 10], intro: 'A wild <b>Unpaid Spec Work</b> appeared!', lines: ['&ldquo;It&rsquo;ll be great exposure!&rdquo;', '&ldquo;Just a quick logo, we&rsquo;ll pay next time.&rdquo;', '&ldquo;It&rsquo;s a really small job.&rdquo;'], win: ['Unpaid Spec Work vanished. Invoice paid.'] }
};
const batEl = $('#wBat'), cmdEl = $('#wCmd');
const hpClass = r => r > .5 ? '' : r > .25 ? 'mid' : 'low';
function setBars(bt) {
  const fr = Math.max(0, bt.hp / bt.max), mr = Math.max(0, G.conf / G.maxConf);
  $('#bfH').style.width = fr * 100 + '%'; $('#bfH').className = hpClass(fr);
  $('#bmH').style.width = mr * 100 + '%'; $('#bmH').className = hpClass(mr);
  $('#bmS').textContent = `Confidence ${Math.max(0, G.conf)}/${G.maxConf} · flat whites ${G.coffee}`;
}
function fadeFlash() { const f = $('#wFade'); f.style.opacity = 1; setTimeout(() => f.style.opacity = 0, 260); }
async function flash() { const f = $('#wFlash'); f.classList.remove('go'); void f.offsetWidth; f.classList.add('go'); await sleep(reduce ? 50 : 750); f.classList.remove('go'); }
async function battle(foe, isTrainer) {
  G.mode = 'battle'; $('#wObj').style.visibility = 'hidden'; await flash();
  const bt = { foe, hp: foe.hp, max: foe.hp, moves: [] };
  const pool = WORK.slice(); const first = ['work', 'play', 'build'].map(m => pick(pool.filter(p => p.mode === m))).filter(Boolean);
  bt.moves = first.concat(pick(pool.filter(p => !first.includes(p)))).filter(Boolean);
  battleCtx = bt; batEl.hidden = false; $('#bfN').innerHTML = foe.name; $('#bfW').textContent = foe.wants; setBars(bt);
  await say([foe.intro]);
  let won = false, ran = false;
  while (true) {
    cmdEl.hidden = false; cmdEl.innerHTML = '<div class="q">What will Ebony do?</div><div class="gr c3" id="wcg"></div>';
    const a = await choose($('#wcg'), [{ html: 'Show work', k: 'fight' }, { html: `Flat white (${G.coffee})`, k: 'coffee' }, { html: 'Run', k: 'run' }], 3);
    if (a.k === 'run') { cmdEl.hidden = true; if (isTrainer) { await say(['No running from an interview.']); continue; } await say(['Got away safely.']); ran = true; break; }
    if (a.k === 'coffee') {
      cmdEl.hidden = true;
      if (!G.coffee) { await say(['No flat whites left.']); continue; }
      G.coffee--; G.conf = Math.min(G.maxConf, G.conf + 30); setBars(bt); await say(['Ebony drank a flat white. Confidence back up.']);
    } else {
      cmdEl.innerHTML = '<div class="q">Which project do you show?</div><div class="gr" id="wcg"></div>';
      const items = bt.moves.map(p => ({ p, html: row(esc(p.title), MODEN[p.mode] + ' · ' + p.discipline, MODEC[p.mode]) })); items.push({ html: 'Back', cancel: true });
      const m = await choose($('#wcg'), items, 2); cmdEl.hidden = true;
      if (!m.p) continue;
      const sup = m.p.mode === foe.weak, dmg = Math.round((16 + rnd(0, 7)) * (sup ? 2 : 1));
      await say([`Ebony shows <b>${esc(m.p.title)}</b>.`, `&ldquo;${esc(m.p.line)}&rdquo;`]);
      foeAnim.hit = performance.now(); bt.hp -= dmg; setBars(bt); await sleep(reduce ? 0 : 450);
      await say([sup ? `It&rsquo;s super effective! (${MODEN[m.p.mode]})` : 'It landed.']);
      if (bt.hp <= 0) { won = true; break; }
    }
    // their turn
    await sleep(250);
    const hit = ri(foe.atk[0], foe.atk[1]); await say([pick(foe.lines)]); G.conf -= hit; setBars(bt); shake();
    await say([`Ebony&rsquo;s confidence dropped by ${hit}.`]);
    if (G.conf <= 0) break;
  }
  cmdEl.hidden = true;
  if (won) { await say(foe.win); if (isTrainer) await trainerWon(foe); else await say(['Keep walking.']); }
  else if (!ran) {
    await say(['Ebony&rsquo;s confidence hit zero&hellip;', 'She went and sat on a bench for a bit.']);
    G.conf = G.maxConf; await flash(); me.tx = me.fx = 20; me.ty = me.fy = 10; me.x = 20; me.y = 10; me.p = 0; me.moving = false;
  }
  batEl.hidden = true; battleCtx = null; G.mode = 'walk'; G.cool = 6; $('#wObj').style.visibility = '';
}
let shk = 0; function shake() { shk = performance.now(); }
async function trainerBattle(n) { await battle(FOES[n.trainer], true); }
async function trainerWon(foe) {
  const id = Object.keys(FOES).find(k => FOES[k] === foe); G.beat[id] = true; hud();
  const n = NPCS.find(x => x.id === id); if (id === 'boss') { G.offer = true; if (n) { n.dir = 'right'; await walkAway(n); } await say(['<b>Job offer.</b> The station doors are open.', 'Walk in to get in touch.']); const r = cv.getBoundingClientRect(); S.burst(r.left + r.width / 2, r.top + r.height / 2, '#fff'); }
  else if (n) { n.trainer = null; n.talked = true; }
}
async function walkAway(n) { n.dir = 'right'; for (let i = 0; i < 6; i++) { await stepActor(n, 'right'); } n.gone = true; n.id = 'boss-gone'; }
function stepActor(a, dir) { return new Promise(res => { const [dx, dy] = DV[dir]; a.dir = dir; a.fx = a.tx; a.fy = a.ty; a.tx += dx; a.ty += dy; a.x = a.tx; a.y = a.ty; a.p = 0; a.moving = true; a.alt = !a.alt; a.onArrive = res; }); }

/* ── Rhythm gig ──────────────────────────────────────────────────────────── */
const LANE = ['left', 'down', 'up', 'right'], GLYPH = ['←', '↓', '↑', '→'];
async function startRhythm() {
  G.mode = 'rhythm'; fadeFlash(); await sleep(300);
  const notes = []; let t = 2.2, prev = -1;
  for (let i = 0; i < 34; i++) { let l; do l = ri(0, 3); while (l === prev && Math.random() < .7); prev = l; notes.push({ lane: l, t, res: null }); t += pick([.5, .5, .62, .75]); if (i % 8 === 7) t += .4; }
  rhythm = { notes, t0: performance.now(), score: 0, hit: 0, pops: [], flashLane: [0, 0, 0, 0], end: t + 1.2, fin: false, combo: 0 };
  $('.wh').style.opacity = .0;
}
function rhythmHit(l) {
  if (!rhythm || rhythm.fin) return; const now = (performance.now() - rhythm.t0) / 1000; rhythm.flashLane[l] = performance.now();
  let best = null; rhythm.notes.forEach(n => { if (n.lane === l && n.res === null && Math.abs(n.t - now) < .22 && (!best || Math.abs(n.t - now) < Math.abs(best.t - now))) best = n; });
  if (!best) { rhythm.combo = 0; return; }
  const d = Math.abs(best.t - now); best.res = d < .09 ? 'perfect' : 'good'; rhythm.score += best.res === 'perfect' ? 2 : 1; rhythm.hit++; rhythm.combo++; rhythm.pops.push({ l, t: performance.now(), r: best.res });
}
async function rhythmEnd() {
  const r = rhythm; r.fin = true; const max = r.notes.length * 2, pct = r.score / max; $('.wh').style.opacity = 1;
  await sleep(400); const R = rhythm; rhythm = null; G.mode = 'dialog'; fadeFlash();
  if (pct >= .55) {
    const first = !G.gig; G.gig = true; hud();
    await say([`${r.hit}/${r.notes.length} notes. The crowd loves it.`, '&ldquo;You&rsquo;re on the list. Tonight&rsquo;s playlist is on me.&rdquo;']);
    G.mode = 'walk'; if (first) { const rr = cv.getBoundingClientRect(); S.burst(rr.left + rr.width / 2, rr.top + rr.height / 2, '#fff'); }
  } else {
    await say([`${r.hit}/${r.notes.length} notes. The drummer gives you a look.`]);
    const c = $('#wCmd'); c.hidden = false; c.innerHTML = '<div class="q">Try again?</div><div class="gr" id="wcg"></div>';
    const it = await choose($('#wcg'), [{ html: 'Again', go: 1 }, { html: 'Not now', cancel: true }], 2); c.hidden = true;
    if (it.go) { G.mode = 'walk'; await startRhythm(); } else G.mode = 'walk';
  }
}

/* ── Update ──────────────────────────────────────────────────────────────── */
function tryMove(a, dir) {
  const [dx, dy] = DV[dir]; a.dir = dir; const nx_ = a.tx + dx, ny_ = a.ty + dy;
  if (!walkable(nx_, ny_)) return false;
  a.fx = a.tx; a.fy = a.ty; a.tx = nx_; a.ty = ny_; a.x = nx_; a.y = ny_; a.p = 0; a.moving = true; a.alt = !a.alt; return true;
}
function arrived(a) {
  a.moving = false; a.p = 0; a.fx = a.tx; a.fy = a.ty;
  if (a.onArrive) { const f = a.onArrive; a.onArrive = null; f(); }
  if (!a.me) return;
  G.steps++;
  const x = a.tx, y = a.ty;
  const door = BLD.find(b => b.door && b.door[0] === x && b.door[1] === y);
  if (door) { G.mode = 'busy'; enterPlace(door.id).then(() => { if (G.mode === 'busy') G.mode = 'walk'; }); return; }
  if (G.cool > 0) G.cool--;
  if (tiles[y][x] === 4 && !G.cool && Math.random() < .13) { wild(); return; }
  for (const n of NPCS) { if (n.trainer && !n.gone && n.sight && !G.beat[n.trainer] && G.mode === 'walk') { const [dx, dy] = DV[n.dir]; for (let i = 1; i <= n.sight; i++) { const tx = n.tx + dx * i, ty = n.ty + dy * i; if (tx < 0 || ty < 0 || tx >= MW || ty >= MH || solid[ty][tx]) break; if (tx === x && ty === y) { spotted(n); return; } } } }
}
async function spotted(n) {
  G.mode = 'busy'; n.exclam = performance.now(); await sleep(700); n.exclam = 0;
  let guard = 0; while (guard++ < 8 && Math.abs(n.tx - me.tx) + Math.abs(n.ty - me.ty) > 1) { const dx = me.tx - n.tx, dy = me.ty - n.ty; const dir = n.dir; const [vx, vy] = DV[dir]; if (walkable(n.tx + vx, n.ty + vy)) await stepActor(n, dir); else break; }
  const dx = me.tx - n.tx, dy = me.ty - n.ty; n.dir = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'right' : 'left') : (dy > 0 ? 'down' : 'up'); me.dir = { up: 'down', down: 'up', left: 'right', right: 'left' }[n.dir];
  await trainerBattle(n);
}
async function wild() { G.mode = 'busy'; await battle(FOES[pick(['scope', 'feedback', 'spec'])], false); }

function update(dt) {
  [me, ...NPCS].forEach(a => { if (a.moving) { a.p += dt * 6.2; if (a.p >= 1) arrived(a); } });
  if (G.mode === 'walk' && !me.moving && (keysHeld.length || queued)) { tryMove(me, keysHeld.length ? keysHeld[keysHeld.length - 1] : queued); queued = null; }
  tram.x += dt * 70; if (tram.x > MW * T + 60) tram.x = -80;
  // hint
  if (G.mode === 'walk' && !me.moving) { const [dx, dy] = DV[me.dir], fx = me.tx + dx, fy = me.ty + dy; const t = npcAt(fx, fy) || SIGNS.find(s => s.x === fx && s.y === fy); $('#wHint').classList.toggle('on', !!t && !root.classList.contains('wcoarse')); } else $('#wHint').classList.remove('on');
  if (rhythm && !rhythm.fin) { const now = (performance.now() - rhythm.t0) / 1000; rhythm.notes.forEach(n => { if (n.res === null && now > n.t + .22) { n.res = 'miss'; rhythm.combo = 0; } }); if (now > rhythm.end) rhythmEnd(); }
}
function interact() {
  if (G.mode !== 'walk' || me.moving) return;
  const [dx, dy] = DV[me.dir], fx = me.tx + dx, fy = me.ty + dy;
  const n = npcAt(fx, fy); if (n) { talk(n); return; }
  const s = SIGNS.find(q => q.x === fx && q.y === fy); if (s) signTalk(s);
}

/* ── Drawing (1-bit) ─────────────────────────────────────────────────────── */
function tileBase(g, t, x, y, f) {
  const W = (a, b, w, h) => W_(g, a, b, w, h), h1 = hash(x, y, 1), h2 = hash(x, y, 2), h3 = hash(x, y, 4);
  K_(g, 0, 0, T, T);
  if (t === 0) { W(2 + Math.floor(h1 * 11), 3 + Math.floor(h2 * 9), 1, 1); if (h3 < .5) W(2 + Math.floor(h3 * 22), 10 + Math.floor(h1 * 5), 1, 1); if (h1 < .25) W(1 + Math.floor(h2 * 13), 14, 2, 1); }
  else if (t === 1) {
    if (y === 13 && tiles[y][x] === 1) { if (x % 2 === 0) W(2, 15, 8, 1); }
    if (x === 22 && y !== 11 && y !== 12 && y !== 13) W(15, 2, 1, 6);
    if (y === 11) for (let k = 0; k < T; k += 2) W(k, 0, 1, 1);
    if (h1 < .06) W(Math.floor(h2 * 15), Math.floor(h3 * 15), 1, 1);
  }
  else if (t === 2) { for (let k = 0; k < 4; k++) for (let j = 2; j < 14; j += 2) W(k * 4 + 1, j, 1, 1); W(0, 4, T, 1); W(0, 11, T, 1); }
  else if (t === 3) { [[2 + Math.floor(h1 * 9), 5 + Math.floor(h2 * 7)], [9 + Math.floor(h2 * 5), 2 + Math.floor(h3 * 6)]].forEach(([a, b], i) => { if (i === 0 || h1 > .35) { W(a, b, 1, 1); W(a + 2, b, 1, 1); W(a + 1, b + 1, 1, 1); } }); }
  else if (t === 4) { pat(g, 0, 0, T, T, 'dots'); const o = f ? 1 : 0;[[1 + o, 2], [9 - o, 3], [4 + o, 9], [11 - o, 10]].forEach(([a, b]) => { K_(g, a - 1, b - 1, 5, 5); W(a, b + 2, 1, 1); W(a + 1, b + 1, 1, 1); W(a + 2, b, 1, 1); W(a + 3, b + 1, 1, 1); W(a + 4, b + 2, 1, 1); W(a + 2, b + 2, 1, 2); }); }
  else if (t === 5) { const o = (f * 4) % 16;[5, 12].forEach((yy, i) => { const off = (o + i * 8) % 16; W(off, yy, 6, 1); W(off - 16, yy, 6, 1); if (off + 6 > 16) W(0, yy, off + 6 - 16, 1); }); W(((o + 3) % 16), 8, 2, 1); }
  else if (t === 6) { W(0, 0, 1, 1); W(8, 0, 1, 1); W(0, 8, 1, 1); W(8, 8, 1, 1); W(4, 4, 1, 1); W(12, 12, 1, 1); }
}
const tileCache = new Map();
function tileAt(g, t, x, y, now) {
  const f = t === 4 ? (Math.floor(now / 450 + x + y) & 1) : t === 5 ? (Math.floor(now / 500 + x * 2 + y) & 3) : 0, k = (((t * 64 + x) * 64 + y) * 4 + f);
  let c = tileCache.get(k);
  if (!c) { c = mk(T, T, gg => tileBase(gg, t, x, y, f)); tileCache.set(k, c); }
  g.drawImage(c, x * T, y * T);
}
const treeImg = mk(16, 24, g => { disc(g, 8, 8, 8); pat(g, 0, 0, 16, 18, 'checker', BG); disc(g, 8, 8, 6); pat(g, 3, 3, 10, 10, 'dense', BG); for (let i = 0; i < 4; i++) K_(g, 5 + i * 2, 4 + (i & 1) * 4, 1, 1); disc(g, 8, 8, 8); K_(g, 0, 0, 16, 24); disc(g, 8, 8, 8); disc(g, 8, 8, 7, BG); pat(g, 1, 1, 14, 14, 'dots'); [[5, 6], [10, 5], [8, 10], [11, 10], [4, 10]].forEach(([a, b]) => { W_(g, a, b, 2, 1); W_(g, a, b + 1, 1, 1); }); W_(g, 7, 16, 2, 8); W_(g, 5, 22, 6, 1); });
function drawTree(g, x, y) { g.drawImage(treeImg, x * T, y * T - 8); }

const BCACHE = {}, BM = 22;
function buildingImg(b) {
  if (BCACHE[b.id]) return BCACHE[b.id];
  const w = b.w * T, h = b.h * T;
  const c = mk(w, h + BM, g => {
    g.translate(0, BM);
    const W = (a, bb, ww, hh) => W_(g, a, bb, ww, hh), K = (a, bb, ww, hh) => K_(g, a, bb, ww, hh);
    if (b.special === 'graffiti') {
      W(0, 0, w, 1); W(0, h - 1, w, 1); W(0, 0, 1, h); W(w - 1, 0, 1, h);
      const kinds = ['solid', 'checker', 'hline', 'vline', 'diag', 'dense'], glyphs = '#*$&%@!?';
      for (let i = 0; i < 16; i++) {
        const r = hash(i, 3, 5), r2 = hash(i, 7, 2), r3 = hash(i, 1, 9), bw = 12 + Math.floor(r * 24), bh = 8 + Math.floor(r2 * 18), bx = 3 + Math.floor(r3 * (w - bw - 6)), by = 3 + Math.floor(hash(i, 5, 5) * (h - bh - 6));
        pat(g, bx, by, bw, bh, kinds[i % kinds.length]); if (i % 3 === 0) { K(bx + 2, by + 2, bw - 4, bh - 4); ptxt(g, glyphs[i % glyphs.length], bx + Math.floor(bw / 2) - 2 + 0, by + Math.floor(bh / 2) - 2, 1); }
      }
      return;
    }
    const st = b.special === 'station';
    // roof band
    W(0, 0, w, 10); for (let j = 1; j < 9; j++) for (let i = 1; i < w - 1; i++) if (((i + j) & 1)) K(i, j, 1, 1);
    // sign plate
    if (b.name) { const tw = txtW(b.name, 1), pw = tw + 8, px = Math.floor((w - pw) / 2); W(px - 1, 1, pw + 2, 9); K(px, 2, pw, 7); ptxt(g, b.name, px + 4, 3, 1); }
    // walls
    W(0, 10, 1, h - 10); W(w - 1, 10, 1, h - 10); W(0, h - 1, w, 1); W(0, 10, w, 1);
    // windows
    const doorCol = b.door ? b.door[0] - b.x : -1;
    for (let i = 0; i < b.w; i++) {
      if (st) {
        if (i === doorCol || i === b.w - 1 && false) continue;
        const wx = i * T + 3, wy = 18, wh = 40, lit = hash(b.x + i, b.y, 7) > .35;
        W(wx, wy + 3, 10, wh - 3); W(wx + 2, wy + 1, 6, 2); W(wx + 1, wy + 2, 8, 1); K(wx + 1, wy + 4, 8, wh - 5); if (lit) pat(g, wx + 1, wy + 4, 8, wh - 5, 'dense'); K(wx + 4, wy + 4, 1, wh - 5);
        continue;
      }
      for (let j = 0; j < b.h - 2; j++) {
        if (j === b.h - 3 && i === doorCol) continue;
        const wx = i * T + 3, wy = 14 + j * T, lit = hash(b.x + i, b.y + j, 7) > .4;
        if (lit) { W(wx, wy, 10, 9); K(wx + 4, wy, 1, 9); K(wx, wy + 4, 10, 1); }
        else { W(wx, wy, 10, 1); W(wx, wy + 8, 10, 1); W(wx, wy, 1, 9); W(wx + 9, wy, 1, 9); W(wx + 4, wy + 1, 1, 7); }
      }
    }
    if (b.tag) ptxt(g, b.tag, 4, h - 9, 1);
    // dome and clock
    if (st) {
      const cx = Math.floor(w / 2); K(cx - 30, -BM, 60, BM);
      for (let r = 0; r < 16; r++) { const hw = Math.round(28 * Math.sqrt(1 - ((15 - r) / 16) ** 2)); W(cx - hw, -16 + r, hw * 2, 1); }
      for (let r = 1; r < 16; r++) { const hw = Math.round(28 * Math.sqrt(1 - ((15 - r) / 16) ** 2)) - 2; for (let i = -hw; i < hw; i++) if (((cx + i) + r) & 1) K(cx + i, -16 + r, 1, 1); }
      W(cx - 2, -21, 4, 6); W(cx - 1, -22, 2, 1); W(cx - 30, 0, 60, 1);
      disc(g, cx, 4, 7); disc(g, cx, 4, 5, BG); W(cx, 1, 1, 4); W(cx, 4, 3, 1);
    }
    // door
    if (b.door) {
      const dx = (b.door[0] - b.x) * T, dy = (b.door[1] - b.y) * T;
      W(dx, dy - 7, 16, 23); K(dx + 2, dy - 5, 12, 21); W(dx + 7, dy - 5, 2, 21); K(dx + 7, dy + 3, 2, 1); W(dx + 3, dy - 3, 4, 1); W(dx + 9, dy - 3, 4, 1);
      if (st) { W(dx - 3, dy - 10, 22, 2); }
    }
    if (b.id === 'cafe') { for (let i = 1; i < w - 1; i += 4) { W(i, h - 14, 2, 5); } W(1, h - 15, w - 2, 1); W(1, h - 9, w - 2, 1); W(8, h - 8, 12, 1); W(10, h - 7, 1, 7); W(18, h - 7, 1, 7); }
  });
  BCACHE[b.id] = c; return c;
}
function drawBuilding(g, b) { g.drawImage(buildingImg(b), b.x * T, b.y * T - BM); }
function drawActor(g, a) {
  const spr = SPR[a.spr][a.dir][a.moving ? (a.alt ? 1 : 2) : 0], px = Math.round(a.px * T), py = Math.round(a.py * T) - 4;
  W_(g, px + 4, py + 19, 8, 1); g.drawImage(spr, px, py);
  if (a.exclam) { K_(g, px + 4, py - 14, 8, 12); ptxt(g, '!', px + 6, py - 13, 2); }
}
function drawTram(g) {
  const y = 12 * T + 1, x = Math.round(tram.x);
  W_(g, x, y, 72, 12); K_(g, x + 1, y + 1, 70, 10);
  for (let i = 0; i < 6; i++) W_(g, x + 6 + i * 11, y + 2, 8, 4);
  W_(g, x, y + 7, 72, 1); ptxt(g, '96', x + 33, y + 8, 1); W_(g, x + 5, y + 13, 4, 1); W_(g, x + 62, y + 13, 4, 1);
}
function present() { out.imageSmoothingEnabled = false; out.setTransform(1, 0, 0, 1, 0, 0); out.fillStyle = BG; out.fillRect(0, 0, cv.width, cv.height); out.drawImage(lo, 0, 0, view.lw * view.s * view.d, view.lh * view.s * view.d); }
function drawWorld(now) {
  const g = ctx, vw = view.lw, vh = view.lh;
  const tx = me.px * T + 8, ty = me.py * T + 8;
  cam.x = clamp(tx - vw / 2, 0, Math.max(0, MW * T - vw)); cam.y = clamp(ty - vh / 2, 0, Math.max(0, MH * T - vh));
  if (MW * T < vw) cam.x = -(vw - MW * T) / 2; if (MH * T < vh) cam.y = -(vh - MH * T) / 2;
  g.setTransform(1, 0, 0, 1, 0, 0); g.fillStyle = BG; g.fillRect(0, 0, vw, vh);
  g.setTransform(1, 0, 0, 1, -Math.round(cam.x), -Math.round(cam.y));
  const x0 = Math.max(0, Math.floor(cam.x / T)), x1 = Math.min(MW, Math.ceil((cam.x + vw) / T) + 1), y0 = Math.max(0, Math.floor(cam.y / T)), y1 = Math.min(MH, Math.ceil((cam.y + vh) / T) + 1);
  for (let y = y0; y < y1; y++) for (let x = x0; x < x1; x++) tileAt(g, tiles[y][x], x, y, now);
  BLD.forEach(b => drawBuilding(g, b));
  SIGNS.forEach(s => { const x = s.x * T, y = s.y * T; W_(g, x + 7, y + 6, 2, 10); W_(g, x + 1, y - 3, 14, 10); K_(g, x + 2, y - 2, 12, 8); ptxt(g, '96', x + 4, y, 1); });
  const objs = [];
  TREES.forEach(([x, y]) => objs.push({ y: y * T + 15, d: () => drawTree(g, x, y) }));
  NPCS.forEach(n => { if (!n.gone) objs.push({ y: n.py * T + 15, d: () => drawActor(g, n) }); });
  objs.push({ y: me.py * T + 15, d: () => drawActor(g, me) });
  objs.sort((a, b) => a.y - b.y).forEach(o => o.d());
  drawTram(g);
}
function drawBattle(now) {
  const g = ctx, W = view.lw, H = view.lh; g.setTransform(1, 0, 0, 1, 0, 0);
  const bt = battleCtx; if (!bt) return;
  g.fillStyle = BG; g.fillRect(0, 0, W, H);
  for (let i = 0; i < 34; i++) { if (hash(i, 9, 3) < .3 && ((now / 500 + i) | 0) % 3 === 0) continue; W_(g, Math.floor(hash(i, 1, 1) * W), Math.floor(hash(i, 2, 1) * H * .55), 1, 1); }
  const hz = Math.floor(H * .6);
  for (let x = 0; x < W; x += 2) W_(g, x, hz, 1, 1);
  [[6, 3], [14, 5], [26, 8], [44, 13]].forEach(([dy, sp]) => { for (let x = (dy * 7) % sp; x < W; x += sp) W_(g, x, hz + dy, 1, 1); });
  const kp = clamp(Math.floor(H / 62), 2, 6), kb = clamp(Math.floor(H / 120), 1, 3);
  const ex = Math.floor(W * (W < 400 ? .62 : .68)), ey = Math.floor(H * (W < 400 ? .3 : .34)), mx = Math.floor(W * (W < 400 ? .3 : .26)), my = Math.floor(H * (W < 400 ? .56 : .66));
  const hitT = (now - foeAnim.hit) / 1000, hitting = hitT < .45, bob = Math.sin(now / 420) > 0 ? 1 : 0, dead = bt.hp <= 0;
  const foe = bt.foe; let spr, sw, sh, k;
  if (foe.kind === 'person') { spr = SPR[foe.spr].down[0]; sw = 16; sh = 20; k = kp; } else { spr = BLOB[foe.spr]; sw = 48; sh = 48; k = kb + 1; }
  const fw = sw * k, fh = sh * k;
  ring(g, ex, ey + Math.floor(fh / 2) + 2, Math.floor(fw * .55), 4, 3);
  let show = true; if (dead) show = ((now - foeAnim.hit) / 70 | 0) % 2 === 0 && now - foeAnim.hit < 600; else if (hitting && Math.floor(hitT * 20) % 2) show = false;
  if (show) g.drawImage(spr, Math.round(ex - fw / 2 + (hitting ? Math.round(Math.sin(hitT * 60) * 3) : 0)), Math.round(ey - fh / 2 + bob * k * .5), fw, fh);
  const mk_ = kp + 1, shx = now - shk < 300 ? Math.round(Math.sin((now - shk) / 20) * 3) : 0, mw = 16 * mk_, mh = 20 * mk_;
  ring(g, mx, my + Math.floor(mh / 2) + 2, Math.floor(mw * .55), 4, 3);
  g.drawImage(SPR.me.up[0], Math.round(mx - mw / 2 + shx), Math.round(my - mh / 2 + (Math.sin(now / 520) > 0 ? 1 : 0)), mw, mh);
}
function drawRhythm(now) {
  const g = ctx, W = view.lw, H = view.lh; g.setTransform(1, 0, 0, 1, 0, 0); g.fillStyle = BG; g.fillRect(0, 0, W, H);
  const r = rhythm; if (!r) return; const t = (now - r.t0) / 1000;
  const lw = clamp(Math.floor(W / 6), 24, 44), x0 = Math.floor(W / 2 - lw * 2), hitY = Math.floor(H * .78), fall = 1.5, topY = 26;
  r.laneX = x0 * view.s; r.laneW = lw * view.s;
  for (let l = 0; l <= 4; l++) for (let y = topY; y < hitY + 16; y += 2) W_(g, x0 + l * lw, y, 1, 1);
  for (let l = 0; l < 4; l++) {
    const fl = now - r.flashLane[l] < 120, bx = x0 + l * lw + 3, bw = lw - 5;
    if (fl) { pat(g, bx, topY, bw, hitY - topY + 8, 'dots'); }
    W_(g, bx, hitY - 7, bw, 15); K_(g, bx + 1, hitY - 6, bw - 2, 13); if (fl) { W_(g, bx + 1, hitY - 6, bw - 2, 13); arrow(g, LANE[l], bx + Math.floor(bw / 2), hitY, BG); } else arrow(g, LANE[l], bx + Math.floor(bw / 2), hitY);
  }
  r.notes.forEach(n => {
    if (n.res === 'perfect' || n.res === 'good') return;
    const p = 1 - (n.t - t) / fall, y = Math.round(lerp(topY, hitY, p)); if (p < 0 || y > H) return;
    const bx = x0 + n.lane * lw + 3, bw = lw - 5;
    if (n.res === 'miss') { for (let i = 0; i < bw; i += 2) W_(g, bx + i, y - 5, 1, 1), W_(g, bx + i, y + 5, 1, 1); return; }
    W_(g, bx, y - 5, bw, 11); arrow(g, LANE[n.lane], bx + Math.floor(bw / 2), y, BG);
  });
  r.pops = r.pops.filter(p => now - p.t < 500); r.pops.forEach(p => { const a = (now - p.t) / 500; ptxt(g, p.r === 'perfect' ? 'PERFECT' : 'GOOD', x0 + p.l * lw + Math.floor(lw / 2), hitY - 18 - Math.floor(a * 14), 1, 'center'); });
  ptxt(g, 'LANEWAY ROOM', x0, 8, 2); ptxt(g, r.hit + '/' + r.notes.length + (r.combo > 3 ? ' X' + r.combo : ''), x0 + lw * 4, 8, 2, 'right');
  if (t < 2.4) ptxt(g, root.classList.contains('wcoarse') ? 'TAP THE LANES' : 'ARROW KEYS OR WASD', Math.floor(W / 2), hitY + 22, 1, 'center');
}
function frame(ts) {
  if (!running) return; requestAnimationFrame(frame);
  const dt = Math.min(.05, (ts - last) / 1000 || 0); last = ts;
  if (!S.visible()) return;
  const now = performance.now();
  if (G.mode !== 'battle') update(dt);
  else { tram.x += dt * 70; if (tram.x > MW * T + 60) tram.x = -80; }
  if (G.mode === 'battle') drawBattle(now); else if (G.mode === 'rhythm') drawRhythm(now); else drawWorld(now);
  present();
}

/* ── Input ───────────────────────────────────────────────────────────────── */
const KEYDIR = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right', w: 'up', s: 'down', a: 'left', d: 'right', W: 'up', S: 'down', A: 'left', D: 'right' };
function active() { return running && S.visible(); }
addEventListener('keydown', e => {
  if (!active() || e.metaKey || e.ctrlKey || e.altKey || /INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || '')) return;
  const k = e.key, dir = KEYDIR[k], ent = k === 'Enter' || k === ' ' || k === 'e' || k === 'E', esc_ = k === 'Escape';
  if (dir || ent) e.preventDefault();
  if (dl) { if (ent && !e.repeat) pressA(); return; }
  if (pk) { if (dir) { const [dx, dy] = DV[dir]; pk.move(dx, dy); } else if (ent && !e.repeat) pk.enter(); else if (esc_) pk.cancel(); return; }
  if (G.mode === 'rhythm') { const l = dir ? LANE.indexOf(dir) : -1; if (l >= 0 && !e.repeat) rhythmHit(l); return; }
  if (G.mode === 'walk') { if (dir) { const i = keysHeld.indexOf(dir); if (i >= 0) keysHeld.splice(i, 1); keysHeld.push(dir); queued = dir; } else if (ent && !e.repeat) interact(); }
});
addEventListener('keyup', e => { const dir = KEYDIR[e.key]; if (dir) { const i = keysHeld.indexOf(dir); if (i >= 0) keysHeld.splice(i, 1); } });
addEventListener('blur', () => { keysHeld.length = 0; });
$('#wPad').addEventListener('pointerdown', e => { const b = e.target.closest('button'); if (!b) return; e.preventDefault(); const d = b.dataset.d; if (dl) { pressA(); return; } if (pk) { const [dx, dy] = DV[d]; pk.move(dx, dy); return; } if (G.mode === 'rhythm') { rhythmHit(LANE.indexOf(d)); return; } const i = keysHeld.indexOf(d); if (i >= 0) keysHeld.splice(i, 1); keysHeld.push(d); queued = d; });
const clearPad = () => { keysHeld.length = 0; }; addEventListener('pointerup', clearPad); addEventListener('pointercancel', clearPad);
$('#wA').addEventListener('pointerdown', e => { e.preventDefault(); if (dl) pressA(); else if (pk) pk.enter(); else interact(); });
cv.addEventListener('pointerdown', e => {
  if (G.mode === 'rhythm' && rhythm && rhythm.laneW) { const r = cv.getBoundingClientRect(), x = e.clientX - r.left, l = Math.floor((x - rhythm.laneX) / rhythm.laneW); if (l >= 0 && l < 4) rhythmHit(l); }
  else if (dl) pressA();
});
$('#wSkip').addEventListener('click', () => S.setView('list', true));

/* ── Enter / leave ───────────────────────────────────────────────────────── */
async function enter() {
  if (running) return; running = true; fit(); hud(); last = performance.now(); requestAnimationFrame(frame);
  if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
  if (!G.intro) { G.intro = true; G.mode = 'dialog'; await sleep(500); await say(['Melbourne. Thursday morning. Four job tabs open and a flat white gone cold.', 'You&rsquo;re <b>Ebony</b>. You need a job. Go and find one.', root.classList.contains('wcoarse') ? 'Use the pad to walk and <b>A</b> to talk.' : 'Walk with the <b>arrow keys</b> or <b>WASD</b>. Press <b>space</b> to talk to things.']); G.mode = 'walk'; }
}
function leave() { running = false; keysHeld.length = 0; }
window.WORLD = { enter, leave, get active() { return running; }, _g: G, _me: me, _npcs: NPCS, _battle: () => battleCtx, _rhythm: () => rhythm, _tiles: tiles, _solid: solid };
if (S.view() === 'map') enter();
})();
