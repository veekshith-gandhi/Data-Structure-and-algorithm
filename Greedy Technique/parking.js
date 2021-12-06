solving(`4
4 3 6 7 11
9 4 10 9 14`);

function solving(input) {
  input = input.split("\n");
  let K = input[0];
  let arrival = input[1].split(" ").map(Number);
  let depart = input[2].split(" ").map(Number);
  arrival.sort((a, b) => a - b);
  depart.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < arrival.length; i++) {
    result.push(Math.abs(arrival[i] - depart[i]));
  }
  let isparking = true;
  console.log(arrival, depart);
  for (let i = 0; i < result.length - 1; i++) {
    if (result[i] < result[i + 1]) {
      isparking = false;
    }
  }
  if (isparking) {
    console.log("Possible");
  } else {
    console.log("Not Possible");
  }
}
