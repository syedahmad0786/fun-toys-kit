# Fun Toys Kit

A **factory**, not a theme. Fun Toys are eighteen separate art directions. This repo exists so logos, favicons, and motion/3D primitives are made on purpose instead of pasted as random CSS.

Live cabinet: https://fun-toys-alpha.vercel.app

## What it is

1. **Mark factory** (`src/marks.mjs` + `scripts/generate.mjs`)  
   Unique SVG geometry per toy (cabinet keyhole, ink blot, enamel button, tarot shield, vapor orb, film gate, CRT ghost, fused rings, bulletin rules, peeling sticker, newspaper clock, rake tines, wax seal, split yearbook, sticker mouth, phosphor cursor, candle cross, event horizon, hunting 404). Never a shared monogram.  
   Writes into each toy’s `public/` (hub root, Specter `web/`):
   - `favicon.svg` / `logo.svg` (source of truth)
   - `favicon.ico` (32/48/64 PNG-in-ICO)
   - `apple-touch-icon.png` (180)
   - `og.png` (1200×630)
   - plus `fun-toys/marks/{id}.svg` for the cabinet cards

2. **Motion / 3D primitives** (`primitives/`)  
   Copy-paste only. Re-token to the toy you are in.
   - Grain, vignette, specular, 3D stage, press spring, enter
   - Vanilla tilt + Motion One enter (`motion` package)
   - React / Framer Motion / R3F notes
   - `prefers-reduced-motion` kills heavy 3D and parallax

## Commands

```bash
npm install
npm run generate        # writes into sibling Fun Projects toys
npm run generate:dry    # writes to dist/ only
```

Vanilla toys stay vanilla. Use Motion One, GSAP, CSS view timelines, or Three.js — do not rewrite them in React just to get Framer Motion.

## Author

Ahmad Bukhari · MIT 2026 · [syedahmad0786](https://github.com/syedahmad0786)
