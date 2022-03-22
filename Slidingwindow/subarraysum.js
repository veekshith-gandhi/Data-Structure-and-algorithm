/** @format */

solving(`6 3
3 4 3 2 7 2`);

function solving(input) {
  input = input.split("\n");
  let inp = input[0].split(" ").map(Number);
  let l = +inp[0];
  let k = +inp[1];
  let array = input[1].split(" ").map(Number);

  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum = sum + array[i];
  }
  console.log(sum);
  for (let i = k; i < l; i++) {
    sum = sum - array[i - k];
    sum = sum + array[i];
    console.log(sum);
  }
}
