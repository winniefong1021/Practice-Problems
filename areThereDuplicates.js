/*
Implement a function called, areThereDuplicates which accepts a variable number of arguments,
and checks whether there are any duplicates among the arguments passed in.

Restrictions:
Time - O(n)
Space = O(n)

Bonus:
Time - O(n log n)
Space - O(1)

areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates('a', 'b', 'c', 'a', 'c'); // true
*/

// Below solution in O(n^2)
function areThereDuplicates() {
  let storage = [];
  for (let i = 0; i < arguments.length; i++) {
    if (storage.includes(arguments[i])) {
      return true;
    } else {
      storage.push(arguments[i]);
    }
  }
  return false;
}