solving(`4
4 3 6 7 11
9 4 10 9 14`);

function solving(input) {
  input = input.split("\n");
  let K = +input[0];

  let arrival = input[1].split(" ").map(Number);
  let N = arrival.length;
  let depart = input[2].split(" ").map(Number);
  let M = depart.length;
  let final1 = arrival.sort((a, b) => a - b);
  let final2 = depart.sort((a, b) => a - b);
  console.log(final1);
  console.log(final2);

  let i = 1;
  let j = 0;
  let pl = 1;
  let res = 1;
  while (i < N && j < M) {
    if (final1[i] <= final2[j]) {
      i++;
      pl++;
      console.log(pl, "i");
    } else if (final1[i] >= final2[j]) {
      j++;
      pl--;
      console.log(pl, "j");
    }
    if (pl > res) {
      res = pl;
    }
  }
  if (K >= res) {
    console.log("Possible");
  } else {
    console.log(res, K);
    console.log("Not Possible");
  }
}
