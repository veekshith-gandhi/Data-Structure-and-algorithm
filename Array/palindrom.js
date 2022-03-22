/** @format */

plindrom(`2
5
111 272 333 449 555
3
121 131 121`);

function plindrom(input) {
  input = input.split("\n");
  let T = +input[0];
  let start = 0;
  let first = 1;
  let sec = 2;
  while (start < T) {
    let N = +input[first];
    let array = input[sec].split(" ");
    let result;
    for (let i = 0; i < N; i++) {
      result = pal(array[i]);
      if (!result) break;
    }
    if (result) {
      console.log("PAlo");
    } else {
      console.log("no PAlo");
    }
    start = start + 1;
    first = first + 2;
    sec = sec + 2;
  }
}
function pal(inp) {
  let arr = inp.split("");
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    if (arr[l] == arr[r]) {
      console.log(arr[l], arr[r]);
      l++;
      r--;
    } else {
      return false;
    }
    return true;
  }
}
