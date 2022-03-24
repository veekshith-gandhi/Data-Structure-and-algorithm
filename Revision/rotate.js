/** @format
 * rotate from right direction
 */

solving(`3
7 4
1 2 3 4 5 6 7
2 2
1 2
2 3
1 2`);

function solving(input) {
  input = input.split("\n");
  let T = +input[0];
  let start = 0;
  let first = 1;
  let sec = 2;

  while (start < T) {
    let inp = input[first].split(" ");
    let N = +inp[0];
    let Rotate = +inp[1];
    let array = input[sec].split(" ").map(Number);
    let newArray = [];

    for (let i = 0; i < N; i++) {
      let index = Rotate % N;
      if (i < index) {
        console.log(i, N + i - index, i - index);
        newArray.push(array[N + i - index]);
      } else {
        console.log("ind", i, i - index);
        newArray.push(array[i - index]);
      }
    }

    console.log(newArray);
    start = start + 1;
    first = first + 2;
    sec = sec + 2;
  }
}
