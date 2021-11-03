function step(n) {
  if (n == 1 || n == 0) {
    return 1;
  }
  if (n < 0) {
    return 0;
  }
  return step(n - 1) + step(n - 2) + step(n - 3);
}
console.log(step(4));
