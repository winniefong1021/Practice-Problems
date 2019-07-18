/*
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
Time Complexity: O(n)

Sample Input:
sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(35678, 58023); // false
sameFrequency(22, 222); // false
sameFrequency(18233, 32813); // true
*/

function sameFrequency(num1, num2) {
  let num1Obj = {};
  let num2Obj = {};

  let num1Digits = num1.toString().split('');
  let num2Digits = num2.toString().split('');

  if (num1Digits.length !== num2Digits.length) {
    return false;
  }

  for (let i = 0; i < num1Digits.length; i++) {
    if (num1Obj[num1Digits[i]]) {
      num1Obj[num1Digits[i]]++;
    } else {
      num1Obj[num1Digits[i]] = 1;
    }
  }

  for (let i = 0; i < num2Digits.length; i++) {
    if (num2Obj[num2Digits[i]]) {
      num2Obj[num2Digits[i]]++;
    } else {
      num2Obj[num2Digits[i]] = 1;
    }
  }

  for (let key in num1Obj) {
    if (num1Obj[key] !== num2Obj[key]) {
      return false;
    }
  }

  return true;
}