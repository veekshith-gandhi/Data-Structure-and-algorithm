/** @format */

solving(`5
3 5 0 9 8`);

function solving(input) {
  input = input.split("\n");
  let n = +input[0];
  let arr = input[1].split(" ").map(Number);

  let min = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    } else if (max < arr[i]) {
      max = arr[i];
    }
  }

  console.log(min);
  console.log(max);
}
