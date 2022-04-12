/** @format */

solving(`12 4
1 1 2 3 3 4 4 4 4 4 4 5`);

function solving(input) {
  input = input.split("\n");
  let inp = input[0].split(" ");
  let N = +inp[0];
  let key = +inp[1];
  let array = input[1].split(" ").map(Number);

  let first = firstOccurenc(array, N, key);
  let last;
  if (first != -1) {
    last = lastOccuence(array, N, key);
  } else {
    console.log(first);
  }
  //   console.log(last, first);
  if (first != -1 && last != -1) {
    console.log(last - first + 1);
  }
}

function firstOccurenc(arr, n, key) {
  let low = 0;
  let high = n - 1;
  let result = -1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (key == arr[mid]) {
      result = mid;
      high = mid - 1;
    } else if (key > arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return result;
}

function lastOccuence(arr, n, key) {
  let low = 0;
  let high = n - 1;
  let result = -1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (key == arr[mid]) {
      result = mid;
      low = mid + 1;
    } else if (key > arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return result;
}
