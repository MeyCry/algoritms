// O(n2)
function insertionSort(arr) {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    let j = i - 1;
    const item = arr[i];
    while (j >= 0 && arr[j] > item) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = item;
  }
  return arr; // array mutation, so no need to return. But added just for convenient
}


if (insertionSort([5, 4, 3, 6]).toString() !== [3, 4, 5, 6].toString()) {
  throw new Error('sort fail');
}
