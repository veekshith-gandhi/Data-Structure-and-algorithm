/** @format */

solving(`2
5 5
1 2 2 6 5
1 2 5 4 3
5 5
1 2 2 6 5
1 2 5 4 3`);

function solving(input) {
  input = input.split("\n");
  let T = +input[0];
  let first = 1;
  let sec = 2;
  let third = 3;

  let start = 0;

  while (start < T) {
    let inp = input[first].split(" ").map(Number);
    let N = +inp[0];
    let K = +inp[1];
    let arr1 = input[sec].split(" ").map(Number);
    let arr2 = input[third].split(" ").map(Number);
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    for (let i = 0, j = N - 1; i < N, j > 0; i++, j--) {
      if (arr1[i] < arr2[j] && K) {
        K--;
        let temp = arr1[i];
        arr1[i] = arr2[j];
        arr2[j] = temp;
      } else {
        break;
      }
    }

    let sum = 0;
    for (let i = 0; i < N; i++) {
      sum += arr1[i];
    }
    console.log(sum);
    start = start + 1;
    first = first + 3;
    sec = sec + 3;
    third = third + 3;
  }
}
