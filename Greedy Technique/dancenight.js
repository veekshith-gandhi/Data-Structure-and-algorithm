solving(`2
4 5
2 5 6 8
3 8 5 1 7
3 4
2 5 8
3 8 5 7`);

function solving(input) {
  input = input.split("\n");
  let T = input[0];
  let one = 1;
  let two = 2;
  let three = 3;
  let start = 0;
  while (start < T) {
    let inp = input[one].split(" ").map(Number);
    let M = inp[0];
    let G = inp[1];
    let MenArr = input[two].split(" ").map(Number);
    let GirlArr = input[three].split(" ").map(Number);
    MenArr.sort((a, b) => a - b);
    GirlArr.sort((a, b) => a - b);
    let isHeight = true;
    for (let i = 0; i < M; i++) {
      if (MenArr[i] <= GirlArr[i]) {
        isHeight = false;
      }
    }
    if (isHeight) {
      console.log("Yes");
    } else {
      console.log("NO");
    }
    start = start + 1;
    one = one + 3;
    two = two + 3;
    three = three + 3;
  }
}
