function permut(str, l, r) {
  if (l == r) {
    console.log(str.join(" "));
    // return;
  } else {
    for (let i = l; i <= r; i++) {
      str = swap(str, l, i);
      permut(str, l + 1, r);
      str = swap(str, l, i);
    }
  }
}
function swap(str, i, l) {
  let temp = str[i];
  str[i] = str[l];
  str[l] = temp;
  return str;
}
permut([1, 2, 3], 0, 2);
