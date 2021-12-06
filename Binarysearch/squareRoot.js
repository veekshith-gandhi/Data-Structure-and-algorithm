function SquareRoot(num) {
  let low = 1;
  let high = num;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
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
