function debounce(func, await = 500) {
  let timer;
  return function (...args2) {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args2);
    }, await);
  };
}

const print = () => {
  console.log(12);
};

let tims = setInterval(debounce(print, 500), 1000);

setTimeout(() => {
  clearInterval(tims);
}, 6008);
