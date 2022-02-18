solving(`4
2 5 0 9`);

function solving(input) {
  input = input.split("\n");
  let str = input[1].split(" ");
  subsequence([], str, 0, str.length - 1);
}
var count = 0;
function subsequence(ans, str, l, r) {
  if (l <= r + 1 && !ans.length == "") {
    sum = 0;
    var count = 0;
    let value = ans.split("").map(Number);
    for (j = 0; j < value.length; j++) {
      sum += value[j];
    }
    if (sum % 2 == 0) {
      count++;
    }
  }
  let count = 0;
  console.log(count);
  for (let i = l; i <= r; i++) {
    subsequence(ans + str[i], str, i + 1, r);
  }
}
