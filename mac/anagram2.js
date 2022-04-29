/** @format */

solving(`anagram
nag a rim`);

function solving(input) {
  input = input.split("\n");
  let string = input[0].split("").sort();
  let inp = input[1].split(" ");
  let first = [];
  for (let i = 0; i < inp.length; i++) {
    first = first + inp[i];
  }
  let str2 = Array(first);
  str2 = str2[0].split("").sort();
  let isfound = true;
  if (str2.length == string.length) {
    for (let i = 0; i < str2.length; i++) {
      if (str2[i] != string[i]) {
        isfound = false;
        break;
      }
    }
  } else {
    isfound = false;
  }
  if (isfound) {
    console.log("True");
  } else {
    console.log("False");
  }
}
