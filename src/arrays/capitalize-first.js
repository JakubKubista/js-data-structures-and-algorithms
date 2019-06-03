"use strict"

/**
 * Capitalize First
 * Source: https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/lecture/8344072#content
 */
function capitalizeFirstLoop (array) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    let first = array[i][0].toUpperCase();
    let rest = array[i].slice(1, array[i].length);
    res.unshift(first+rest);
  }
  return res;
}

function capitalizeFirst (array, res = []) {
  if (array.length === 0) return res;
  let first = array[array.length-1][0].toUpperCase();
  let rest = array[array.length-1].slice(1, array[array.length-1].length);
  res.unshift(first+rest);
  array.pop();
  return capitalizeFirst(array, res);
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']