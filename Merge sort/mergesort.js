runProgram(`5
3 5 0 9 8`);

function runProgram(input) {
  var input = input.split("\n");
  var N = Number(input[0]);

  var arr = input[1].split(" ").map(Number);

  let result = MergeSort(arr, 0, N - 1);
  console.log(result);
  console.log(arr.join(" "));

  function MergeSort(arr, l, r) {
    if (l >= r) {
      return;
    }
    var m = parseInt((l + r) / 2);
    MergeSort(arr, l, m);
    MergeSort(arr, m + 1, r);
    return merge(arr, l, m, r);
  }

  function merge(arr, l, m, r) {
    var n1 = m - l + 1;
    var n2 = r - m;
    var L = new Array(n1);
    var M = new Array(n2);
    for (var a = 0; a < n1; a++) {
      L[a] = arr[l + a];
    }
    for (var b = 0; b < n2; b++) {
      M[b] = arr[m + 1 + b];
    }
    var i = 0,
      j = 0,
      k = l;
    while (i < n1 && j < n2) {
      if (L[i] <= M[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = M[j];
        j++;
      }
      k++;
    }
    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }
    while (j < n2) {
      arr[k] = M[j];
      j++;
      k++;
    }
    return arr;
  }
}
