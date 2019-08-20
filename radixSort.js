const getDigits = (num, place) => {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

const radixSort = (arr) => {
  let maxDigitCount = mostDigits(arr);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({length: 10}, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigits(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
}

console.log(radixSort([322, 10, 3, 1, 100, 4023, 532, 98, 4550]));