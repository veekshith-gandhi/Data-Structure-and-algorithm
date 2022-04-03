/** @format */

function revers(arr, n) {
  if (n == 1) {
  }
  let i;
  for (i = 1; i < n && arr[i - 1] < arr[i]; i++);
  {
    if (i == n) {
    }
  }

  let j = i;
  while (j < n && arr[j] < arr[j - 1]) {
    {
      if (i > 1 && arr[j] < arr[i - 2]) {
        return false;
      }
    }
    j++;
  }

  if (j == n) {
    return true;
  }

  let k = j;

  if (arr[k] < arr[i - 1]) {
    return false;
  }

  while (k > 1 && k < n) {
    if (arr[k] < arr[k - 1]) {
      return false;
    }
    k++;
  }
  return true;
}

runProgram(`10
-1 0 1 2 3 10 9 7 6 4`);

function runProgram(input) {
  input = input.split("\n");
  let n = +input[0];
  let arr = input[1].split(" ").map(Number);
  console.log(arr, n);

  const res = revers(arr, n);
  if (res) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
