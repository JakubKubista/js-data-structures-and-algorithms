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
  let longest = 0;
  let seen = {};
  let start = 0; // beginning of substring
  let index = 0;

  for (let val of str) {
    index++;
    if (seen[val]) {
      start = Math.max(start, seen[val]);
    }
    longest = Math.max(longest, index - start + 1);
    seen[val] = index + 1; // do not double count
  }
  return longest;
}

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6