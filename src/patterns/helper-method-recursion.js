"use strict"

/**
 * Pattern: Helper Method Recursion.
 * Source: https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/lecture/9816154
 * Description: Function outer contains recursive function helper to compile Array or Data Structure.
 */

function outer(input) {
  let outerScoped = [];

  function helper(helperInput) {
    // modify outerScoped variable
    helper(helperInput--);
  }
  helper(input);
  return outerScoped;
}
