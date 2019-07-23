/*
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
This function should return the minimum length of a contiguous subarray of which the sum is greater than or equal
to the integer passed to the function. If there isn't one, return 0.

Constraints:
Time - O(n)
Space - O(1)

minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 => [2, 3] is the smallest subarray that equals 7
minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 => [5, 4]
minSubArrayLen([2, 3, 4, 60, 50, 1], 52); // 1 => 60 is greater than 52
minSubArrayLen([2, 3, 5], 7); // 0
*/

function minSubArrayLen(arr, target) {
  let total = 0;
  let start = 0;
  let end = 0;
  let shortest = Infinity;

  while (start < arr.length) {
    if (total < target && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= target) {
      shortest = Math.min(shortest, end - start);
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }

  return shortest === Infinity ? 0 : shortest;
}