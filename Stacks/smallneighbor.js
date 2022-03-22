/** @format */

smaller(`8
39 4 11 6 24 32 4 5`);

function smaller(input) {
  input = input.split("\n");
  let N = +input[0];
  let array = input[1].split(" ").map(Number);
  let stack = [];
  for (let i = 0; i < N; i++) {
    if (array[i] > array[i - 1]) {
      stack.push(array[i - 1]);
    } else if (array[i] > array[i + 1]) {
      stack.push(array[i + 1]);
    } else {
      stack.push(-1);
    }
  }
  console.log(stack);
}
