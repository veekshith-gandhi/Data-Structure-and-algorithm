solving(`123 3`);

function solving(input) {
  input = input.split(" ");
  let num = +input[0];
  let X = +input[1];
  console.log(num, X);
  let res = reapeat(num, X);
  console.log(res);
}
function reapeat(num, X) {
  let sum = X * digit(num);
  return digit(sum);
}
function digit(n) {
  return n % 9 == 0 ? 9 : n % 9;
}
