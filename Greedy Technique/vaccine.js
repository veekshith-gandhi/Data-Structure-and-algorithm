solving(`5
123 146 454 542 456
100 328 248 689 200`);

function solving(input) {
  input = input.split("\n");
  let N = input[0];
  let vaccStr = input[1].split(" ").map(Number);
  vaccStr.sort((a, b) => a - b);
  let persStr = input[2].split(" ").map(Number);
  persStr.sort((a, b) => a - b);
  let isvaccine = true;
  console.log(vaccStr, persStr);
  for (let i = 0; i < N; i++) {
    if (vaccStr[i] < persStr[i]) {
      isvaccine = false;
    }
  }
  if (isvaccine) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
