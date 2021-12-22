solving(`10
4 -4 2 -4 6 -8 19 3 4 -2
4 0 9 7 4 -8 6 -9 -3 -1`);

function solving(input) {
  input = input.split("\n");
  let N = input[0];
  let axis = input[1].split(" ").map(Number);
  let room = input[2].split(" ").map(Number);
  axis.sort((a, b) => a - b);
  room.sort((a, b) => a - b);
  let diff = [];
  console.log(axis);
  console.log(room);
  for (let i = 0; i < N; i++) {
    diff.push(Math.abs(axis[i] - room[i]));
  }
  console.log(diff);
  let max = 0;
  for (let i = 0; i < N; i++) {
    if (diff[i] > max) {
      max = diff[i];
    }
  }
  console.log(max);
}
