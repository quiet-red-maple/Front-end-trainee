// 0 ， 1 ， 1 ， 2 ， 3 ， 5 ， 8 ， 13 ， 21 ， 34 ， 55 ，89....

const fib = (n) => {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

// console.log(fib(8));

const fib2 = (n) => {
  if (n < 2) {
    return n;
  }
  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    console.log(i, n);
    let target = arr[1];
    arr[1] = arr[1] + arr[0];
    arr[0] = target;
  }
  return arr[1];
};

console.log(fib2(8));
