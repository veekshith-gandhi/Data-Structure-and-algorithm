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
    let arr = input[sec].split(" ").map(Number);
    let obj = {};
    for (let i = 0; i < N; i++) {
      let value = arr[i];
      if (obj[value]) {
        obj[value]++;
      } else {
        obj[value] = 1;
      }
    }
    for (key in obj) {
      if (obj[key] == 1) {
        console.log(key);
      }
    }
    first = first + 2;
    sec = sec + 2;
    start = start + 1;
  }
}
