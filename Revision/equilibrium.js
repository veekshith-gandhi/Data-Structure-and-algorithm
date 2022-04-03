/** @format */

solving(`5
3 3 5 5 1`);

function solving(input) {
  input = input.split("\n");
  let n = input[0];
  let arr = input[1].split(" ").map(Number);

  let sum = 0;
  let lsum = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  for (let i = 0; i < n - 1; i++) {
    sum -= arr[i];
    console.log(sum, lsum);
    if (sum == lsum) {
      console.log("ji");
    }
    lsum += arr[i];
  }
}

// function solving(input) {
//   input = input.split("\n");
//   let n = input[0];
//   let arr = input[1].split(" ").map(Number);

//   for (let i = 0; i < n; i++) {
//     let lsum = 0;
//     let rsum = 0;
//     for (let j = 0; j <= i; j++) {
//       lsum = lsum + arr[j];
//     }

//     for (let j = i; j < n; j++) {
//       rsum = rsum + arr[j];
//     }
//     if ((lsum == rsum) & (i != 0) && i != n - 1) {
//       console.log(i + 1);
//       break;
//     }
//   }
// }
