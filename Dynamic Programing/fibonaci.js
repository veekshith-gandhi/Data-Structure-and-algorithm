/** @format */

solving(`9`);
// top down
function solving(input) {
  let n = +input;
  const arr = new Array(n + 1).fill(-1);
  let result = fun(n);
  console.log("topdown", result);

  function fun(n) {
    if (n == 0 || n == 1) {
      return n;
    } else if (arr[n] != -1) {
      return arr[n];
    }
    return (arr[n] = fun(n - 2) + fun(n - 1));
  }
}

// bottom down
solv(`9`);

function solv(input) {
  let n = +input;
  let arr = new Array(n + 1);
  let result = fun(n);
  console.log("botm down", result);

  function fun(n) {
    if (n <= 1) {
      return n;
    }
    arr[0] = 0;
    arr[1] = 1;
    for (let i = 2; i <= n; i++) {
      arr[i] = arr[i - 2] + arr[i - 1];
    }
    return arr[n];
  }
}
