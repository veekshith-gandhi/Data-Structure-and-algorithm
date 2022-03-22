/** @format */

smallerLeft(`8
39 4 11 6 24 32 4 5`);

function smallerLeft(input) {
  input = input.split("\n");
  let N = +input[0];
  let array = input[1].split(" ").map(Number);
  let stack = [];
  let res = [];
  for (let i = 0; i < array.length; i++) {
    while (stack[stack.length - 1] > array[i] && stack.length !== 0) {
      stack.pop();
    }
    if (stack.length == 0) {
      res.push(-1);
    } else {
      res.push(stack[stack.length - 1]);
    }

    stack.push(array[i]);
  }
  console.log(res);
}
