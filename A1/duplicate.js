/** @format */

solving(`3
1
1
2
1 1
3
1 2 3`);

function solving(input) {
  input = input.split("\n");
  let T = +input[0];
  let start = 0;
  let first = 1;
  let sec = 1;

  while (start < T) {
    let N = +input[first];
    let arr = input[sec].split(" ").map(Number);

    first = first + 2;
    sec = sec + 2;
    start = start + 1;
  }
}
