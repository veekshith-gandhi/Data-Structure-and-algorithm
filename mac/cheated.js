/** @format */

solving(`5
2 5 8 9 11`);

function solving(input) {
  input = input.split("\n");
  let N = input[0];
  let arr = input[1].split(" ").map(Number);
  let left = arr[0];
  let right = arr[N - 1];
  let res = [];
  for (let i = left; i <= right; i++) {
    res.push(i);
  }
  console.log(res.join(" "));
}
