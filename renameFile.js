const fs = require('fs');
const path = require('path');

fs.rename(
  path.join(__dirname, 'notes', 'mynotes.txt'),
  path.join(__dirname, 'notes', 'notes.txt'),
  err => {
    if (err) throw err;
    console.log('Файл переименован');
  }
);