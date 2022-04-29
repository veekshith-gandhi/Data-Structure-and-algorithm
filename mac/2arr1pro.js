/** @format */

solving(`2
3
1 2 3
2 3 1
3
1 2 3
2 3 1`);

function solving(input) {
  input = input.split("\n");

  let T = +input[0];
  //   console.log(input);
  let start = 1;
  let first = 1;
  let sec = 2;
  while (start <= T) {
    let N = +input[first];
    let array = [];
    for (let i = sec; i < sec + 2; i++) {
      array.push(input[i].split(" ").map(Number));
    }
    let res = product(array);
    console.log(String(res));
    first = first + 3;
    start = start + 1;
    sec = sec + 3;
  }
}

function product(arr) {
  let pro = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      pro = pro * arr[i][j];
    }
  }
  return pro;
}
