solving(`5 3 24
6 4 21 20 13`);

function solving(input) {
  input = input.split("\n");
  let inp = input[0].split(" ");
  let N = inp[0];
  let C = inp[1];
  let R = inp[2];
  let arr = input[1].split(" ").map(Number);
  arr.sort((a, b) => a - b);
  let res = party(arr, N, R);
  if (res == C) {
    console.log("Party");
  }
}
function party(arr, N, R) {
  let i = 0;
  let sum = arr[i];
  while (sum <= R) {
    sum += arr[i + 1];
    i++;
  }
  return i;
}
