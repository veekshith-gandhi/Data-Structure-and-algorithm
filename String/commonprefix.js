/** @format */

solving(`flower flow flight`);

function solving(input) {
  let array = input.split(" ");
  array.sort();
  let end = Math.min(array[0].length, array[array.length - 1].length);
  let res = "";
  for (let i = 0; i < end; i++) {
    if (array[0][i] != array[array.length - 1][i]) {
      break;
    } else {
      res = res + array[0][i];
    }
  }
  console.log(res);
}
