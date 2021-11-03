// function permut(str, l, r) {
//   if (l == r) {
//     // console.log(str.join(" "));
//     // return;
//   } else {
//     for (let i = l; i <= r; i++) {
//       str = swap(str, l, i);
//       console.log(str);
//       permut(str, l + 1, r);
//       str = swap(str, l, i);
//     }
//   }
// }
// function swap(str, i, l) {
//   let temp = str[i];
//   str[i] = str[l];
//   str[l] = temp;
//   return str;
// }
// permut([1, 2, 3], 0, 2);
runProgram(`3
1 2 3`);
function runProgram(input) {
  var input = input.split("\n");
  var N = +input[0];
  var A = input[1].split(" ");
  var str = A.join("");

  function permutation(str, l, r) {
    if (l == r) {
      console.log(str.split("").join(" "));
    } else {
      for (let i = l; i <= r; i++) {
        str = swap(str, l, i);
        permutation(str, l + 1, r);
      }
    }
  }

  function swap(a, i, j) {
    let temp;
    let charArr = a.split("");

    temp = charArr[i];
    charArr[i] = charArr[j];
    charArr[j] = temp;
    return charArr.join("");
  }

  permutation(str, 0, N - 1);
}
