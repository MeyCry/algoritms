// O(n2)
function bubbleSort (arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const item = arr[j];
      const nextItem = arr[j + 1];
      if (item > nextItem) {
        arr[j] = nextItem;
        arr[j + 1] = item;
      }
    }
  }
  return arr; // array mutation, so no need to return. But added just for convenient
}

// tests
if (!(bubbleSort([7, 2, 8, 1, 5, 4]).toString() === [1, 2, 4, 5, 7, 8].toString())) {
  throw new Error('sort fail');
}
