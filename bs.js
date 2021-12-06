solving(`1
5 8
1 3 5 9 13`);
function solving(input) {
  input = input.split("\n");
  let T = input[0];
  let inp = input[1].split(" ");
  let N = inp[0];
  let Key = inp[1];
  let arr = input[2].split(" ");
  const res = binary(arr, Key, N);
}
function binary(arr, key, N) {
  let low = 0;
  let high = N - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if()
  }
}
