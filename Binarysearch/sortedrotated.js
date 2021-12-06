solving(`6 6
3 4 7 9 1 2`);

function solving(input) {
  input = input.split("\n");
  let inp = input[0].split(" ").map(Number);
  let N = inp[0];
  let T = inp[1];
  let arr = input[1].split(" ").map(Number);

  const result = searching(arr, N, T);
  console.log(result);
}

function searching(arr, N, T) {
  let low = 0;
  let high = N - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] == T) {
      return mid;
    } else if (arr[low] <= arr[mid]) {
      if (T >= arr[low] && T < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else if (arr[mid] <= arr[high]) {
      if (T > arr[mid] && T <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}
