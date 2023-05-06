const fs = require('fs');
const readableStream = fs.createReadStream('source.txt');
let data = '';
readableStream.on('data', chunk => data += chunk);
readableStream.on('end', () => console.log('End', data))
readableStream.on('error', error => console.log('Error', error.message))