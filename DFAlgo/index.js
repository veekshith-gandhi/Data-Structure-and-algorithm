/** @format */

solving(`9
2 2 0 2 1 1 0 2 1`);

function solving(input) {
  input = input.split("\n");
  let N = +input[0];
  let array = input[1].split(" ").map(Number);

  let left = 0;
  let right = N - 1;
  let cur = 0;

  while (cur <= right) {
    switch (array[cur]) {
      case 0:
        swap(cur, left, array);
        left++;
        cur++;
        break;
      case 1:
        cur++;
        break;
      case 2:
        swap(cur, right, array);
        right--;
        break;
      default:
        break;
    }
  }
  console.log(array);
}
function swap(cur, direction, array) {
  let temp = array[cur];
  array[cur] = array[direction];
  array[direction] = temp;
  return array;
}
