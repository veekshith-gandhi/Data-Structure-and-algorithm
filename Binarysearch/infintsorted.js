// not simplified

solving(`1 1 1 2 2 2 2 2 2 3 3 3 3 3 4 7 8 9`);
function solving(inp) {
  let arr = inp.split(" ");
  let target = 3;
  let low = 0;
  let high = 1;
  while (target > arr[high]) {
    low = high;
    high = high * 2;
  }
  const res = binearsearch(arr, target, low, high);
  console.log(res);
}

function binearsearch(arr, target, low, high) {
  let ind = -1;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (target == arr[mid]) {
      ind = mid;
    } else if (target > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ind;
}
