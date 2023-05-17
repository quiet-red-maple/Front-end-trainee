function add(a, b, c) {
  return a + b + c;
}

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...args2) {
        return curried(...args, ...args2);
      };
    }
  };
}

let curryFun = curry(add);
console.log(curryFun(1)(8)(3));
