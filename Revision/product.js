/** @format */

inpooo(`2
5
1 2 3 4 5
3
3 2 7`);

function solving(input) {
  input = input.split("\n");
  let n = input[0];
  let arr = input[1].split(" ").map(Number);
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  let res = "";
  let newProduct;
  for (let i = 0; i < n; i++) {
    newProduct = product / arr[i];
    res = res + newProduct + " ";
  }
  console.log(res);
}

function solving(input) {
  input = input.split("\n");
  let n = input[0];
  let arr = input[1].split(" ").map(Number);
  let res = "";
  for (let i = 0; i < n; i++) {
    let product = 1;
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        product = product * arr[j];
      }
    }
    res = res + product + " ";
  }
  console.log(res);
}

function inpooo(input) {
  input = input.split("\n");
  let T = +input[0];
  let start = 0;
  let first1 = 1;
  let sec2 = 2;
  while (start < T) {
    let n = +input[first1];
    // console.log(input);
    let arr = input[sec2].split(" ").map(Number);
    // console.log(arr);

    let first = [];
    let temp = 1;
    for (let i = 0; i < n; i++) {
      first.push(temp);
      temp = temp * arr[i];
    }

    let tempo = 1;
    let sec = [];
    for (let i = n - 1; i >= 0; i--) {
      sec[i] = tempo;
      tempo = tempo * arr[i];
    }

    let result = [];
    for (let i = 0; i < n; i++) {
      let check = first[i] * sec[i];
      result.push(check);
    }
    start = start + 1;
    first1 = first1 + 2;
    sec2 = sec2 + 2;
    console.log(result.join(" "));
  }
}
