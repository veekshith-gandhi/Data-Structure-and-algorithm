/** @format */

solving(`2
4 1
-1 2 1 -4
3 1
0 0 0`);

function solving(input) {
  input = input.split("\n");
  let T = input[0];

  let inp = input[1].split(" ");
  let N = +inp[0];
  let Target = +inp[1];
    let array = input[2].split(" ").map(Number);
    let sum = 0
  array.sort((a, b) => a - b);
    for (let i = 0; i < N; i++){
        if (array[i] == Target) {
            sum = sum+array[i]+array[i+1]
        }
    }
}
