function fibo(n) {
  if (n == 1) {
    return 1;
  }
  if (n == 0) {
    return 0;
  }
  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(10));

// fibo nth term : 0 1 2 3 4 5 6
// val           : 0 1 1 2 3 5 8   its nothing but previous 2 numbers n-1,n-2
