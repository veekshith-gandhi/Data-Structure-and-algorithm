solving(`4`);

function solving(input) {
  let n = +input;
  const arr = new Array(n + 1).fill(-1);
  let result = fun(n);
  console.log("top", result);

  function fun(n) {
    if (n < 0) {
      return 0;
    } else if (n == 0) {
      return 1;
    } else if (arr[n] != -1) {
      return arr[n];
    }
    return (arr[n] = fun(n - 2) + fun(n - 1) + fun(n - 3));
  }
}

// bottom down
solv(`4`);

function solv(input) {
  let n = +input;
  const arr = new Array(n + 1).fill(-1);
  let result = fun(n);
  console.log("botttom", result);
  console.log(arr);
  function fun(n) {
    arr[0] = 1;
    arr[1] = 1;
    arr[2] = 2;
    if (arr[n] != -1) {
      return arr[n];
    }
    for (let i = 3; i <= n; i++) {
      arr[i] = fun(i - 2) + fun(i - 1) + fun(i - 3);
    }
    return arr[n];
  }
}
