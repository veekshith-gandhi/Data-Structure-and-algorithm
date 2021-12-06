/*Given a sorted array of integers, return indices of two numbers
 such that they add up to a target value.

*/

const res = solving(`1
4 9
2 7 11 15`);
console.log(res);
function solving(input) {
  input = input.split("\n");
  let T = input[0];
  let [N, key] = input[1].split(" ").map(Number);
  let arr = input[2].split(" ").map(Number);

  let low = 0;
  let high = N - 1;
  console.log(arr[low], arr[high]);
  while (low <= high) {
    let mid = low - Math.floor((high + low) / 2);
    if (arr[low] + arr[high] == key) {
      return low, high;
    } else if (arr[mid] < key) {
      low = mid + 1;
    } else if (mid > key) {
      high = mid + 1;
    }
  }
  return -1;
}
