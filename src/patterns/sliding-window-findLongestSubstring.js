"use strict"

/**
 * Pattern: Sliding window.
 * Source: https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/lecture/9816154
 * Description: This pattern involves creating a window which can
 * either be an array or number from one position to another.
 * Very useful for keeping track of a subset of data in an array/string etc.
 *
 * Task: Write a function called findLongestSubstring, which accepts a string
 * and returns the length of the longest substring with all distinct characters.
 */

function findLongestSubstring(str){
  let j = 0;
  let max = 0;
  let tmp = {};
  for (let i = 0; i < str.length; i++) {
      if (tmp[str[i]]) {
          tmp = {};
          j = 0;
      }

      j++;
      tmp[str[i]] = true;

      if (j > max) {
          max = j;
      }
  }
  return max;
}

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6