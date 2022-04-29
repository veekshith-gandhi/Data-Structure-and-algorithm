/** @format */

solving(`8
1 2 3 4 5 6 7 8
`);

function solving(input) {
  input = input.split("\n");
  let n = +input[0];
  let arr = input[1].split(" ").map(Number);

  let half = n / 4;
  let sum = 0;
  let numbers = [];
  for (let i = 0; i < n; i++) {
    sum = sum + arr[i];
    let val = i + 1;

    if (val % half == 0) {
      numbers.push(sum);
      sum = 0;
    }
  }

  const [c1, c2, c3, c4] = numbers;
  const result = 2 * c1 + c2 + 2 * c3 + c4;
  console.log(result);
}
