solving(`1 1 2 2 3 3 3 3 3 3 4 5 6 6 6 7`);
function solving(input) {
  let arr = input.split(" ");
  let target = 13;
  let x = firstOccurence(arr, target);
  let y = lastOccuence(arr, target);
  if (x == -1 && y == -1) {
    console.log(0);
  } else {
    console.log(y - x + 1);
  }
}
function firstOccurence(arr, target) {
  let low = 0;
  let ind = -1;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (target == arr[mid]) {
      ind = mid;
      high = mid - 1;
    } else if (target > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ind;
}
function lastOccuence(arr, target) {
  let low = 0;
  let ind = -1;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (target == arr[mid]) {
      ind = mid;
      low = mid + 1;
    } else if (target > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ind;
}
