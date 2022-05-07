/** @format
 * dutch national flag algo
 * if swaped out elemnt zero comes then problem so not riting cur++ in case 2
 * o(n)
 * o(1)
 */

solving(`3
1
2
3
2 0 1
4
2 0 2 1`);

function solving(input) {
  input = input.split("\n");
  let T = +input[0];
  let start = 0;
  let first = 1;
  let sec = 2;
  console.log(input);
  while (start < T) {
    let N = +input[first];
    let array = input[sec].split(" ").map(Number);
    console.log(array);
    let left = 0;
    let right = array.length - 1;
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
    start = start + 1;
    first = first + 2;
    sec = sec + 2;
    console.log(array.join(" "));
  }
}
function swap(cur, direction, array) {
  let temp = array[cur];
  array[cur] = array[direction];
  array[direction] = temp;
  return array;
}
