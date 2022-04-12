/** @format */

solving(`1
3 2 4 15`);

function solving(input) {
  input = input.split("\n");
  let t = input[0];
  let arr = input[1].split(" ");
  let a = +arr[0];
  let b = +arr[1];
  let c = +arr[2];
  let k = +arr[3];
  console.log(a, b, c, k);
  let res = find(a, b, c, k);
  console.log(res);
}

function find(a, b, c, k) {
  let x = Number.MAX_VALUE;

  if (k <= c) {
    return -1;
  }

  let h = k - c;
  let l = 0;

  while (l <= h) {
    //  let mid = low + Math.floor((high - low) / 2);
    let mid = Math.floor((l + h) / 2);
    let first = a * mid * mid;
    let sec = b * mid;
    if (first + sec > k - c) {
      x = Math.min(x, mid);
      h = mid - 1;
    } else if (first + sec < k - c) {
      l = mid + 1;
    } else {
      return mid;
    }
  }
  return x;
}
