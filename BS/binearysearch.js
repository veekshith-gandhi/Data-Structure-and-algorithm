/** @format */

solving(`7 4
2 3 4 5 6 7 8`);

function solving(input) {
  input = input.split("\n");
  let inp = input[0].split(" ");
  let N = +inp[0];
  let key = +inp[1];
  let array = input[1].split(" ").map(Number);

  let res = binearySearch(array, N, key);
  console.log(res);
}

function binearySearch(arr, n, k) {
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (k == arr[mid]) {
      return mid;
    } else if (k > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
}
