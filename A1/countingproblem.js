/** @format */

solving(`masaischool`);

function solving(input) {
  let array = input.split("").sort();
  //   console.log(array);
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    if (obj.hasOwnProperty(array[i])) {
      obj[array[i]]++;
    } else {
      obj[array[i]] = 1;
    }
  }
  for (key in obj) {
    console.log(key, obj[key]);
  }
}
