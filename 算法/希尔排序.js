// 希尔排序作为插入排序的一个变种，按递减的步骤条分组进行排序，直到步骤条为1时进行最后排序即可完成排序操作
list = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];

function shellSort(arr) {
  let gap = Math.floor(arr.length / 2);
  while (gap >= 1) {
    for (let i = 0; i < arr.length - gap; i++) {
      let target = i + gap;
      if (arr[target] < arr[i]) {
        [arr[i], arr[target]] = [arr[target], arr[i]];
      }
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
}

console.log(shellSort(list));
