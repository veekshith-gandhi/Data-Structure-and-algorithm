solving(`2
3
1 5 2
5
3 5 6 1 8`);

function solving(input) {
  input = input.split("\n");
  let T = input[0];
  let start = 0;
  let first = 1;
  let sec = 2;

  while (start < T) {
    let n = input[first];
    let arr = input[sec].split(" ").map(Number);
    difference(arr, n);
    start = start + 1;
    first = first + 2;
    sec = sec + 2;
  }
}
function difference(arr, n) {
  let diff = 0;
  for (i = 0; i < n - 1; i++) {
    diff += Math.abs(arr[i] - arr[i + 1]);
  }
  console.log(diff);
}
