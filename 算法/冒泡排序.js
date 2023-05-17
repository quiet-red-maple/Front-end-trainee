list = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort(list));
