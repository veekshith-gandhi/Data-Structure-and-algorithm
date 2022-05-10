/** @format */

solving(`8
push 5
push 3
push 1
getMin
pop
getMin
pop
getMin`);

function solving(input) {
  input = input.split("\n");

  let T = +input[0];
  let stack = [];
  for (let i = 1; i <= T; i++) {
    let splits = input[i].split(" ");
    let key;
    let value;

    if (splits.length > 1) {
      key = splits[0];
      value = +splits[1];
    } else {
      key = splits[0];
    }

    if (key === "push") {
      stack.push(value);
    } else if (key === "getMin") {
      console.log(Math.min(...stack));
    } else if (key === "pop") {
      stack.pop();
    }
  }
}
