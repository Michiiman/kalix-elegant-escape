import { existsSync, readdirSync, statSync } from "node:fs";
import { join, extname, basename } from "node:path";
import sharp from "sharp";

const root = join(process.cwd(), "src", "img", "scorts");
const supportedExtensions = new Set([".jpg", ".jpeg", ".png"]);

const findImages = (directory) => {
  if (!existsSync(directory)) return [];

  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return findImages(path);
    return supportedExtensions.has(extname(entry.name).toLowerCase()) ? [path] : [];
  });
};

const optimize = async (sourcePath) => {
  const outputPath = join(sourcePath, "..", `${basename(sourcePath, extname(sourcePath))}.webp`);
  const sourceStat = statSync(sourcePath);

  if (existsSync(outputPath) && statSync(outputPath).mtimeMs >= sourceStat.mtimeMs) return false;

  await sharp(sourcePath)
    .rotate()
    .webp({ quality: 78, effort: 4 })
    .toFile(outputPath);

  return true;
};

const images = findImages(root);
const results = await Promise.all(images.map(optimize));
const optimizedCount = results.filter(Boolean).length;

console.log(`Imágenes WebP actualizadas: ${optimizedCount}/${images.length}.`);