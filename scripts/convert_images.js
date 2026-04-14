const ffmpeg = require('ffmpeg-static');
const cp = require('child_process');
const path = require('path');
const fs = require('fs');

const dir = 'public/images/separate/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));

console.log(`Found ${files.length} images to convert...`);

files.forEach(file => {
  const input = path.join(dir, file);
  const output = path.join(dir, file.replace('.png', '.webp'));
  
  console.log(`Converting ${file} -> ${path.basename(output)}...`);
  
  try {
    // -q:v 75 で画質と容量のベストバランスを狙う
    cp.execSync(`"${ffmpeg}" -i "${input}" -q:v 75 "${output}" -y`, { stdio: 'inherit' });
    console.log(`Finished ${file}`);
  } catch (e) {
    console.error(`Failed to convert ${file}:`, e.message);
  }
});

console.log('All conversions complete!');
