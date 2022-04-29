/** @format */

solving(`10`);

function solving(input) {
  let num = +input;

  let res = count(num);
}

function count(n) {
  console.log(n);
  let array = new Array(10).fill(n);
  array[0] = array[1] = array[2] = 1;
  array[3] = 2;
  //   console.log(array);

  for (let i = 4; i <= n; i++) {
    array[i] = array[i - 3] + array[i - 4] + array[i - 1];
  }
  console.log(array);
}
