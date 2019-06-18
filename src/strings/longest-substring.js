/**
 * Write a function which returns the longest consecutive substring of repeating
 * characters in a string. Make the implementation in a way which is CPU linear to
 * the size of the input and memory constant to the size of the input, e.g.
 *
 * Complexity: O(n) CPU and O(1) memory
 *
 * Example input:
 * "abbbcccddaa"
 *
 * Example output:
 * "bbb" or "ccc"
 */

// used sliding window approach

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0; // beginning of substring
  let index = 0;

  for (let i = 0; i < str.length; i++) {
    index++;
    if (seen[str[i]]) {
      start = Math.max(start, seen[str[i]]);
    }
    longest = Math.max(longest, index - start + 1);
    seen[str[i]] = index + 1; // do not double count
  }

  let result = str[0];
  for (let i = 0; i < str.length; i++) {
    result = (str[i] !== result[0]) ? str[i] : result + str[i];
    if (result.length === longest) break
  }
  return result;
}
console.log(findLongestSubstring("abbbcccddaa"));
