/** @format */

solving(`5 10
1 2 3 4 5`);

function solving(input) {
  input = input.split("\n");
  let inp = input[0].split(" ");
  let n = +inp[0];
  let k = +inp[1];
  let arr = input[1].split(" ").map(Number);
  subsetSums(arr, n, k);
}
function subsetSums(arr, n, k) {
  let total = 1 << n;
  let count = 0;
  for (let i = 0; i < total; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      if ((i & (1 << j)) != 0) {
        sum += arr[j];
      }
    }
    if (sum == k) {
      count++;
    }
  }
  console.log(count);
}
