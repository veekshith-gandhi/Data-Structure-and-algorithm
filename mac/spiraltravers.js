/** @format */

runProgram(`2
3 
1 2 3
4 5 6
7 8 9
4
1 2 3 4
4 5 6 5
7 8 9 5
4 5 3 3`);

function runProgram(input) {
  input = input.split("\n");

  let T = +input[0];
  let start = 0;
  let first = 1;
  while (start < T) {
    let N = input[first];
    let num = 2;
    var array = [];
    for (var i = num; i < input[i].length; i++) {
      array.push(input[i].split(" ").map(Number));
    }
    console.log(array);

    spiralMatrix(array, N);
    num = num + N;
    first = first + N;
    start = start + 1;
  }
}

function spiralMatrix(array, n) {
  var count = 0;
  var size = n * n;
  var top = 0;
  var left = 0;
  var bottom = n - 1;
  var right = n - 1;
  var result = "";
  while (count < size) {
    for (var i = left; i <= right; i++) {
      result += array[bottom][i] + " ";
      count++;
    }
    bottom--;
    for (var i = bottom; i >= top; i--) {
      result += array[i][right] + " ";
      count++;
    }
    right--;
    for (var i = right; i >= left; i--) {
      result += array[top][i] + " ";
      count++;
    }
    top++;
    for (var i = top; i <= bottom; i++) {
      result += array[i][left] + " ";
      count++;
    }
    left++;
  }
  //   console.log(result);
}
