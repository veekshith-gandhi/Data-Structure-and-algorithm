/** @format */

solving(`3
6
eat
tea
tan
ate
nat
bat
3
abc
abc
def
2
sss
sss`);

function solving(input) {
  input = input.split("\n");
  let T = +input[0];
  let first = 1;
  let start = 0;
  let sec = 2;
  //   console.log(input);

  while (start < T) {
    let N = +input[first];
    let anagarray = [];
    let original = [];

    for (let i = sec; i < sec + N; i++) {
      original.push(input[i]);
    }
    console.log(original);
    for (let i = sec; i < sec + N; i++) {
      anagarray.push(input[i].split("").sort());
    }

    let obj = {};
    for (let i = 0; i < anagarray.length; i++) {
      let value = anagarray[i].join("");

      if (obj[value]) {
        obj[value]++;
      } else {
        obj[value] = 1;
      }
    }
    console.log(obj);

    // for (let i = 0; i < anagarray.length; i++) {}
    for (key in obj) {
      console.log(obj[key]);
    }
    // console.log(anagarray);
    first = first + N + 1;
    start = start + 1;
    sec = sec + N + 1;
  }
}

// let sorted = [];
// for (let i = 0; i < anagarray.length; i++) {
//   let res = anagarray[i].split("");
//   res.sort();
//   console.log(res);
// }
