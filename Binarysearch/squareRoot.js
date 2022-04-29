/** @format */

function SquareRoot(num) {
  let low = 1;
  let high = num;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    // let mid = low + high / 2;
    console.log("mid", mid);
    // if (mid * mid == num) {
    //   return mid;
    // } else
    if (mid * mid < num) {
      low = mid + 1;
      console.log(high, "upper");
    } else {
      high = mid - 1;
      console.log(low, "lower");
    }
  }
  return low;
}
console.log(SquareRoot(9));

function root(num) {
  let i = 1;
  let result = 1;
  while (result < num) {
    i++;
    result = i * i;
  }
  return i;
}
console.log("rrot", root(9));
