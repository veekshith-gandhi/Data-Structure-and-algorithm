/** @format */

solving(`3
2 1
1 2
2 2
1 2
3 1
1 2 3`);

function solving(input) {
  input = input.split("\n");

  let T = +input[0];
  //   console.log(input);
  let start = 1;
  let first = 1;
  let sec = 2;
  while (start <= T) {
    let inp = input[first].split(" ");
    let n = +inp[0];
    let k = +inp[1];
    let arr = input[sec].split(" ").map(Number);

    let res = rotate(arr, k);
    console.log(res.join(" "));

    first = first + 2;
    start = start + 1;
    sec = sec + 2;
  }
}

function rotate(arr, k) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    let index = (k + i) % arr.length;
    array[index] = arr[i];
  }
  return array;
}
