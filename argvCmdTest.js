const { stdin, stdout, exit } = process;
const flag = process.argv[2];
const isFlag = ['-m','-s'];

if(!isFlag.includes(flag)) {
  stdout.write('Вы не ввили флаг, попробуйте еще раз');
  exit();
}

stdout.write('Введите 2 числа: \n')
stdin.on('data', (data) => {
  const flagSum = process.argv.indexOf('-s');
  const flagMul = process.argv.indexOf('-m');
  const strData = data.toString();
  const arrData = strData.trim().split(' ');
  const arrFilter = arrData.filter(el => +el !== 0);
  const sum = +arrFilter[0] + +arrFilter[1];
  const mul = arrFilter[0] * arrFilter[1];

  if (arrFilter.length !== 2) {
    stdout.write('Вы должны ввести 2 числа!');
    exit();
  }

  if (flagSum !== -1) {
    stdout.write(`${arrFilter[0]} + ${arrFilter[1]} = ${sum.toString()}`);
  } else if (flagMul !== -1) {
    stdout.write(`${arrFilter[0]} * ${arrFilter[1]} = ${mul.toString()}`);
  }

  exit()
})



// const { stdin, stdout } = process;
// stdin.on('data', data => stdout.write(data));