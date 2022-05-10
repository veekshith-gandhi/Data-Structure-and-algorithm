/** @format */

solving(`7
1 2 3 4 5 3 1`);

function solving(input) {
  input = input.split("\n");
  let n = +input[0];
  let array = input[1].split(" ").map(Number);

  let right = 0;
  let tree = 0;
  let sub;
  for (let i = 0; i < n; i++) {
    if (i == 0) {
      right = right + array[i];
    }
    if (array[i] < array[i + 1] && i !== n - 1) {
      sub = array[i + 1] - array[i];
      right = right + sub + 1;
    } else {
      sub = array[i] - array[i + 1];
      right = right + sub + 1;
    }
    console.log(right);
  }
}
