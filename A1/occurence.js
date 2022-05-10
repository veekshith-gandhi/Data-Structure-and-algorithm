/** @format */

solving(`6 3
1 1 2 2 3 3 3 3 3 3 4 5 6 6 6 7`);

function solving(input) {
  input = input.split("\n");
  let inp = input[0].split(" ").map(Number);
  let N = inp[0];
  let K = inp[1];
  let array = input[1].split(" ").map(Number);

  let first = firstOccu(array, K);
  let last = lastOccu(array, K);

  if (first == -1 && last == -1) {
    console.log(0);
  } else {
    console.log(last - first + 1);
  }
}

function lastOccu(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  let ind = -1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (k == arr[mid]) {
      ind = mid;
      low = mid + 1;
    } else if (k > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ind;
}

function firstOccu(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  let ind = -1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (k == arr[mid]) {
      ind = mid;
      high = mid - 1;
    } else if (k > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ind;
}
