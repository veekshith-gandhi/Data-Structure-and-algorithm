/** @format */

solving(`coronavirus`);

function solving(input) {
  let str = input.split("");
  let N = str.length - 1;
  let count = 0;
  for (let i = 0; i < N; i++) {
    let result = checkVoewsls(str[i]);
    count = count + result;
  }
  let answer = substring(str, count);
  //   console.log(answer);
}
function substring(str, count) {
  let finalvalue = 0;
  for (let i = 0; i < str.length; i++) {
    let res = "";
    for (let j = i; j < str.length; j++) {
      res = res + str[j];
      if (res.length >= count) {
        console.log(res);
        let result = checksyntax(res, count);
        finalvalue = result + finalvalue;
      }
    }
  }
  return finalvalue;
}

function checksyntax(str, count) {
  let vowelCoount = 0;
  for (let i = 0; i < str.length; i++) {
    let res = checkVoewsls(str[i]);
    vowelCoount = vowelCoount + res;
  }
  if (vowelCoount == count) {
    return 1;
  } else {
    return 0;
  }
}

function checkVoewsls(str) {
  switch (str) {
    case "a":
      return 1;
    case "e":
      return 1;
    case "i":
      return 1;
    case "o":
      return 1;
    case "u":
      return 1;
    default:
      return 0;
  }
}
