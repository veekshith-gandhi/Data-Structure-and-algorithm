/** @format */

solving(`5
1 2 3 4 5`);

function solving(input) {
  input = input.split("\n");
  let n = +input[0];
  let array = input[1].split(" ").map(Number);
  let newArr = [];
  for (let i = 0; i < n; i++) {
    let index = (2 + i) % n;
    newArr.push(array[index]);
  }
  console.log(newArr);
}
