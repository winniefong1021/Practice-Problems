// BRUTE FORCE - O(n^2) time and O(1) space
// var twoSum = function(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// OPTIMAL - O(n) time with O(1) lookup and O(n) space
var twoSum = function(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] >= 0) {
      return [obj[nums[i]], i];
    }
    obj[target - nums[i]] = i;
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([1, 4, 6, 9, 5, 3], 8)); // [4, 5]