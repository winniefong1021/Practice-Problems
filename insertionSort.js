const insertionSort = (arr) => {
  var current;

  for (var i = 1; i < arr.length; i++) {
    current = arr[i];

    for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = current;
  }
  return arr;
}

const assert = (actual, expected, message) => {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    console.log(message);
  } else {
    console.log('test passed');
  }
}

assert(insertionSort([2, 1, 5, 8, 3]), [1, 2, 3, 5, 8], 'array should have been sorted');
assert(insertionSort([3, 1, 2]), [1, 2, 3], 'array should have been sorted');