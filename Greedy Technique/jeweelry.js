solving(`50 
3
100 60 120 
20 10 30`);

function solving(input) {
  input = input.split("\n");
  let totalWeight = input[0];
  let N = input[1];
  let valueGems = input[2].split(" ").map(Number);
  let weightGems = input[3].split(" ").map(Number);
  //   let ratioArr = [];
  let obj = {};
  for (let i = 0; i < N; i++) {
    let ratio = valueGems[i] / weightGems[i];
    obj[ratio] = [valueGems[i], weightGems[i]];
  }
  let sortable = [];
  for (let key in obj) {
    sortable.push([+key, obj[key]]);
  }
  sortable.sort((a, b) => b[0] - a[0]);
  console.log(sortable[0][1][1]);
}
