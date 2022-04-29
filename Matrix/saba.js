/** @format */

solving(`5 5
safer
amjad
babol
aaron
songs`);

// 00 01 02 03 04
// 10 11 12 13 14
// 20 21 22 23 24
// 30 31 32 33 34
// 40 41 42 43 44

function solving(input) {
  input = input.split("\n");
  let inp = input[0].split(" ");

  let m = +inp[0];
  let n = +inp[1];
  let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(input[i].split(""));
  }

  let string = "saba";
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      //vertical check
      let vertical = "";
      let horizontal = "";
      let topdiagonal = "";
      let downdiagonal = "";

      if (j < n - 3) {
        vertical =
          vertical +
          array[i][j] +
          array[i][j + 1] +
          array[i][j + 2] +
          array[i][j + 3];
        if (vertical == string) {
          count++;
        }
      }

      //horizontal check
      if (i < n - 3) {
        horizontal +=
          array[i][j] + array[i + 1][j] + array[i + 2][j] + array[i + 3][j];
        if (horizontal == string) {
          count++;
        }
      }

      //topdiagonal
      if (i == j && i < n - 3) {
        topdiagonal +=
          array[i][j] +
          array[i + 1][j + 1] +
          array[i + 2][j + 2] +
          array[i + 3][j + 3];
        if (topdiagonal == string) {
          count++;
        }
      }

      //downdiagonal
      if (i + j == n - 1 && i >= n - 3 && j < n - 3) {
        downdiagonal +=
          array[i][j] +
          array[i - 1][j + 1] +
          array[i - 2][j + 2] +
          array[i - 3][j + 3];
        if (downdiagonal == string) {
          count++;
        }
      }
    }
  }
  console.log(count);
}
