import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const srcDir = path.resolve(rootDir, ".output/public");
const destDir = path.resolve(rootDir, "dist");

if (!fs.existsSync(srcDir)) {
  console.error(`[copy-dist] Error: Source directory does not exist: ${srcDir}`);
  process.exit(1);
}

const indexPath = path.join(srcDir, "index.html");
if (!fs.existsSync(indexPath)) {
  console.error(`[copy-dist] Error: index.html not found in ${srcDir}`);
  process.exit(1);
}

fs.rmSync(destDir, { recursive: true, force: true });
fs.cpSync(srcDir, destDir, { recursive: true });

console.log(`[copy-dist] Successfully copied static bundle from .output/public to ${destDir}`);
