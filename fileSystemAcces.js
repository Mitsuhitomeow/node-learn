const { stdout } = process;
const flag = process.argv[2];

function getFlageAcces() {

  if (flag === '-d') {
    stdout.write(__dirname);
  } else if (flag === '-f') {
    stdout.write(__filename);
  } else {
    stdout.write(`Введите флаг '-d' или '-f'...`);
  }
}

getFlageAcces()