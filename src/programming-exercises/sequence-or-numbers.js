/**
 * Count sequence or numbers
 * Source: https://www.hackerrank.com/, Booking test
 * Description: If an array contains a sequence of identical numbers,
 * then count it and store it into the array as strings in array in format
 * "number:count". Otherwise store it into the array as a number. Return
 * the array, which begins with sorted strings and ends with sorted numbers.
 * @param {Array} arr
 */

function expackNumbers(arr) {
  let frequencyCounter = {};
  let strings = [];
  let numbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i-1] || arr[i] === arr[i+1]) {
      frequencyCounter[arr[i]] = (frequencyCounter[arr[i]] || 0) + 1;
    } else {
      numbers.push(arr[i]);
    }
  }

  for (var val in frequencyCounter) {
      strings.push(val + ':' + frequencyCounter[val]);
  }

  return [...strings, ...numbers];
}

let input = [5, 5, 5, 7, 7, 3, 4, 7];
let expectedResult = ["5:3", "7:2", 3, 4, 7];
console.log(expackNumbers(input));
// console.log(Arrays.areEqual(expectedResult, expackNumbers(input));