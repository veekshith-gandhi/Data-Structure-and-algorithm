/** @format */

solving(`0 2 3 4 6 6 6 18 20 33 39`);
function solving(input) {
  let array = input.split(" ").map(Number);

  let res = findFixedPoint(array, array.length);
  console.log(res);
}

function findFixedPoint(arr, n) {
  console.log(arr, n);
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (arr[mid] == mid) {
      return mid;
    } else if (mid < arr[mid]) {
      high = mid + 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}
