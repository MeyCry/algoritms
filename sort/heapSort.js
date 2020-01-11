// O(n * log(n))

function swap(arr, i, j) {
  const _tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = _tmp;
}

function heapSort(arr) {
  const _arr = arr.slice();
  var array_length = _arr.length;

  function heap_root(input, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < array_length && input[left] > input[max]) {
      max = left;
    }

    if (right < array_length && input[right] > input[max]) {
      max = right;
    }

    if (max !== i) {
      swap(input, i, max);
      heap_root(input, max);
    }
  }

  function _heapSort(input) {
    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1) {
      heap_root(input, i);
    }

    for (i = input.length - 1; i > 0; i--) {
      swap(input, 0, i);
      array_length--;

      heap_root(input, 0);
    }
    return input;
  }

  return _heapSort(_arr);
}

const a = [3, 0, 2, 5, -1, 4, 1];
console.log(heapSort(a));
