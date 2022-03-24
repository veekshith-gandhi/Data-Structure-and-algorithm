/** @format */

solving(`2
6
1 3 5 2 7 4
1
6 
1 3 5 2 7 4
2`);

function solving(input) {
  input = input.split("\n");
  let T = +input[0];
  let start = 0;
  let first = 1;
  let sec = 2;
  let third = 3;
  while (start < T) {
    let N = +input[first];
    let array = input[sec].split(" ").map(Number);
    let Q = +input[third];
    array.sort((a, b) => a - b);
    let odd = [];
    let even = [];
    for (let i = 0; i < N; i++) {
      if (array[i] % 2 === 0) {
        even.push(array[i]);
      } else {
        odd.push(array[i]);
      }
    }
    if (Q == 1) {
      console.log(even.concat(odd).join(" "));
    } else {
      console.log(odd.concat(even).join(" "));
    }
    start = start + 1;
    first = first + 3;
    sec = sec + 3;
    third = third + 3;
  }
}
