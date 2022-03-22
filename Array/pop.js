/** @format */

solving(`26
PUSH 100
PUSH 50
MIN
PUSH 45
MIN
POP
MIN
POP
MIN
PUSH 20
PUSH 19
PUSH 21
PUSH 21
MIN
POP
MIN
POP
MIN
POP
MIN
POP
MIN
POP
POP
POP
MIN`);

function solving(input) {
  let array = input.split("\n");
  let newarray = [];
  let val;
  for (let i = 1; i < array.length; i++) {
    if (array[i].length > 5) {
      val = array[i].split(" ");
      let com = val[0];
      let num = +val[1];
      if (com == "PUSH") {
        newarray.push(num);
      }
    } else if (array[i] == "MIN" && newarray.length != 0) {
      //   console.log(newarray);
      //   let minarray = newarray;
      let res = Math.min(...newarray);
      if (newarray.length == 1) {
        console.log(newarray[0]);
      } else {
        console.log(res);
      }
    } else if (array[i] == "POP") {
      if (newarray.length !== 0) {
        newarray.pop();
      } else {
        console.log("EMPTY");
      }
    }
  }
}
