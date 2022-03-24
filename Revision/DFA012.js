/** @format
 * dutch national flag algo
 * if swaped out elemnt zero comes then problem so not riting mid++ in case 2
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
    let mid = 0;

    while (mid < right) {
      switch (array[mid]) {
        case 0:
          swap(mid, left, array);
          left++;
          mid++;
          break;

        case 1:
          mid++;
          break;

        case 2:
          swap(mid, right, array);
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
function swap(mid, direction, array) {
  let temp = array[mid];
  array[mid] = array[direction];
  array[direction] = temp;
  return array;
}
