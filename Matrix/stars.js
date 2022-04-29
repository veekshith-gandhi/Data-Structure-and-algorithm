/** @format */

for (let i = 0; i < 10; i++) {
  let res = "";
  for (let j = 0; j < 10; j++) {
    if (i == 0 || j == 0 || i == j || i + j == 9 || i == 9 || j == 9) {
      res = res + i + " ";
    } else {
      res = res + "  ";
    }
  }
  console.log(res);
}
