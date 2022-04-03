/** @format */

solving(`abcdef`);
function solving(input) {
  let str = input.split("");
  let n = str.length;
  let half = Math.floor(n / 2);
  console.log(half, n);
  if (n % 2 == 0) {
    let mid = half - 1;
    for (let i = 0; i < mid; i++) {
      let temp = str[i];
      str[i] = str[mid];
      str[mid] = temp;
      mid--;
    }
    for (let i = n - 1; i >= half; i--) {
      console.log(i);
      let temp = str[i];
      str[i] = str[half];
      str[half] = temp;
      half++;
    }
    console.log(str);
  } else {
    let mid = half - 1;
    for (let i = 0; i < mid; i++) {
      let temp = str[i];
      str[i] = str[mid];
      str[mid] = temp;
      mid--;
    }
    let rmid = half + 1;
    for (let i = n - 1; i > rmid; i--) {
      let temp = str[i];
      str[i] = str[rmid];
      str[rmid] = temp;
      rmid++;
    }
    console.log(str);
  }
}
