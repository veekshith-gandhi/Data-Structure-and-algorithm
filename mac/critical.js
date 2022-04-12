/** @format */

solving(`2
2
3 1
7
1 3 2 2 3 2 2 2 7`);

function solving(input) {
  input = input.split("\n");
  let T = input[0];

  let start = 0;
  let first = 1;
  let sec = 2;
  while (start < T) {
    let res = [-1, -1];
    let N = input[first];
    let arr = input[sec].split(" ").map(Number);
    // if (arr.length <= 2) {
    //   console.log(res.join(" "));
    // }
    //   let prev
    let max = [];
    let min = [];
    for (let i = 1; i < arr.length - 1; i++) {
      let prev = i;
      let cur = i;

      if (arr[i] > arr[cur + 1] && arr[i] > arr[prev - 1]) {
        max.push(i + 1);
        res[1] = i;
      }
      if (arr[i] < arr[cur + 1] && arr[i] < arr[prev - 1]) {
        min.push(i + 1);
        res[0] = i;
      }
    }

    console.log(res);
    start = start + 1;
    first = first + 2;
    sec = sec + 2;
  }
}
