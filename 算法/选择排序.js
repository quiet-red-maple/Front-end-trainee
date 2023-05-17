list = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];

function selectSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let targetIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[targetIndex]) {
        targetIndex = j;
      }
    }
    [arr[i], arr[targetIndex]] = [arr[targetIndex], arr[i]];
  }

  return arr;
}

console.log(selectSort(list));
