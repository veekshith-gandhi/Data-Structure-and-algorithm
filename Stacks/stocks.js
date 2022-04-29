/**
 * ip : 100 60 70 65 80 85`
 * ind: 1   2   3 4  5  6
 * op : 1 1 2 1 4 5
 * @format */

solving(`2
7
100 80 60 70 60 75 85
8
100 120 70 65 80 85 12 122`);

function solving(input) {
  input = input.split("\n");
  let T = +input[0];
  let start = 0;
  let first = 1;
  let sec = 2;
  while (start < T) {
    let n = +input[first];
    let arr = input[sec].split(" ").map(Number);
    let stack = [];
    let res = "";
    for (let i = 0; i < n; i++) {
      while (stack[stack.length - 1] <= arr[i] && stack.length !== 0) {
        res += i + " ";
        stack.pop();
      }
      stack.push(arr[i]);
    }
    start = start + 1;
    first = first + 2;
    sec = sec + 2;
    console.log(res);
  }
}
