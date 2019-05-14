"use strict"

/**
 * Nested Even Sum
 * Source: https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/lecture/8344072#content
 */
function nestedEvenSum(obj, sum=0) {
  for (var key in obj) {
      if (typeof obj[key] === 'object'){
          sum += nestedEvenSum(obj[key]);
      } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
          sum += obj[key];
      }
  }
  return sum;
}