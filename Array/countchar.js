/** @format */

solving(`aaabbbbcc`);

function solving(input) {
  let arr = input.split("");
  let count = 1;
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      count++;
    } else {
      res = res + arr[i] + count;
      count = 1;
    }
  }
  console.log(res);
}
