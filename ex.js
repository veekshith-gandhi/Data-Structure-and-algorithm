/** @format */

solving(`3 9
2 3 5`);

function solving(input) {
  input = input.split("\n");
  let inp = input[0].split(" ").map(Number);
  let l = +inp[0];
  let k = +inp[1];
  let array = input[1].split(" ").map(Number);
  let res = count(array, l, k);
  console.log(res);
}

function count(S, m, n) {
  if (n == 0) return 1;

  if (n < 0) return 0;

  if (m <= 0 && n >= 1) return 0;

  return count(S, m - 1, n) + count(S, m, n - S[m - 1]);
}
