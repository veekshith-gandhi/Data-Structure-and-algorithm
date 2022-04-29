/** @format */

solving(`3 2
1 2 1`);

function solving(input) {
  input = input.split("\n");
  let inp = input[0].split(" ");
  let n = +inp[0];
  let k = +inp[1];
  let arr = input[1].split(" ").map(Number);
  subsetSums(arr, n, k);
}
function subsetSums(arr, n, k) {
  let total = 1 << n;
  let count = 0;
  for (let i = 0; i < total; i++) {
    let sum = 0;
    let res = [];
    for (let j = 0; j < n; j++) {
      if ((i & (1 << j)) != 0) {
        sum += arr[j];
        // res = res + " " + arr[j];
        res.push(arr[j]);
      }
    }

    let isfound = true;
    if (res.length >= k) {
      //   console.log(arr);
      for (let i = 0; i < res.length; i++) {
        if (arr[i] == 1) {
          console.log("True");
        }
      }
    }
  }

  // console.log(result);
}
