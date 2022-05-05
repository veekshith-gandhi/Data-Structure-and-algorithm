/** @format */

solving(`1
1 4`);

function solving(input) {
  input = input.split("\n");
  let T = +input[0];
  let start = 0;
  let first = 1;
  while (start < T) {
    let inp = input[first].split(" ").map(Number);
    let x = inp[0];
    let y = inp[1];

    let result = 0;
    while (x > 0 || y > 0) {
      let No1 = x % 2;
      let No2 = y % 2;

      if (No1 !== No2) {
        result += 1;
      }
      console.log(No1, No2);
      x = Math.floor(x / 2);
      y = Math.floor(y / 2);
      console.log("...", x, y);
    }
    console.log(result, "result");

    start = start + 1;
    first = first + 1;
  }
}
