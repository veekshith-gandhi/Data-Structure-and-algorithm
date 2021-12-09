let result = solving(`6
9:00 9:40 9:50 11:00 15:00 18:00
9:10 12:00 11:20 11:30 19:00 20:00`);
console.log(result);

function solving(input) {
  input = input.split("\n");
  let N = input[0];
  let i = 1;
  let j = 0;
  let count = 1;
  let res = 1;
  let arrival = input[1].split(" ");
  let departure = input[2].split(" ");
  let newArrival = [];
  let newDeparture = [];
  for (let i = 0; i < N; i++) {
    let array1 = arrival[i].split(":");
    newArrival.push(array1[0] + array1[1]);
  }
  for (let i = 0; i < N; i++) {
    let array2 = departure[i].split(":");
    newDeparture.push(array2[0] + array2[1]);
  }
  let final1 = newArrival.sort((a, b) => a - b).map(Number);
  let final2 = newDeparture.sort((a, b) => a - b).map(Number);
  console.log(final1);
  console.log(final2);

  while (i < N && j < N) {
    if (final1[i] <= final2[j]) {
      i++;
      count++;
      console.log("l", count);
    } else if (final1[i] >= final2[j]) {
      console.log("m", count);

      count--;
      j++;
    }
    if (count > res) {
      res = count;
    }
  }
  return res;
}
