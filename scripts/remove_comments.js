/* eslint-disable */
const fs = require('fs');
const glob = require('glob');
const strip = require('strip-comments');

const files = glob.sync('src/**/*.{ts,tsx,js,jsx,css}');
let count = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  if (file.endsWith('.css')) {
    // Basic regex for CSS comments
    content = content.replace(/\/\*[\s\S]*?\*\//g, (match) => {
      if (match.includes('eslint') || match.includes('prettier')) return match;
      return '';
    });
  } else {
    // 1. First extract all eslint comments and replace with a placeholder
    const protectedComments = [];
    
    // We use a custom replace to find block and line comments using simple regex 
    // just to grab the eslint ones and stash them
    
    // Stash // eslint...
    content = content.replace(/\/\/.*eslint.*/g, (match) => {
      protectedComments.push(match);
      return `__ESLINT_COMMENT_${protectedComments.length - 1}__`;
    });
    
    // Stash /* eslint... */ 
    content = content.replace(/\/\*[\s\S]*?eslint[\s\S]*?\*\//g, (match) => {
      protectedComments.push(match);
      return `__ESLINT_COMMENT_${protectedComments.length - 1}__`;
    });

    // 2. Now use strip-comments
    content = strip(content);

    // 3. Strip JSX comments which sometimes strip-comments misses `{/* ... */}`
    content = content.replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, '');

    // 4. Restore eslint comments
    protectedComments.forEach((comment, i) => {
      content = content.replace(`__ESLINT_COMMENT_${i}__`, comment);
    });

    // 5. Cleanup empty lines left behind by comments
    // Strip trailing whitespace from all lines
    content = content.split('\n').map(line => line.trimEnd()).join('\n');
    // Replace multiple consecutive blank lines with a single one
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    count++;
  }
}

console.log(`Processed ${files.length} files. Modified ${count} files.`);
