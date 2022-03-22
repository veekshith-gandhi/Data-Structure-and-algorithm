/** @format
 * not divisible by k and their count
 * Given an integer K and an array arr[] consisting of N
 * positive integers, the task is to find the number of
 * subarrays whose sum modulo K is equal to the size of the subarray.
 */

solving(`4 3
2 4 6 7`);

function solving(input) {
  input = input.split("\n");
  let inp = input[0].split(" ").map(Number);
  let l = +inp[0];
  let k = +inp[1];
  let array = input[1].split(" ").map(Number);
  let count = 0;
  const size = windoSize(array, k, l);
  console.log(size, "size");

  let sum = 0;
  for (let i = 0; i < size; i++) {
    sum += array[i];
  }
  console.log(sum);
  if (sum % k != 0) {
    count++;
  }
  for (let j = size; j < l; j++) {
    sum = sum - array[j - size];
    sum = sum + array[j];

    if (sum % k != 0) {
      count++;
    }
  }
  console.log("count", count);
}
function windoSize(array, k, l) {
  let left = -1;
  let right = -1;
  let sum = 0;
  for (let i = 0; i < l; i++) {
    sum = sum + array[i];
    if (array[i] % k != 0) {
      if (left == -1) {
        left = i;
        right = i;
      } else {
        right = i;
      }
    }
  }
  //evry value difvisble by k
  if (left == -1) return 0;
  //sum is divisble by k
  if (sum % k !== 0) return l;
  return (size = l - Math.min(left + 1, l - right));
}
