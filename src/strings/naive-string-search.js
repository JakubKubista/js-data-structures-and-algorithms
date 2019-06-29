"use strict"

/**
 * Naive String Search
 * Source: https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/lecture/8344072#content
 */
function naiveSearchNested(long, short){
  var count = 0;
  for(var i = 0; i < long.length; i++){
      for(var j = 0; j < short.length; j++){
         if(short[j] !== long[i+j]) break;
         if(j === short.length - 1) count++;
      }
  }
  return count;
}

function naiveSearch(str, input) {
  let count = 0;
  let total = 0;
  for (let i = 0; i < str.length; i++) {
      if (input[count] === str[i]) {
          count++;
          if (input.length === count) {
              total++;
              count = 0;
          }
      } else count = 0;
  }
  return total;
}
console.log(naiveSearchNested('hell yeah goodgoodgood', 'good'));
console.log(naiveSearch('lorie loledlolol', 'lo'));