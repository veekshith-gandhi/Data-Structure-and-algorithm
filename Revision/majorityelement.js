/**
 *
 * Given an array A having N non - negative integers.Find the element that occurs more than
 * N / 2 times.If no such element is there then print - 1.
N = 6,
A : 1 1 1 1 2 3 1 has occurred 4 times which is greater 
than N/2. Hence 1 is the majority element.
 * @format
 */

solving(`2
6
1 1 1 1 2 4
5
1 1 2 2 3`);

function solving(input) {
  input = input.split("\n");
  let T = +input[0];
  let start = 0;
  let first = 1;
  let sec = 2;
  while (start < T) {
    let N = +input[first];
    let value;
    let array = input[sec].split(" ");
    let map = {};
    let isFound = false;
    array.forEach((i) => {
      if (map[i]) {
        map[i]++;
      } else {
        map[i] = 1;
      }
    });
    for (const key in map) {
      if (map[key] > N / 2) {
        value = key;
        isFound = true;
      }
    }
    if (isFound) {
      console.log(value);
    } else {
      console.log("-1");
    }

    start = start + 1;
    first = first + 2;
    sec = sec + 2;
  }
}
