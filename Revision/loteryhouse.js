/** @format */

solving(`3
3
1 2
2 3
1 3
3
1 2
2 3
1 3
4
1 2
3 4
5 6
3 5`);

function solving(input) {
  input = input.split("\n");
  let T = +input[0];

  let myset = new Set();
  for (let i = 2; i < input.length; i++) {
    let line = input[i].split(" ").map(Number);
    console.log(myset);
    if (line.length === 1) {
      console.log(myset.size);
      myset.clear();
    } else {
      myset.add(line[0]);
      myset.add(line[1]);
    }
  }
  if (myset.size > 0) {
    console.log(myset.size);
  }
}
