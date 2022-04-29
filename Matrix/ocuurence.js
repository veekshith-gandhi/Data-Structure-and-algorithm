/**
 * find the sum 6 in all direction
 *  @format */

solving(`3 3 6
3 2 1
2 2 2
1 5 1`);

function solving(input) {
  input = input.split("\n");
  let inp = input[0].split(" ");

  let n = +inp[0];
  let m = +inp[1];
  let T = +inp[2];
  let array = [];

  for (let i = 1; i <= n; i++) {
    array.push(input[i].split(" ").map(Number));
  }

  let count = 0;
  let topdiagonal = 0;
  let bottomdiagonal = 0;

  for (let i = 0; i < n; i++) {
    let verical = 0;
    let horizontal = 0;

    for (let j = 0; j < m; j++) {
      verical += array[i][j];
      horizontal += array[j][i];

      if (i == j) {
        topdiagonal += array[i][j];
      }

      if (i + j == n - 1) {
        bottomdiagonal += array[i][j];
      }
    }

    if (verical === T) {
      count++;
    }
    if (horizontal === T) {
      count++;
    }
  }

  if (topdiagonal === T) {
    count++;
  }
  if (bottomdiagonal === T) {
    count++;
  }

  console.log(count);
}
