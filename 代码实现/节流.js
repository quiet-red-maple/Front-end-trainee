function throttle(func, wait) {
  let timer;
  return function (...args) {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      func.apply(this, args);
      clearTimeout(timer);
      timer = null;
    }, wait);
  };
}

const print = () => {
  console.log(12);
};

// let tims = setInterval(print, 100);
let tims = setInterval(throttle(print, 1000), 100);

setTimeout(() => {
  clearInterval(tims);
}, 6008);
