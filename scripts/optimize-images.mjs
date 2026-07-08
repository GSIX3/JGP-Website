/**
 * One-command image optimizer — run `npm run optimize:images` after adding
 * any new image to src/assets so oversized originals never ship again.
 *
 * Rules:
 *  - photos (jpg/jpeg)            -> resized to max 1920px wide, WebP q75
 *  - logos (png, in companies/)   -> resized to fit 640x320, WebP q88 (alpha kept)
 *  - files already small (<150 KB) and .webp/.svg files are left untouched
 *
 * The original file is replaced by a .webp next to it; update the import.
 */
import sharp from "sharp";
import { readdirSync, statSync, unlinkSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ASSETS = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "src", "assets");
const SKIP_BYTES = 150 * 1024;

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const files = walk(ASSETS).filter((f) => /\.(png|jpe?g)$/i.test(f));
let converted = 0;

for (const file of files) {
  const bytes = statSync(file).size;
  if (bytes < SKIP_BYTES) continue;

  const isLogo = /[\\/]companies[\\/]/.test(file);
  const out = file.replace(/\.(png|jpe?g)$/i, ".webp");
  const pipeline = isLogo
    ? sharp(file)
        .resize({ width: 640, height: 320, fit: "inside", withoutEnlargement: true })
        .webp({ quality: 88, effort: 6, alphaQuality: 95 })
    : sharp(file)
        .rotate()
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 75, effort: 6 });

  const info = await pipeline.toFile(out);
  unlinkSync(file);
  converted++;
  console.log(
    `${path.relative(ASSETS, file)} -> .webp | ${Math.round(bytes / 1024)} KB -> ${Math.round(info.size / 1024)} KB (update the import!)`
  );
}

console.log(converted ? `${converted} file(s) optimized.` : "Nothing to optimize — all assets are already small.");
