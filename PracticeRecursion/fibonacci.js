/** @format */

let n = 5;
for (let i = 0; i < n; i++) {
  const result = fibo(i);
  console.log("result :", result);
}

function fibo(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1 || n == 2) {
    return 1;
  } else {
    return fibo(n - 2) + fibo(n - 1);
  }
}
