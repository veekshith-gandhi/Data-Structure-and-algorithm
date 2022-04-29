/** @format */

solving(`4`);

function solving(input) {
  let n = input;
  const res = sandhya(n);
  console.log(res);
}

function sandhya(num) {
  if (num == 1 || num == 0) {
    return 1;
  }
  if (num < 0) {
    return 0;
  }
  return sandhya(num - 1) + sandhya(num - 2) + sandhya(num - 3);
}
