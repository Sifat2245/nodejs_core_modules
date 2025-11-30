const path = require('path');

// ----------------------
// Showing current file info
// ----------------------
console.log('current file info: \n');

// __filename = absolute path of this file
console.log('filename:', __filename);

// __dirname = absolute directory path of this file
console.log('directory name:', __dirname);

console.log('\n' + '-'.repeat(50) + '\n');

// ----------------------
// Working with a custom file path
// ----------------------
const filePath = '/sifat/documents/my-class.pdf';

console.log('analyzing path:', filePath, '\n');

// dirname() → returns directory of the path
console.log('directory:', path.dirname(filePath));

// basename() → returns the last part of the path (file name with extension)
console.log('base name:', path.basename(filePath));

// extname() → returns the file extension
console.log('File Extension:', path.extname(filePath));

// basename(path, extension) → file name without the extension
console.log('file name:', path.basename(filePath, path.extname(filePath)));

console.log('\n' + '-'.repeat(50) + '\n');

// ----------------------
// Parsing the path into an object
// ----------------------
const parsed = path.parse(filePath);

// parse() → breaks path into root, dir, base, ext, name
console.log('parsed path object:', parsed);

console.log('\n' + '-'.repeat(50) + '\n');

// ----------------------
// Formatting a path object back into a full path
// ----------------------
// format() → rebuilds the path string from the parsed object
console.log('formatted path:', path.format(parsed));
