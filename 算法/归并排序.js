list = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  while (left.length) {
    arr.push(left.shift());
  }

  while (right.length) {
    arr.push(right.shift());
  }

  return arr;
}

console.log(mergeSort(list));
