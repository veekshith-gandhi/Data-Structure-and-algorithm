solving(`3
5
6 3 8 2 -4
5
-10 -7 10 2 -2
5
-4 -5 6 -3 9
`);

function solving(input) {
  input = input.split("\n");
  let T = input[0];
  let start = 0;
  let first = 1;
  let second = 2;
  while (start < T) {
    let n = input[first];
    let arr = input[second].split(" ");

    const ans = addition(arr, n);
    console.log(ans);
    start = start + 1;
    first = first + 2;
    second = second + 2;
  }
}

function addition(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return addition(arr, n - 1) + +arr[n - 1];
  }
}
