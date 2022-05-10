/** @format */

solving(`2
15
128`);

function solving(input) {
  input = input.split("\n");
  let T = input[0];
  let first = 1;
  let start = 0;
  while (start < T) {
    let num = +input[first];

    let result = binaryform(num);
    console.log(result);
    start = start + 1;
    first = first + 1;
  }
}

function binaryform(num) {
  if (num == 0) {
    return 0;
  } else {
    return (num % 2) + 10 * binaryform(parseInt(num / 2));
  }
}
