const fs = require('fs');
const path = require('path');

const { stdin, stdout, exit } = process;

const createPath = path.join(__dirname, 'text.txt')

fs.createWriteStream(createPath)

stdout.write('Введите сообщение:\n');
stdin.on('data', data => {
  if (data.toString().trim() === 'exit') {
    exit()
  } else {
    fs.appendFile(
      createPath,
      data,
      err => {
        if (err) throw err;
      }
    )
  }
});