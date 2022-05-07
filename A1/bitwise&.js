/** @format */

solving(`5 4 1 6`);

function solving(input) {
  let array = input.split(" ").map(Number);
  let count = 0;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if ((array[i] & array[j]) == 0) {
        count += 2;
      }
    }
  }
  console.log(count);
}
