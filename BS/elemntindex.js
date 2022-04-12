/**
 * element should be present in  i or i+1 or i-1
 *sorted array with midlle jumbeled
 *
 * @format
 */

solving(`8 25
2 8 4 9 11 16 13 25`);

function solving(input) {
  input = input.split("\n");
  let inp = input[0].split(" ");
  let N = +inp[0];
  let K = +inp[1];
  let arr = input[1].split(" ").map(Number);

  const result = index(arr, N, K);
  console.log(result);
}

function index(arr, n, k) {
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (k == arr[mid]) {
      return mid;
    } else if (k == arr[mid + 1]) {
      return mid + 1;
    } else if (k == arr[mid - 1]) {
      return mid - 1;
    }
    if (k <= arr[mid]) {
      high = mid - 2;
    } else {
      low = mid + 2;
    }
  }
  return -1;
}
