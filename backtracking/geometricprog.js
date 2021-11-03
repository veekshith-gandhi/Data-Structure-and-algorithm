function geo(n, r) {
  if (n == 0) {
    return 1;
  } else {
    return 1 / r ** n + geo(n - 1, r);
  }
}
console.log(geo(3, 5).toFixed(4));
