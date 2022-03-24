/** @format */

solving(`2
1
5
5
1 2 1 3 2`);

function solving(input) {
  input = input.split("\n");
  let T = +input[0];
  let start = 0;
  let first = 1;
  let sec = 2;
  while (start < T) {
    let N = +input[first];
    let array = input[sec].split(" ").map(Number);
    let obj = {};

    array.forEach((i) => {
      if (obj[i]) {
        obj[i]++;
      } else {
        obj[i] = 1;
      }
    });

    for (const key in obj) {
      if (obj[key] == 1) {
        console.log(key);
        break;
      }
    }

    start = start + 1;
    first = first + 2;
    sec = sec + 2;
  }
}
