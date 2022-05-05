/** @format */

solving(`3
3 1
1 2 3
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
    let inp = input[first].split(" ").map(Number);
    let N = inp[0];
    let rotate = inp[1];
    // console.log(inp);
    let array = input[sec].split(" ").map(Number);
    let newaray = [];
    for (let i = 0; i < N; i++) {
      let index = rotate % N;

      if (i < index) {
        // console.log(i, N + i - index, i - index);
        newaray.push(array[N + i - index]);
      } else {
        // console.log("ind", i, i - index);
        newaray.push(array[i - index]);
      }

      //   newaray.push(array[index]);
    }
    console.log(newaray.join(" "));
    first = first + 2;
    sec = sec + 2;
    start = start + 1;
  }
}
