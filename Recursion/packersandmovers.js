/**
 * In the sample test cases, the company has 3 trucks. The first truck has a capacity of 1, 
 * the second has a capacity of 2, and the third truck has a capacity of 3 units. 
 * The total weight to be transported is 3 units. 
 * The number of ways in which the weight can be transported is
   (1,1,1) -> The first truck is sent thrice, to transport 3 units of weight.
   (2,1) -> First, the truck with capacity 2 is sent followed by the truck with capacity 1.
   (1,2) ->First, the truck with capacity 1 is sent followed by the truck with capacity 2.
   (3) -> The truck with capacity 3 is sent alone.
   Therefore, the total number of ways the weight can bedelivered is 4.
   Sample Input 1 
   3 3
   1 2 3 
   Sample Output 1
   4
 */

solving(`26 4
9 6 7 10
`);

function solving(input) {
  input = input.split("\n");
  let inp = input[0].split(" ");
  let k = inp[0];
  let n = inp[1];
  let arr = input[1].split(" ").map(Number);

  let result = fun(arr, n, k);
  console.log(result);
}

function fun(arr, n, k) {
  if (k == 0) {
    return 1;
  }
  if (k < 0) {
    return 0;
  }
  let res = 0;
  for (let i = 0; i < n; i++) {
    res += fun(arr, n, k - arr[i]);
  }
  return res;
}
