// https://www.youtube.com/watch?v=MZaf_9IZCrc
// O(n * log(n))

// const unsortedArr = [7, 2, 1, 8, 6, 3, 5, 4];
const unsortedArr = [4, 3, 2, 1, 0, -1];

function qsort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[Math.floor(Math.random() * arr.length)];
  const less = arr.filter(item => item < pivot);
  const greater = arr.filter(item => item > pivot);
  const equal = arr.filter(item => item === pivot);
  return [...qsort(less), ...equal, ...qsort(greater)];
}

console.log(qsort(unsortedArr));

// ==============================================================

function swap(arr, i, j) {
  const _tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = _tmp;
}

function partition(arr, fromIndex, toIndex) {
  const pivotPosition = Math.floor(Math.random() * arr.length);
  const pivot = arr[pivotPosition];

  while (toIndex >= fromIndex) {
    while (arr[toIndex] > pivot) {
      toIndex--;
    }
    while (arr[fromIndex] < pivot) {
      fromIndex++;
    }

    if (toIndex >= fromIndex) {
      swap(arr, fromIndex, toIndex);
      toIndex--;
      fromIndex++;
    }
  }
  return fromIndex;
}

function quickSort(arr, from = 0, to = arr.length - 1) {
  if (from < to) {
    const index = partition(arr, from, to);
    quickSort(arr, from, index - 1);
    quickSort(arr, index, to);
  }

  return arr;
}

console.log(unsortedArr);
console.log(quickSort(unsortedArr));
console.log(unsortedArr);
