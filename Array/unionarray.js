/** @format */

union(`5 3
1 2 3 4 5
1 2 3`);

function union(input) {
  input = input.split("\n");

  let array1 = input[1].split(" ").map(Number);
  let array2 = input[2].split(" ").map(Number);

  let count = 0;

  if (array1.length > array2.length) {
    count = array1.length - 1;
  } else {
    count = array2.length - 1;
  }

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] !== array2[j]) {
        count++;
        break;
      }
    }
  }
  console.log(count);
}
