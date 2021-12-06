const res = solving(`1 2 3 4 7 8 9`);
console.log(res);
function solving(input) {
  let arr = input.split(" ");
  let target = 5;
  let low = 0;
  let floor = -1;
  let ceil = -1;
  let high = arr.length - 1;
  //   console.log(arr);
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (target == arr[mid]) {
      floor = arr[mid];
      ceil = arr[mid];
      break;
    } else if (target > arr[mid]) {
      floor = arr[mid];
      low = mid + 1;
    } else {
      ceil = arr[mid];
      high = mid - 1;
    }
  }
  return [floor, ceil];
}
