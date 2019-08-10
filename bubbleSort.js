const bubbleSort = (arr) => {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
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

assert(bubbleSort([2, 1, 5, 8, 3]), [1, 2, 3, 5, 8], 'array should have been sorted');
assert(bubbleSort([3, 1, 2]), [1, 2, 3], 'array should have been sorted');