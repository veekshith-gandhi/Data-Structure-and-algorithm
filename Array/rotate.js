/** @format */

rotate(`2 7
1 2 3 4 5 6 7`);

function rotate(input) {
  input = input.split("\n");
  let inp = input[0].split(" ");
  let R = +inp[0];
  let N = +inp[1];
  let newArray = [];
  let array = input[1].split(" ").map(Number);

  for (let i = 0; i < N; i++) {
    let index = (i + R) % N;
    newArray.push(array[index]);
  }
  console.log(newArray);
}
/**
 * using modular function
 * ex:no of days
 */
