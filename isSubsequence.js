/*
Write a function called, isSubsequence, that takes in two strings and checks whether the characters in the first string form
a subsequence of the characters in the second string.

Time - O(n + m)
Space - O(1)

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'acb'); // false
isSubsequence('', 'acb'); // true
*/

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  if (str1.length === 0) {
    return true;
  }

  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    }

    if (i === str1.length) {
      return true;
    }

    j++;
  }

  return false;
}