/** @format */

solving(`8
39 27 11 4 24 32 32 1`);

function solving(input) {
  input = input.split("\n");
  let n = input[0];
  let arr = input[1].split(" ").map(Number);
  let stack = [];
  let res = "";
  for (let i = 0; i < n; i++) {
    while (stack[stack.length - 1] >= arr[i] && stack.length !== 0) {
      stack.pop();
    }

    if (stack.length !== 0) {
      res = res + stack[stack.length - 1] + " ";
    } else {
      res = res + "-1" + " ";
    }
    stack.push(arr[i]);
  }
  console.log(res);
}
