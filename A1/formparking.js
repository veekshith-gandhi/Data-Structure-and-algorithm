/** @format */

solving(`4
4 3 6 7 11
9 4 10 9 14`);

function solving(input) {
  input = input.split("\n");
  let K = +input[0];
  let arr = input[1].split(" ").map(Number);
  let dep = input[2].split(" ").map(Number);

  arr.sort((a, b) => a - b);
  dep.sort((a, b) => a - b);
  console.log(arr);
  console.log(dep);

  let n = Math.max(arr.length, dep.length);
  let platform = 1;
  let result = 0;
  let i = 1;
  let j = 0;

  while (i < n && j < n) {
    if (arr[i] < dep[j]) {
      platform++;
      i++;
    } else {
      platform--;
      j++;
    }
    if (platform > result) {
      result = platform;
    }
  }
  if (result <= K) {
    console.log("Possible");
  } else {
    console.log("Not Possible");
  }
}
