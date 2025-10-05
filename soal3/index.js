const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findMissingNumber(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let n = arr.length;
  let sumExpected = ((min + max) * (n + 1)) / 2;
  let sumActual = arr.reduce((a, b) => a + b, 0);
  return sumExpected - sumActual;
}

rl.question("Masukkan array (pisahkan dengan koma): ", (input) => {
  let arr = input.split(",").map(num => parseInt(num.trim()));

  let missing = findMissingNumber(arr);
  console.log(`Output: ${missing}`);

  rl.close();
});
