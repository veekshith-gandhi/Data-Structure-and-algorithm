/** @format */

solving(`6
3 4 3 2 7 2`);

function solving(input) {
  input = input.split("\n");
  let l = +input[0];
  let array = input[1].split(" ");
  let start = 1;
  while (start < l) {
    let sum = [];
    for (let i = 0; i < start; i++) {
      sum.push(array[i]);
    }
    console.log(sum);
    for (let i = start; i < l; i++) {
      sum.shift();
      sum.push(array[i]);
      console.log(sum);
    }
    start = start + 1;
  }
}
