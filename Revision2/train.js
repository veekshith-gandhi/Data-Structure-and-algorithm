/** @format */

solving(`6
9:00 9:40 9:50 11:00 15:00 18:00
9:10 12:00 11:20 11:30 19:00 20:00`);

function solving(input) {
  input = input.split("\n");
  let n = +input[0];
  let arival = input[1].split(" ");
  let departure = input[2].split(" ");

  let newArival = removecollon(arival);
  let newDeparture = removecollon(departure);
  const result = platformRequired(newArival, newDeparture, n);
  console.log(result);
}

function platformRequired(arival, departure, n) {
  let platform = 1;
  let result = 1;
  let i = 1;
  let j = 0;

  while (i < n && j < n) {
    if (arival[i] < departure[j]) {
      platform++;
      console.log("inc", platform);
      i++;
    } else {
      j++;
      platform--;
      console.log("dec", platform);
    }
    if (platform > result) {
      result = platform;
    }
  }
  return result;
}

function removecollon(array) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    let res = array[i].split(":");
    let con = res[0].concat(res[1]);
    output.push(+con);
  }
  return output;
}
