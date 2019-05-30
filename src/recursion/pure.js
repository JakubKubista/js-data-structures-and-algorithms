"use strict"

/**
 * Pattern: Pure Recursion.
 * Source: https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/lecture/9816154
 * Description: Recursive function building result with a variable (newArr),
 * which is initiated for each push function into the call stack.
 *
 * Task: Write a function to collect odd values from an array.
 */

function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
      return newArr;
  }

  if (arr[0] % 2 !== 0) {
      newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1,2,3,4,5]);