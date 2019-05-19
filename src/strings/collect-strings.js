"use strict"

/**
 * Collect Strings
 * Source: https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/lecture/8344072#content
 */
function collectStrings(obj) {
  var stringsArr = [];
  for(var key in obj) {
      if(typeof obj[key] === 'string') {
          stringsArr.push(obj[key]);
      }
      else if(typeof obj[key] === 'object') {
          stringsArr = stringsArr.concat(collectStrings(obj[key]));
      }
  }

  return stringsArr;
}