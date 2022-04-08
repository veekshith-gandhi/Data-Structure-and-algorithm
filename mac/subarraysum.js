/** @format */

solving(`3
3
1 2 3
4
-1 -1 0 1
3
2 -1 2
`);

function solving(input) {
  input = input.split("\n");
  let T = +input[0];
  let start = 0;
  let first = 1;
  let sec = 2;
  while (start < T) {
    let N = +input[first];
    let array = input[sec].split(" ").map(Number);

    let res = subarray(array, N);
    console.log(String(res));

    start = start + 1;
    first = first + 2;
    sec = sec + 2;
  }
}

function subarray(array, N) {
  let start = 1;
  let total = 0;
  while (start < N) {
    let sum = 0;
    for (let i = 0; i < start; i++) {
      sum = sum + array[i];
    }
    // if(sum <)
    console.log(sum);
    for (let i = start; i < N; i++) {
      sum = sum + array[i];
      console.log(sum);
    }
    start = start + 1;
  }
}
