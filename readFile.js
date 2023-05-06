const fs = require('fs');
const path = require('path');

// причтаем файл, выведя его в консоль.
fs.readFile(
  path.join(__dirname, 'notes', 'mynotes.txt'),
  'utf-8',
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

// саздаем следующий файл для обучения
fs.writeFile(
  path.join(__dirname, 'renameFile.js'),
  '',
  err => {
    if (err) throw err;
    console.log('file created')
  }
)