// подключение модуля
const fs = require('fs'); // модуль для файлов
const path = require('path'); // модуль для работы с путями

// для создании папки два метода
// асинхронный fs.mkdir
// синхронный fs.mkdirSync

// создать папку в текущей дериктории
fs.mkdir(path.join(__dirname, 'notes'), err => {
  if (err) throw err;
  console.log('Папка была создана');
})