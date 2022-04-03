/** @format */

solving(`1 10`);

function solving(input) {
  input = input.split(" ");
  let l = +input[0];
  let r = +input[1];
  let sum = 0;

  for (let i = l; i <= r; i++) {
    if (i !== 1) {
      let res = prime(i);
      if (res) {
        console.log("i", i);
        sum = sum + i;
      }
    }
  }
  console.log(sum);
}

function prime(param) {
  for (let i = 2; i < param; i++) {
    if (param % i == 0) {
      return false;
    }
  }
  return true;
}
