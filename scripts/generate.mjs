#!/usr/bin/env node
/**
 * Rasterize unique SVG marks into each toy's public/ (or hub root / specter web/).
 * Usage: npm run generate
 *        npm run generate:dry   → writes to dist/ only
 */
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";
import { TOYS } from "../src/catalog.mjs";
import { markSvg, ogSvg } from "../src/marks.mjs";
import { pngsToIco } from "../src/ico.mjs";

const dry = process.argv.includes("--dry");
const kitRoot = fileURLToPath(new URL("..", import.meta.url));
const workRoot = path.resolve(kitRoot, "..");

async function raster(svg, size) {
  return sharp(Buffer.from(svg))
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
}

async function rasterFilled(svg, size, bg) {
  const { r, g, b } = hexRgb(bg);
  return sharp(Buffer.from(svg))
    .flatten({ background: { r, g, b } })
    .resize(size, size)
    .png()
    .toBuffer();
}

function hexRgb(hex) {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

async function writeToy(toy) {
  const dest = dry
    ? path.join(kitRoot, "dist", toy.id)
    : path.join(workRoot, toy.out, toy.publicDir);
  await mkdir(dest, { recursive: true });

  const svg = markSvg(toy.id);
  const og = ogSvg(toy);
  await writeFile(path.join(dest, "favicon.svg"), svg);
  await writeFile(path.join(dest, "logo.svg"), svg);

  const png32 = await raster(svg, 32);
  const png48 = await raster(svg, 48);
  const png64 = await raster(svg, 64);
  const apple = await rasterFilled(svg, 180, toy.bg);
  const ico = pngsToIco([png32, png48, png64]);
  await writeFile(path.join(dest, "favicon.ico"), ico);
  await writeFile(path.join(dest, "apple-touch-icon.png"), apple);
  await writeFile(
    path.join(dest, "og.png"),
    await sharp(Buffer.from(og)).png().toBuffer(),
  );

  const marksDir = dry
    ? path.join(kitRoot, "dist", "fun-toys", "marks")
    : path.join(workRoot, "fun-toys", "marks");
  await mkdir(marksDir, { recursive: true });
  await writeFile(path.join(marksDir, `${toy.id}.svg`), svg);

  console.log(`wrote ${toy.id} → ${dest}`);
}

for (const toy of TOYS) {
  await writeToy(toy);
}

console.log(`done (${TOYS.length} toys, dry=${dry})`);
