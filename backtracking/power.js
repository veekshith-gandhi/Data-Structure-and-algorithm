function power(a, b) {
  if (b == 1) {
    return a;
  } else {
    return a * power(a, b - 1);
  }
}

console.log(power(2, 4));
