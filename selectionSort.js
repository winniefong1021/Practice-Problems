const selectionSort = (arr) => {
  let smallest;
  for (let i = 0; i < arr.length; i++) {
    smallest = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < smallest) {
        smallest = arr[j];
      }

      if (arr[i] !== smallest) {
        arr[j] = arr[i];
        arr[i] = smallest;
      }
    }
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

assert(selectionSort([2, 1, 5, 8, 3]), [1, 2, 3, 5, 8], 'array should have been sorted');
assert(selectionSort([3, 1, 2]), [1, 2, 3], 'array should have been sorted');