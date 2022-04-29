/**
 * find the no of times rotated or rotated index or rotated elemnt
 * no of time rotated formalua == arr.length- result(or index)
 * rotted elemnt arr[low]||arr[mid]
 * rroted inddex shown bellow
 *  @format */

solving(`9
10 11 12 13 0 1 2 3 4`);

function solving(input) {
  input = input.split("\n");
  let N = +input[0];

  let arr = input[1].split(" ").map(Number);

  const result = rotatedIndex(arr, N);
  console.log(result);
}

function rotatedIndex(arr, n) {
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    let prev = (mid - 1) % n;
    let next = (mid + 1) % n;

    if (arr[low] <= arr[mid] && arr[mid] <= arr[high]) {
      return low;
    }
    if (arr[mid] <= arr[prev] && arr[mid] <= arr[next]) {
      return mid;
    } else if (arr[low] <= arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
