"use strict"

/**
 * Repeated String
 * Source: https://www.hackerrank.com/challenges/two-strings/
 *
 * Given two strings, determine if they share a common substring.
 * A substring may be as small as one character.
 * For example, the words "a", "and", "art" share the common substring a.
 * The words "be" and "cat" do not share a substring.
 */

function twoStrings(s1, s2) {
  let result = "NO";
  for (let i = 0; i < s1.length; i++) {
      if (s2.indexOf(s1[i]) > -1) {
          result = "YES";
          break;
      }
  }
  return result;
}

function test() {
  console.log(twoStrings('hello', 'world')) // YES
  console.log(twoStrings('hi', 'world')) // NO
}
test();