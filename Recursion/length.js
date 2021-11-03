let count = 0;
function length(string) {
  if (string.length == 0) {
    return count;
  } else {
    count++;
    let val = string.slice(1);
    return length(val);
  }
}
console.log(length("veekshith"));
