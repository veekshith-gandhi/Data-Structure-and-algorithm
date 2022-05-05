/** @format */

solving(`2
3 1
5 3 1
5 2
8 9 11 2 1`);

function solving(input) {
  input = input.split("\n");
  let T = +input[0];
  let start = 0;
  let first = 1;
  let sec = 2;

  while (start < T) {
    let inp = input[first].split(" ").map(Number);
    let arr = input[sec].split(" ").map(Number);
    let n = inp[0];
    let k = inp[1];
    let swap = k;

    while (swap > 0) {
      for (let i = k; i > 0; i--) {
        let temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
        swap--;
        console.log(arr, swap);
      }
    }
    start = start + 1;
    first = first + 2;
    sec = sec + 2;
  }
}
