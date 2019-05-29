"use strict"

/**
 * Pattern: Helper Method Recursion.
 * Source: https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/lecture/9816154
 * Description: Function outer contains recursive function helper to compile Array or Data Structure.
 *
 * Task: Write a function to collect odd values from an array.
 */

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[helperInput.length-1] % 2 !== 0) {
      result.unshift(helperInput[helperInput.length-1]);
    }
    helperInput.pop();
    helper(helperInput);
  }
  helper(arr);

  return result;;
}

collectOddValues([1,2,3,4,5,6,7,8,9]);