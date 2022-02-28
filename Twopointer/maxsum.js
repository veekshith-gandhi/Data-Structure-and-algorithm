/** @format
 * max sum  lesser then k
 */

solving(`7 5
2 3 1 4 6 7 8`);

function solving(input) {
  input = input.split("\n");
  let inp = input[0].split(" ").map(Number);
  let l = +inp[0];
  let k = +inp[1];
  let array = input[1].split(" ").map(Number);
  array.sort((a, b) => a - b);

  console.log(array);
  let left = 0;
  let right = l - 1;
  let max = -1;
  while (left < right) {
    let sum = array[left] + array[right];
    if (k <= sum) {
      right--;
    } else {
      if (sum > max) {
        max = sum;
      }
      left++;
    }
  }
  console.log(max);
}
