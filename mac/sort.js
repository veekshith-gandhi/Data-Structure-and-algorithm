/** @format */

solving(`5
2 5 1 4 2`);

function solving(input) {
  input = input.split("\n");
  let n = +input[0];
  let array = input[1].split(" ").map(Number);
  array.sort((a, b) => a - b);
  //   console.log(array);

  let odd = [];
  let even = [];

  for (let i = 0; i < n; i++) {
    // console.log(array[i]);
    if (array[i] % 2 !== 0) {
      odd.push(array[i]);
    } else {
      even.push(array[i]);
    }
  }
  //   console.log(odd, even);
  console.log(odd.concat(even).join(" "));
}
