/*
Write a function called findLongestSubString which accepts a string and returns the length of the longest
substring with all distinct characters.

Time Complexity: O(n)

findLongestSubString(''); // 0
findLongestSubString('thisishowwedoit'); // 6
findLongestSubString('bbbbb'); // 1
findLongestSubString('thecatinthehat'); // 7
*/

function findLongestSubString(str) {
  let longest = 0;
  let start = 0;
  let checkChar = {};

  for (var i = 0; i < str.length; i++) {
    let char = str[i];
    if (checkChar[char]) {
      start = Math.max(start, checkChar[char]);
    }
    longest = Math.max(longest, i - start + 1);
    checkChar[char] = i + 1;
  }

  return longest;
}