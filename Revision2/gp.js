/** @format */

function geoProgression(n, r) {
  if (n < 1) {
    return 1;
  } else {
    return Math.pow(r, -n) + geoProgression(n - 1, r);
  }
}

let result = geoProgression(3, 5);
console.log(result.toFixed(4));
