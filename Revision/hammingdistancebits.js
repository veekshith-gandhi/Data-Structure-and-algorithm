/** @format */

solving(`1
15 7`);

function solving(input) {
  input = input.split("\n");
  let T = +input[0];
  let start = 0;
  let first = 1;
  while (start < T) {
    let inp = input[first].split(" ").map(Number);
    let No1 = inp[0];
    let No2 = inp[1];
    let value = No1 ^ No2;
    let setBits = 0;

    while (value > 0) {
      setBits = (setBits + value) & 1;
      console.log("se", setBits);
      value >>= 1;
      console.log(value);
    }
    // console.log(setBits);
    start = start + 1;
    first = first + 1;
  }
}
