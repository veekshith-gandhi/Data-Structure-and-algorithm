solving(`3
5
10
20
174094 882455
171152 761423
221685 761892
795431 233411
387427 793198
8
10
20
650286 248650
900613 893446
661849 637882
913598 407636
154209 74260
66149 6437882
913598 4047636
15429 7347260
3
10
20
650286 248650
900613 893446
661849 637882`);

function solving(input) {
  input = input.split("\n");
  let T = input[0];
  let start = 0;
  let one = 1;
  let two = 2;
  let three = 3;
  let num = 4;

  while (start < T) {
    let N = +input[one];
    let X = input[two];
    let y = input[three];
    console.log(X, y);
    let arr = input.slice(num, num + N);
    let inital = [];
    let final = [];
    for (let i = 0; i < N; i++) {
      let val = arr[i].split(" ").map(Number);
      inital.push(val[0]);
      final.push(val[1]);
    }
    inital.sort((a, b) => a - b);
    final.sort((a, b) => a - b);
    let resultArray = [];
    for (let i = 0; i < N; i++) {
      resultArray.push(inital[i] - final[i]);
    }
    console.log("resultArray", resultArray);
    let xvalue = 0;
    let yvalue = 0;
    for (let i = 0; i < N; i++) {
      if (resultArray[i] > 0) {
        xvalue += Math.abs(resultArray[i]);
        // console.log("xvalue", xvalue);
      } else {
        yvalue += Math.abs(resultArray[i]);
        // console.log("yvalue", yvalue);
      }
    }
    start = start + 1;
    one = N + 4;
    num = 3 + num + N;
    two = N + 4;
    three = N + 4;
    // console.log(xvalue * y + yvalue * X);
  }
}
