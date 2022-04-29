/** @format */

solving(`2 3
3 1 8
2 6 0`);
// 00 01 02
// 10 11 12
// 20 21 22

function solving(input) {
  input = input.split("\n");
  let inp = input[0].split(" ");

  let n = +inp[0];
  let m = +inp[1];

  let array = [];

  for (let i = 1; i <= n; i++) {
    array.push(input[i].split(" ").map(Number));
  }
  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (array[i][j] % 3 == 0) {
        sum = sum + array[i][j];
      }
    }
  }
  console.log(sum);
}
