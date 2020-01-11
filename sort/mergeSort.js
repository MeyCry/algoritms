// O(n * log(n))
function mergeSort(arr) {
  const len = arr.length;
  if (len <= 1) {
    return arr;
  }
  const middle = Math.floor(len / 2);

  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle);

  return merge(
    mergeSort(leftArr), mergeSort(rightArr)
  );
}

function merge(leftArr, rightArr) {
  const result = [];
  let leftIndex = 0, rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }
  return result
    .concat(leftArr.slice(leftIndex))
    .concat(rightArr.slice(rightIndex));
}

if (mergeSort([5, 10, 1, 4, 20, -5]).toString() !== [-5, 1, 4, 5, 10, 20].toString()) {
  throw new Error('sort fail');
}
