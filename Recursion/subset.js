/** @format */

solving(`4 10
1 2 3 4`);

function solving(input) {
  input = input.split("\n");
  let inp = input[0].split(" ");
  let n = inp[0];
  let k = +inp[1];
  console.log(k);
  let arr = input[1].split(" ").map(Number);
  subsetSums(arr, 0, n - 1, 0);
}

function subsetSums(arr, l, r, sum) {
  if (l > r) {
    console.log(sum);
    return sum;
  }
  subsetSums(arr, l + 1, r, sum + arr[l]);

  subsetSums(arr, l + 1, r, sum);
}
