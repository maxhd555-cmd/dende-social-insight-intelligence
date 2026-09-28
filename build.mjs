import { copyFileSync, mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const outDir = resolve(root, 'dist');
const files = [
  'index.html',
  'styles.css',
  'dashboard-original.css',
  'app-v6.js',
  'manifest.webmanifest',
  'icon.svg',
  'sw.js'
];

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

for (const file of files) {
  copyFileSync(resolve(root, file), resolve(outDir, file));
}

console.log(`Built Dende Social Insight Intelligence static site (${files.length} files) -> dist/`);
