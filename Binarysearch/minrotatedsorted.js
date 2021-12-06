solving(`10
4 6 7 9 10 -1 0 1 2 3`);

function solving(input) {
  input = input.split("\n");
  let N = input[0];
  let arr = input[1].split(" ").map(Number);

  const result = searching(arr, N);
  console.log(result);
}

function searching(arr, N) {
  let low = 0;
  let high = N - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
  }
}
