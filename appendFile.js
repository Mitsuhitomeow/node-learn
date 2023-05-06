const fs = require('fs');
const path = require('path');

// запись в тот же файл, еще какой либо информации
fs.appendFile(
  path.join(__dirname, 'notes', 'mynotes.txt'),
  'Hello im append file',
  err => {
    if (err) throw err;
    console.log('Файл был изменен')
  }
)