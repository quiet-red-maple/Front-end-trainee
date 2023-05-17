list = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];

function insertSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

console.log(insertSort(list));
