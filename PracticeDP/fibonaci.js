/** @format */

let n = 9;
const result = fibo(n);
console.log(result);

function fibo(n) {
  let array = new Array(n + 1).fill(-1);
  array[0] = 0;
  array[1] = 1;
  if (n == 1) {
    return array[0];
  }
  if (n == 2) {
    return array;
  }
  for (let i = 2; i <= n; i++) {
    array[i] = array[i - 2] + array[i - 1];
  }
  return array;
}
