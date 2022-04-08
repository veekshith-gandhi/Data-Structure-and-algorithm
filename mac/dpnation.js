/** @format */

solving(`3
3
1 2 3
4
-1 -1 0 1
3
2 -1 2`);

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

function subarray(arr, n) {
  let maxi = 0,
    mini = Number.MIN_VALUE;
  for (let i = 0; i < n; i++) {
    if (arr[i] <= maxi + arr[i]) {
      maxi += arr[i];
      console.log(maxi);
    } else {
      maxi = arr[i];
    }
    if (maxi > mini) {
      mini = maxi;
    }
  }
  return mini;
}
