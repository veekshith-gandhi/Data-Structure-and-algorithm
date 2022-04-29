/** @format */
function main() {
  let chess = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  if (Nqueen(chess, 0)) {
    printTable(chess);
  } else {
    console.log("Not existed");
  }
}
// main();
function Nqueen(chess, row) {
  //   console.log(chess);
  //printng
  //base condition
  if (row >= chess.length) return true;

  for (col = 0; col < chess.length; col++) {
    if (isQueenSafe(chess, row, col)) {
      chess[row][col] = 1;
      if (Nqueen(chess, row + 1)) return true;
      chess[row][col] = 0;
    }
  }
}

// 00 01 02 03
// 10 11 12 13
// 20 21 22 23
// 30 31 32 33
function isQueenSafe(chess, row, col) {
  //vertical check
  for (let i = row - 1, j = col; i >= 0; i--) {
    if (chess[i][j] == 1) {
      return false;
    }
  }
  //left diagonal
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (chess[i][j] == 1) {
      return false;
    }
  }
  //right diagonal
  for (let i = row - 1, j = col + 1; i >= 0 && j < chess.length; i--, j++) {
    if (chess[i][j] == 1) {
      return false;
    }
  }
  return true;
}

//geeks

function printSolution(board) {
  for (let i = 0; i < board.length; i++) {
    let res = "";
    for (let j = 0; j < board.length; j++) {
      res += " " + board[i][j];
    }
    console.log(res);
  }
}

function isSafe(chess, row, col) {
  //vertical check
  for (let i = row - 1, j = col; i >= 0; i--) {
    if (chess[i][j] == 1) {
      return false;
    }
  }
  //left diagonal
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (chess[i][j] == 1) {
      return false;
    }
  }
  //right diagonal
  for (let i = row - 1, j = col + 1; i >= 0 && j < chess.length; i--, j++) {
    if (chess[i][j] == 1) {
      return false;
    }
  }
  return true;
}

function solveNQUtil(board, row) {
  if (row >= board.length) {
    return true;
  }

  for (let col = 0; col < board.length; col++) {
    if (isSafe(board, row, col)) {
      board[row][col] = 1;
      if (solveNQUtil(board, row + 1)) {
        return true;
      }
      board[row][col] = 0;
    }
  }
  return false;
}

function solveNQ() {
  let board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  if (solveNQUtil(board, 0)) {
    printSolution(board);
  } else {
    console.log("not existed");
  }
}

solveNQ();
