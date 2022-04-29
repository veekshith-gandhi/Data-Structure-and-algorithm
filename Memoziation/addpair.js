/** @format */

solving(`5 -2
0 -1 2 -3 1`);

function solving(input) {
  input = input.split("\n");
  let inp = input[0].split(" ");
  let N = +inp[0];
  let sum = +inp[1];
  let arr = input[1].split(" ").map(Number);
  pair(arr, N, sum);
}

function pair(arr, n, k) {
  let obj = {};
  for (let i = 0; i < n; i++) {
    let value = k - arr[i];
    if (obj.hasOwnProperty(arr[i])) {
      console.log(arr[obj[arr[i]]], arr[i]);
      break;
    } else {
      obj[value] = i;
    }
  }
  console.log(obj);
}
