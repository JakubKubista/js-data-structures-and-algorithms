"use strict"

/**
 * Capitalize Words
 * Source: https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/lecture/8344072#content
 */
function capitalizeWords (array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
}