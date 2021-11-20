let arr = [2, 3, 5, 6, 7, 8, 9, 24, 56, 77, 99];
let key = 7;
const result = BinearySearch(arr, key);
console.log(result);
function BinearySearch(arr, key) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (key == arr[mid]) {
      return mid;
    } else if (key < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}
