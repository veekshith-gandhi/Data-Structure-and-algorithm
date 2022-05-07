/** @format */

solving(`6
1
10
19
9876
12345
1000000000`);

function solving(input) {
  let arr = input.split("\n").map(Number);
  console.log(arr);
  let T = arr[0];
  for (let i = 1; i <= T; i++) {
    console.log(amountSpend(arr[i]));
  }
}

function amountSpend(value) {
  let num = value;
  let amountspend = value;
  let cashback = 0;

  while (num > 9) {
    cashback = Math.floor(num / 10);
    amountspend = amountspend + cashback;
    num = num % 10;
    num = num + cashback;
  }
  return amountspend;
}
