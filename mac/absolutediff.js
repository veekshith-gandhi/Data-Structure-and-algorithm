/** @format */

solving(`5
9 1 2 7 7`);

function solving(input) {
  input = input.split("\n");
  let n = input[0];
  let arr = input[1].split(" ").map(Number);
  let even = 0;
  let odd = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }
  console.log(Math.abs(even - odd));
}
