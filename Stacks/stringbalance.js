/** @format */

solving(`abaaabbbbcdd`);

function solving(inp) {
  let array = inp.split("");
  let stack = [];
  for (let i = 0; i < array.length; i++) {
    if (stack[stack.length - 1] == array[i] && stack.length != 0) {
      stack.pop();
    } else {
      stack.push(array[i]);
    }
  }
  console.log(stack);
}
