/** @format */

solving(`2 8`);

function solving(input) {
  input = input.split(" ");
  let X = +input[0];
  let N = +input[1];
  let res = 1 + X;
  let start = 1;

  while (N > start) {
    res = res + expo(X, N);
    N = N - 1;
  }
  console.log(res.toFixed(4));
}

function factorial(n) {
  console.log(n);
  let res = 1;
  for (let i = n; i > 0; i--) {
    res = res * i;
  }
  return res;
}
function expo(X, N) {
  let res = X ** N / factorial(N);
  return res;
}
