/**
 * Largest Permutation
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * Source: https://www.hackerrank.com/challenges/largest-permutation/problem
 *
 * You are given an unordered array of unique integers incrementing from 1.
 * You can swap any two elements a limited number of times. Determine
 * the largest lexicographical value array that can be created by executing
 * no more than the limited number of swaps.
 */

function largestPermutation(k, arr) {
  let pos = {};
  let j = 0;

  // Create array of position indexes.
  for (let num of arr) {
      pos[num] = j;
      j++;
  }

  for (let i = 0; i < arr.length; i++) {
      // Init swap position.
      let swap = arr.length-i;

      // If k is done, then break the loop.
      if (k === 0) break;

      // Check if it is largest.
      if (arr[i] === swap) continue;

      // Find position of i'th largest value.
      let tmpSwap = pos[swap];

      // Swap the elements position.
      pos[arr[i]] = pos[swap];
      pos[swap] = tmpSwap;

      // Swap the largest value with the value at i.
      let tmp = arr[tmpSwap];
      arr[tmpSwap] = arr[i];
      arr[i] = tmp;
      --k;
  }
  return arr;
}

function test() {
  let arr = [4, 2, 3, 5, 1];
  let k = 5;
  let expect = [5, 2, 3, 4, 1];
  let results = largestPermutation(k, arr)
  console.log(results);
  console.log(expect);
}
test();