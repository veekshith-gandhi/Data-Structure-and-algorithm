/** @format */

solving(`2
5
1 2 3 4 5
3
3 2 7`);

function solving(input) {
  input = input.split("\n");
  let T = +input[0];
  let start = 0;
  let first = 1;
  let sec = 2;
  while (start < T) {
    let N = +input[first];
    let array = input[sec].split(" ").map(Number);
    let product = [];
    let res = 1;
    for (let i = 0; i < N; i++) {
      res = res * array[i];
    }
    for (let i = 0; i < N; i++) {
      product.push(res / array[i]);
    }
    console.log(product.join(" "));
    start = start + 1;
    first = first + 2;
    sec = sec + 2;
  }
}
