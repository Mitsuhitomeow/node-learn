// подключение модулей
const fs = require('fs'); // file system
const path = require('path'); // path

// создадим файл с помощью node
fs.writeFile(
  path.join(__dirname, 'notes', 'mynotes.txt'),
  'Hello im a new File',
  (err) => {
    if (err) throw err;
    console.log('файл был создан')
  }
);