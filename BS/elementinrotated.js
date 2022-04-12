/**
 * find the elemnt in roataed array
 * first split into 2 using mid and apply BS on both side and check condition lyes with the range
 *
 * @format */

solving(`8 9
3 4 5 6 8 9 1 3`);

function solving(input) {
  input = input.split("\n");
  let inp = input[0].split(" ").map(Number);
  let N = inp[0];
  let T = inp[1];
  let arr = input[1].split(" ").map(Number);

  const result = findelemnt(arr, N, T);
  console.log(result);
}

function findelemnt(arr, n, k) {
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (arr[mid] == k) {
      return mid;
    } else if (arr[low] <= arr[mid]) {
      if (k >= arr[low] && k <= arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (k >= arr[mid] && k <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}
