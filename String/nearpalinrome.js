/** @format */

solving(`2
2 1
ca
6 2
abcdef`);

function solving(input) {
  input = input.split("\n");
  let T = +input[0];

  let start = 0;
  let first = 1;
  let sec = 2;
  while (start < T) {
    let inp = input[first].split(" ");
    let N = +inp[0];
    let K = +inp[1];
    let arr = input[sec].split("");
    let result = checkPalindrome(arr, N, K);
    console.log(result);
    start = start + 1;
    first = first + 2;
    sec = sec + 2;
  }
}

function checkPalindrome(arr, n, k) {
  let left = 0;
  let right = n - 1;
  while (left < right) {
    console.log(k);
    if (k >= 1) {
      if (arr[left] == arr[right]) {
        console.log(arr[left], arr[right]);
        left++;
        right--;
      } else {
        k--;
        left++;
        right--;
      }
    } else {
      return false;
    }
  }
  return true;
}
