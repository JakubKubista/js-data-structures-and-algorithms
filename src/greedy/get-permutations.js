/**
 * Get Permutations
 * Time Complexity: O(n!)
 * Space Complexity: O(n!)
 * Source: https://initjs.org/all-permutations-of-a-set-f1be174c79f8
 *
 * Implement a function that gets all permutations or orderings of
 * a given string. For example if the input is ‘abc’, the output should
 * be [‘abc’, ‘acb’, ‘cab’, ‘cba’, ‘bca’, ‘bac’].
 */


function permutations(s) {
  let results = [];

  if (s.length === 1) {
    results.push(s);
    return results;
  }

  for (let i = 0; i < s.length; i++) {
    let currChar = s[i];
    let leftChars = s.substring(0, i) + s.substring(i+1)
    let permutation = permutations(leftChars);
    for (let j = 0; j < permutation.length; j++) {
        results.push(currChar + permutation[j]);
    }
  }
  return results;
}

let s = "xyz";
let expect = ["xyz", "xzy", "yxz", "yzx", "zxy", "zyx"];
let results = permutations(s);
console.log(results);
console.log(expect);