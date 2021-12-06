const result = solving(`1 1 2 2 3 3 3 3 3 3 4 5 6 6 6 7`);
console.log(result);
function solving(input) {
  let arr = input.split(" ");
  let target = 3;
  let low = 0;
  let ind = -1;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (target == arr[mid]) {
      ind = mid;
      high = mid - 1;
      //   last occurence
      //   low = mid + 1;
    } else if (target > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ind;
}
