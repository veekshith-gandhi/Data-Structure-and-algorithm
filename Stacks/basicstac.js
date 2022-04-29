/** @format */

solving(`6
1 15
1 20
2
3
2
3`);
function solving(input) {
  input = input.split("\n");
  let N = +input[0];
  let array = [];
  for (let i = 1; i < input.length; i++) {
    array.push(input[i].split(" ").map(Number));
  }
  let stack = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 1) {
      let num = array[i][0];
      let val = array[i][1];
      if (num == 1) {
        stack.push(val);
      }
    } else if (array[i] == 2) {
      stack.pop();
    } else if (array[i] == 3 && stack.length !== 0) {
      console.log(stack[stack.length - 1]);
    } else {
      console.log("Empty!");
    }
  }
}
