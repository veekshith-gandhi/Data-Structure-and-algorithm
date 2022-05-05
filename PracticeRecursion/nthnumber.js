/** @format */

const result = nthNumber(10);
console.log("result :", result);

function nthNumber(n) {
  if (n < 0) {
    return 0;
  } else {
    console.log(n);
    return n + nthNumber(n - 1);
  }
}
