solving(`4 10
5 4 2 4`);

function solving(input) {
  input = input.split("\n");
  let inp = input[0].split(" ");
  let N = inp[0];
  let K = inp[1];
  let arr = input[1].split(" ").map(Number);
  arr.sort((a, b) => a - b);
  let res = samosa(arr, N, K);
  console.log(res);
}
function samosa(arr, N, K) {
  let i = 0;
  let sum = arr[i];
  while (sum <= K) {
    sum += arr[i + 1];
    i++;
    console.log("i", sum, i);
  }
  return i;
}
