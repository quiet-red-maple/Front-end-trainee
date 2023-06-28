const a = "123456789"; // ===> 123,456,789

const b = a.replace(/(?!^)(?=(\d{3})+$)/g, ",");

console.log(b);

const c = 1888; // ===> $1,888.00

function format(num) {
  let numStr = num
    .toFixed(2)
    .replace(/\B(?=(\d{3})\b)/g, ",")
    .replace(/^/, "$ ");
  console.log(11, numStr);
  return numStr;
}

console.log(format(c));
