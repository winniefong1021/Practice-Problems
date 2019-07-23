/*
Given an array of integers and a number, write a function called maxSubArraySum, which finds the max sum of a subarray
with the length of the number passed in.

Note that the subarray must consist of consecutive elements from the original array.

Constraints:
Time - O(n)
Space - O(1)

maxSubArraySum([100, 200, 300, 400], 2); // 700
maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubArraySum([-3, 4, 0, -2, 6, -1], 2); // 5
maxSubArraySum([2, 3], 3); // null
*/

function maxSubArraySum(arr, lgth) {
  if (arr.length < lgth) {
    return null;
  }

  let total = 0;
  for (let i = 0; i < lgth; i++) {
    total += arr[i];
  }

  let currentTotal = total;
  for (let j = lgth; j < arr.length; j++) {
    currentTotal += arr[j] - arr[j - lgth];
    total = Math.max(total, currentTotal);
  }

  return total;
}