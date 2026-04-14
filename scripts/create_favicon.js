const ffmpeg = require('ffmpeg-static');
const cp = require('child_process');
const path = require('path');

const input = 'public/icon.png';
const output = 'public/favicon.ico';

console.log(`Converting ${input} -> ${output}...`);

try {
  // .ico 形式に変換 (32x32)
  cp.execSync(`"${ffmpeg}" -i "${input}" -s 32x32 "${output}" -y`, { stdio: 'inherit' });
  // src/app にもコピー
  cp.execSync(`copy "${output}" "src\\app\\favicon.ico"`, { stdio: 'inherit', shell: true });
  console.log('Finished creating favicon.ico and deploying to app directory.');
} catch (e) {
  console.error('Failed to convert favicon:', e.message);
}
