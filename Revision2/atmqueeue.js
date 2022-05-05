/** @format */

solving(`6
1 2 4 3 5 8`);

function solving(input) {
  input = input.split("\n");
  let n = +input[0];
  let arr = input[1].split(" ").map(Number);
  let count = 1;
  for (let i = 0; i < n; i++) {
    if (arr[i + 1] < arr[i]) {
      count += 1;
    }
  }
  console.log(count);
}
