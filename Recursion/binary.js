let val = "";
function binary(n) {
  if (n == 1) {
    val = 1 + val;
    return;
  } else {
    val = (n % 2) + val;
    return binary(Math.floor(n / 2));
  }
}
binary(2);
console.log(val);
