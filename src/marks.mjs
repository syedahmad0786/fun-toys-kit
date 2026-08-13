/** Unique SVG marks. One geometry per toy. Never a shared monogram. */

function wrap(id, inner) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="${id}">
  <defs>
    <filter id="${id}-soft" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="0.6" result="b"/>
      <feOffset dy="0.4"/>
      <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  ${inner}
</svg>`;
}

const MARKS = {
  "fun-toys": wrap(
    "hub",
    `<rect width="64" height="64" rx="10" fill="#1a120c"/>
     <rect x="8" y="10" width="48" height="44" rx="3" fill="#2a1c14" stroke="#c4a35a" stroke-width="1.2"/>
     <rect x="12" y="14" width="40" height="8" fill="#3a281c"/>
     <rect x="12" y="26" width="40" height="8" fill="#3a281c"/>
     <rect x="12" y="38" width="40" height="10" fill="#3a281c"/>
     <circle cx="32" cy="33" r="5.2" fill="none" stroke="#c4a35a" stroke-width="1.6"/>
     <circle cx="32" cy="33" r="1.4" fill="#ead9b8"/>
     <path d="M32 38.2v4.4" stroke="#c4a35a" stroke-width="1.4" stroke-linecap="round"/>`,
  ),

  cursorling: wrap(
    "cur",
    `<rect width="64" height="64" rx="14" fill="#1a0e0a"/>
     <path fill="#f4ebd8" d="M32 8c12 0 21 8.6 20.6 19.4C52.2 35.2 48.4 40.4 44 43.4c3.6 6.2 2.8 13 0 19.4l-2.8-5.2c-1-6.4-1.8-10.6-2.6-13.2-.6 5.2-1.8 12.2-3.6 19.8h-2.6c-1.1-7.2-2-14.4-2.8-19.2C27.2 50 24.6 55.6 22 60.2l-2-3.4C22.6 51 25 45.8 27.2 42 21.2 39 16.2 32.6 16.8 24.4 17.4 14.6 23.8 8 32 8z"/>
     <path fill="#f4ebd8" d="M17.2 30.4c-5 1.8-6.4 6.8-3.2 9 3.6-1.2 4.8-5.4 3.2-9z"/>
     <ellipse fill="#1a0e0a" cx="26.6" cy="26.4" rx="4.2" ry="4.8"/>
     <ellipse fill="#1a0e0a" cx="38.4" cy="26.4" rx="4.2" ry="4.8"/>
     <circle fill="#c4a574" cx="27.4" cy="25.6" r="1.15"/>
     <circle fill="#c4a574" cx="39.2" cy="25.6" r="1.15"/>`,
  ),

  "please-press": wrap(
    "btn",
    `<rect width="64" height="64" rx="8" fill="#f4f0e6"/>
     <defs>
       <radialGradient id="btn-dome" cx="38%" cy="32%" r="68%">
         <stop offset="0%" stop-color="#3a3832"/>
         <stop offset="55%" stop-color="#1c1a16"/>
         <stop offset="100%" stop-color="#0c0b09"/>
       </radialGradient>
     </defs>
     <circle cx="32" cy="32" r="22" fill="none" stroke="#16140f" stroke-width="1.2" opacity=".18"/>
     <circle cx="32" cy="32" r="18" fill="url(#btn-dome)"/>
     <ellipse cx="26" cy="24" rx="7" ry="4.2" fill="#fff" opacity=".18"/>
     <circle cx="32" cy="32" r="2.2" fill="#f4f0e6"/>`,
  ),

  "plot-armor": wrap(
    "plt",
    `<rect width="64" height="64" rx="10" fill="#1a0f14"/>
     <path fill="#2a161d" stroke="#e4c07a" stroke-width="1.4" d="M32 8.5l16 6.2v14.8c0 12.4-7.2 20.6-16 26.2C23.2 50.1 16 41.9 16 29.5V14.7L32 8.5z"/>
     <path fill="none" stroke="#e4c07a" stroke-width="1.1" d="M32 14.5v32.2M22.5 24.5h19"/>
     <circle cx="32" cy="24.5" r="3.2" fill="#f6ead2"/>
     <path fill="#e4c07a" d="M32 20.8l.9 1.8 2 .3-1.45 1.4.34 2-1.79-1-1.79 1 .34-2-1.45-1.4 2-.3z"/>`,
  ),

  "vapor-market": wrap(
    "vap",
    `<rect width="64" height="64" rx="16" fill="#efeae1"/>
     <defs>
       <linearGradient id="vap-orb" x1="18" y1="12" x2="50" y2="52">
         <stop offset="0%" stop-color="#c4b5fd"/>
         <stop offset="45%" stop-color="#5b4dff"/>
         <stop offset="100%" stop-color="#22d3ee"/>
       </linearGradient>
     </defs>
     <ellipse cx="32" cy="34" rx="18" ry="18" fill="url(#vap-orb)"/>
     <ellipse cx="32" cy="34" rx="18" ry="18" fill="none" stroke="#fff" stroke-width="1.2" opacity=".45"/>
     <ellipse cx="24" cy="24" rx="6.5" ry="4" fill="#fff" opacity=".35"/>
     <path d="M32 8c2.4 6 2.4 10 0 14" fill="none" stroke="#5b4dff" stroke-width="1.6" stroke-linecap="round" opacity=".7"/>`,
  ),

  grandiose: wrap(
    "grd",
    `<rect width="64" height="64" fill="#050505"/>
     <rect x="5" y="12" width="54" height="40" fill="none" stroke="#d4af37" stroke-width="1.6"/>
     <rect x="5" y="5" width="54" height="7" fill="#0a0a0a" stroke="#d4af37" stroke-width="1"/>
     <rect x="5" y="52" width="54" height="7" fill="#0a0a0a" stroke="#d4af37" stroke-width="1"/>
     <g fill="#d4af37">
       <circle cx="12" cy="8.5" r="1.6"/><circle cx="32" cy="8.5" r="1.6"/><circle cx="52" cy="8.5" r="1.6"/>
       <circle cx="12" cy="55.5" r="1.6"/><circle cx="32" cy="55.5" r="1.6"/><circle cx="52" cy="55.5" r="1.6"/>
     </g>
     <path d="M22 38.5l5.2-13h3.2L36.6 38.5h-3.1l-1.1-3.1h-6.1l-1.2 3.1H22zm5.6-5.5h4.6L30.1 27z" fill="#f3e5ab"/>`,
  ),

  "term-specter": wrap(
    "spc",
    `<rect width="64" height="64" rx="8" fill="#1a1220"/>
     <rect x="8" y="10" width="48" height="38" rx="3" fill="#140e18" stroke="#c9a0dc" stroke-width="1.2"/>
     <path fill="#e8d4f0" d="M32 16.5c7.4 0 12.5 5.2 12.2 13.2 0 4.6-2.4 8-6.2 9.8 1.8 3.4 1.4 6.8 0 10.2l-2.2-2.6c-.6-2.8-1.1-4.8-1.6-6.1-.4 2.6-1.1 5.8-2.1 9.1h-2c-.7-3.4-1.3-6.6-1.8-9.1-.8 2.6-1.9 5.2-3.2 7.6l-1.6-1.6c1.6-2.6 2.8-5.2 3.8-7.6-4.4-1.8-7.4-5.6-7.2-10.4.4-7.6 5.2-12.5 11.9-12.5z"/>
     <ellipse fill="#1a1220" cx="27.6" cy="26.2" rx="2.4" ry="2.8"/>
     <ellipse fill="#1a1220" cx="36.4" cy="26.2" rx="2.4" ry="2.8"/>
     <rect x="14" y="52" width="36" height="2" fill="#c9a0dc" opacity=".45"/>`,
  ),

  chimemoji: wrap(
    "chm",
    `<rect width="64" height="64" rx="6" fill="#12140e"/>
     <rect x="0" y="0" width="64" height="6" fill="#c4a035"/>
     <rect x="0" y="58" width="64" height="6" fill="#c4a035"/>
     <circle cx="24" cy="32" r="13" fill="none" stroke="#8dff7a" stroke-width="2.2"/>
     <circle cx="40" cy="32" r="13" fill="none" stroke="#c4a035" stroke-width="2.2"/>
     <path d="M32 22.5c3.6 3 5.4 6.4 5.4 9.5S35.6 38 32 41.5C28.4 38 26.6 34.6 26.6 32s1.8-6.5 5.4-9.5z" fill="#8dff7a" opacity=".85"/>`,
  ),

  "mild-inconvenience": wrap(
    "mi",
    `<rect width="64" height="64" fill="#f3efe4"/>
     <rect x="8" y="10" width="48" height="3" fill="#1c2f4a"/>
     <rect x="8" y="15" width="48" height="1.2" fill="#1c2f4a"/>
     <rect x="8" y="50" width="48" height="1.2" fill="#1c2f4a"/>
     <rect x="8" y="53" width="48" height="2.2" fill="#1c2f4a"/>
     <path fill="#1c2f4a" d="M18 42V22h6.4c4.6 0 7.4 2.6 7.4 6.6 0 4.2-3 6.8-7.6 6.8H22.6V42H18zm4.6-10.2h1.6c2.2 0 3.5-1.2 3.5-3.2s-1.3-3.1-3.5-3.1h-1.6v6.3zM36.2 42V22h12v3.6H40.6v4.2h6.8v3.4h-6.8V42h-4.4z"/>`,
  ),

  "peel-pack": wrap(
    "pel",
    `<rect width="64" height="64" rx="12" fill="#fff6fb"/>
     <rect x="10" y="12" width="44" height="40" rx="6" fill="#ffe566" stroke="#1a1230" stroke-width="2"/>
     <path fill="#ff4d8d" stroke="#1a1230" stroke-width="1.6" d="M32 12h16a6 6 0 0 1 6 6v10L38 40 32 12z"/>
     <circle cx="26" cy="30" r="3.2" fill="#3ec1ff" stroke="#1a1230" stroke-width="1.2"/>
     <circle cx="26" cy="42" r="3.2" fill="#ff4d8d" stroke="#1a1230" stroke-width="1.2"/>`,
  ),

  "still-here": wrap(
    "sth",
    `<rect width="64" height="64" fill="#c9c3b6"/>
     <circle cx="32" cy="32" r="18" fill="none" stroke="#14110e" stroke-width="1.8"/>
     <circle cx="32" cy="32" r="2" fill="#14110e"/>
     <path d="M32 18v14l9 6" fill="none" stroke="#14110e" stroke-width="1.8" stroke-linecap="round"/>
     <rect x="8" y="6" width="48" height="2" fill="#14110e"/>
     <rect x="8" y="56" width="48" height="2" fill="#14110e"/>`,
  ),

  "rake-garden": wrap(
    "rke",
    `<rect width="64" height="64" rx="8" fill="#efe6d4"/>
     <ellipse cx="32" cy="36" rx="22" ry="16" fill="#cbb99a"/>
     <path fill="none" stroke="#2b261f" stroke-width="1.2" d="M14 36c6-6 12-8 18-8s12 2 18 8"/>
     <path fill="none" stroke="#2b261f" stroke-width="1.2" d="M16 40c5-4 10-6 16-6s11 2 16 6"/>
     <path stroke="#2b261f" stroke-width="1.8" stroke-linecap="round" d="M32 12v18"/>
     <path stroke="#2b261f" stroke-width="1.6" stroke-linecap="round" d="M24 30l8 6 8-6"/>
     <circle cx="44" cy="28" r="3.2" fill="#2b261f" opacity=".55"/>`,
  ),

  "the-elsewhere": wrap(
    "els",
    `<rect width="64" height="64" fill="#f4ead8"/>
     <circle cx="32" cy="32" r="24" fill="none" stroke="#6e2c24" stroke-width="2.4"/>
     <circle cx="32" cy="32" r="19" fill="none" stroke="#6e2c24" stroke-width="1"/>
     <path fill="#6e2c24" d="M22.4 38.8V25.2h5.2c3.6 0 5.6 1.8 5.6 4.6 0 2.8-2 4.8-5.6 4.8h-1.8v4.2h-3.4zm3.4-7h1.4c1.6 0 2.5-.8 2.5-2.1s-.9-2-2.5-2h-1.4v4.1zM35.2 38.8V25.2H46v2.8h-7.4v2.6h6.4v2.6h-6.4v5.6h-3.4z"/>`,
  ),

  elsewho: wrap(
    "ewh",
    `<rect width="64" height="64" rx="6" fill="#1b1410"/>
     <rect x="8" y="10" width="48" height="44" fill="#efe2cc" stroke="#c45c26" stroke-width="3"/>
     <path fill="#1b1410" d="M24 40c0-6 3.4-9 8-9s8 3 8 9H24z"/>
     <circle cx="28.2" cy="26" r="4.2" fill="#1b1410"/>
     <circle cx="37.4" cy="26" r="4.2" fill="#c45c26"/>
     <path fill="#c45c26" d="M36 40c.4-5 3-8 7.2-8 1.6 0 3 .5 4 1.4C44.6 37.4 41 40 36 40z"/>`,
  ),

  jigmoji: wrap(
    "jig",
    `<rect width="64" height="64" rx="16" fill="#ffe14a"/>
     <rect x="6" y="6" width="52" height="52" rx="12" fill="#14182a"/>
     <circle cx="24" cy="26" r="4.2" fill="#ffe14a"/>
     <circle cx="40" cy="26" r="4.2" fill="#ffe14a"/>
     <ellipse cx="32" cy="42" rx="13" ry="8" fill="#ff3d6e"/>
     <ellipse cx="32" cy="40" rx="9" ry="3.2" fill="#14182a" opacity=".35"/>`,
  ),

  "mood-pointer": wrap(
    "mdp",
    `<rect width="64" height="64" rx="14" fill="#12141a"/>
     <path d="M16 10v40l10-10 7.2 16.8 6.2-2.6L32.4 40H50z" fill="#b8f0c8"/>
     <path d="M19 16.5v27.2l7.2-7.2 6.6 15.2 2.4-1-6.6-15.2H45z" fill="#c5c8d0" opacity=".28"/>`,
  ),

  "pixel-penance": wrap(
    "pxl",
    `<rect width="64" height="64" fill="#f7f1e1"/>
     <g fill="#2b2118">
       <rect x="30" y="14" width="4" height="36"/>
       <rect x="18" y="26" width="28" height="4"/>
     </g>
     <rect x="30" y="10" width="4" height="5" fill="#e07a3d"/>
     <rect x="8" y="8" width="4" height="4" fill="#2b2118" opacity=".25"/>
     <rect x="52" y="52" width="4" height="4" fill="#2b2118" opacity=".25"/>
     <rect x="52" y="8" width="4" height="4" fill="#2b2118" opacity=".18"/>`,
  ),

  "pet-the-void": wrap(
    "void",
    `<rect width="64" height="64" rx="16" fill="#07060a"/>
     <defs>
       <radialGradient id="void-hole" cx="40%" cy="35%" r="70%">
         <stop offset="0%" stop-color="#2a2433"/>
         <stop offset="55%" stop-color="#0a0810"/>
         <stop offset="100%" stop-color="#000"/>
       </radialGradient>
     </defs>
     <circle cx="32" cy="32" r="20" fill="url(#void-hole)"/>
     <circle cx="32" cy="32" r="20" fill="none" stroke="#c4a574" stroke-width="1.2" opacity=".55"/>
     <circle cx="32" cy="32" r="8" fill="#000"/>
     <ellipse cx="26" cy="24" rx="6" ry="3" fill="#ece6dc" opacity=".08"/>`,
  ),

  "hunted-404": wrap(
    "h4",
    `<rect width="64" height="64" rx="8" fill="#111"/>
     <path fill="#ff4d4d" d="M10 44l8-24h6l8 24h-5.2l-1.5-4.8H16.8L15.2 44H10zm8.2-8.6h7.2L21.8 26zM36 44V20h5.2c6.6 0 10.4 3.4 10.4 9.2S47.8 38.4 41.2 38.4H41V44H36zm5.2-9.2h.6c3.2 0 5.2-1.8 5.2-5.2s-2-5-5.2-5h-.6v10.2z"/>
     <path d="M8 50c6 4 14 6 24 6s18-2 24-6" fill="none" stroke="#ff4d4d" stroke-width="1.6" stroke-linecap="round" opacity=".7"/>
     <path d="M14 50l2 4M22 52l1.4 4M32 53v4M42 52l-1.4 4M50 50l-2 4" stroke="#ff4d4d" stroke-width="1.3" stroke-linecap="round"/>`,
  ),
};

export function markSvg(id) {
  const svg = MARKS[id];
  if (!svg) throw new Error(`No mark for ${id}`);
  return svg;
}

export function ogSvg(toy) {
  const mark = markSvg(toy.id)
    .replace(/<\?xml[^>]*>/, "")
    .replace(/viewBox="0 0 64 64"/, `x="92" y="175" width="280" height="280" viewBox="0 0 64 64"`);
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${toy.bg}"/>
  <rect x="48" y="48" width="1104" height="534" fill="none" stroke="${toy.accent}" stroke-width="2" opacity=".45"/>
  ${mark}
  <text x="420" y="290" fill="${toy.fg}" font-family="Georgia, 'Times New Roman', serif" font-size="64" font-weight="600">${escapeXml(toy.name)}</text>
  <text x="420" y="340" fill="${toy.accent}" font-family="Consolas, 'Courier New', monospace" font-size="22" letter-spacing="6">${escapeXml(toy.acc)}  ·  ${escapeXml(toy.word)}</text>
  <text x="420" y="400" fill="${toy.fg}" font-family="Georgia, serif" font-size="22" opacity=".7">a Fun Toy</text>
</svg>`;
}

function escapeXml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
