solving(`10
4 6 7 9 10 -1 0 1 2 3`);

function solving(input) {
  input = input.split("\n");
  let N = input[0];
  let arr = input[1].split(" ").map(Number);
  const result = searching(arr, N);
  console.log(result);
}
function searching(arr, N) {
  let low = 0;
  let high = N - 1;
  if (arr[low] <= arr[high]) {
    return arr[low];
  }
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    console.log("mid", mid);
    if (arr[mid] < arr[mid - 1]) {
      return arr[mid];
    } else if (arr[mid] > arr[mid + 1]) {
      return arr[mid + 1];
    } else if (arr[low] <= arr[mid]) {
      console.log("helo");
      low = mid + 1;
    } else {
      high = mid - 1;
    }
    console.log("helo");
  }
  return -1;
}
