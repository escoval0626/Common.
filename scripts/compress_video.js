const ffmpeg = require('ffmpeg-static');
const cp = require('child_process');
const path = require('path');

const input = 'public/videos/hero_bg.mp4';
const output = 'public/videos/hero_bg_compressed.mp4';

console.log('Starting compression...');
console.log('Using ffmpeg from:', ffmpeg);

try {
  cp.execSync(`"${ffmpeg}" -i "${input}" -vcodec libx264 -crf 28 -preset fast -an "${output}"`, {
    stdio: 'inherit'
  });
  console.log('Compression successful!');
} catch (e) {
  console.error('Compression failed:', e.message);
  process.exit(1);
}
