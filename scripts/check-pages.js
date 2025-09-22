const fs = require('fs');
const path = require('path');

function findPages(dir) {
  const results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      results.push(...findPages(full));
    } else if (item.isFile() && item.name === 'page.tsx') {
      results.push(full);
    }
  }
  return results;
}

const appDir = path.join(process.cwd(), 'src', 'app');
if (!fs.existsSync(appDir)) process.exit(0);
const pages = findPages(appDir);
const errors = [];
for (const p of pages) {
  const content = fs.readFileSync(p, 'utf8');
  if (!/export\s+default/.test(content)) {
    errors.push(p);
  }
}
if (errors.length) {
  console.error('Found page.tsx files without an export default (these will break Next builds):');
  for (const e of errors) console.error(' -', e);
  process.exit(2);
}
console.log('All page.tsx files look good.');
