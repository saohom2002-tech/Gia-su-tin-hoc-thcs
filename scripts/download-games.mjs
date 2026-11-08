import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const BASE = 'https://gamestbs.netlify.app';
const files = [
  'index.html',
  'logo.png',
  'assets/css/app.css',
  'assets/css/games.css',
  'data/questions-offline.js',
  'assets/js/config.js',
  'assets/js/core/utils.js',
  'assets/js/core/art.js',
  'assets/js/core/quiz.js',
  'assets/js/core/demo-data.js',
  'assets/js/core/firebase.js',
  'assets/js/core/data.js',
  'assets/js/core/importer.js',
  'assets/js/core/room.js',
  'assets/js/games/kit.js',
  'assets/js/games/keo-co.js',
  'assets/js/games/race.js',
  'assets/js/games/xuc-xac.js',
  'assets/js/games/dau-truong.js',
  'assets/js/games/trieu-phu.js',
  'assets/js/games/lat-manh.js',
  'assets/js/games/vong-quay.js',
  'assets/js/games/shooter.js',
  'assets/js/games/o-chu.js',
  'assets/js/games/olympia.js',
  'assets/js/activities/duck-race.js',
  'assets/js/pages/home.js',
  'assets/js/pages/player.js',
  'assets/js/admin/admin.js',
  'assets/js/app.js'
];

const outDir = path.resolve('public/games');

for (const f of files) {
  const target = path.join(outDir, f);
  const dir = path.dirname(target);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const url = `${BASE}/${f}`;
  try {
    execSync(`curl.exe -s -L -o "${target}" "${url}"`);
    const size = fs.existsSync(target) ? fs.statSync(target).size : 0;
    console.log(`Saved ${f} (${size} bytes)`);
  } catch (err) {
    console.error(`Failed ${f}:`, err.message);
  }
}
