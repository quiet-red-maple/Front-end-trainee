const arr = [1, 2, [3, 4, 5, [6, 7, 8], 9], 10, [11, 12]];

function arrayFlat(arr) {
  let newArr = [];
  arr.map((item) => {
    if (Array.isArray(item)) {
      newArr.push(...arrayFlat(item));
    } else {
      newArr.push(item);
    }
  });
  return newArr;
}

const newArray = arrayFlat(arr);
console.log(newArray);
console.log(arr.flat(Infinity));
