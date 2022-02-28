/** @format
 * lesser then k
 */

solving(`8 6
2 6 8 1 4 7 9 3`);

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
  while (left < right) {
    if (k == array[left] + array[right]) {
      console.log(array[left], array[right]);
      break;
    } else if (k <= array[left] + array[right]) {
      right--;
    } else {
      left++;
    }
  }
}
