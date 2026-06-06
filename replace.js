const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes('src\\app\\admin')) {
        results = results.concat(walk(file));
      }
    } else {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src').filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let newContent = content.replace(/(['"`])\/admin/g, match => match[0] + '/management-panel-8f3e91');
  if (content !== newContent) {
    fs.writeFileSync(f, newContent);
    console.log('Processed', f);
  }
});
