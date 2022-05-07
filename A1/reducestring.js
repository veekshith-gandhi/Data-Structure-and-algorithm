/** @format */

solving(`aaabccddd`);

function solving(input) {
  let arr = input.split("");

  let stack = [];
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    if (stack.length !== 0 && stack[stack.length - 1] == arr[i]) {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }
  console.log(stack.join(""));
}
