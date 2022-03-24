/** @format
 * BF o(n3)
 * sorting + 2 pointer takes o(n2)
 */

solving(`12 2 4 6 1 9`);

function solving(input) {
  let array = input.split(" ").map(Number);
  let sum = 24;
  array.sort((a, b) => a - b);
  console.log(array);
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    console.log(i);
    while (left < right) {
      console.log(left, right);
      if (array[i] + array[left] + array[right] === sum) {
        console.log(i, left, right);
        break;
      } else if (array[i] + array[left] + array[right] < sum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return false;
}
