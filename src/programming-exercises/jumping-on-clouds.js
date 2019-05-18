
"use strict"

/**
 * Jumping on the Clouds
 * Source: https://www.hackerrank.com/challenges/jumping-on-the-clouds
 *
 * Complete the jumpingOnClouds function in the editor below.
 * It should return the minimum number of jumps required, as an integer.
 * jumpingOnClouds has the following parameter(s):
 * c: an array of binary integers
 */

// Hacky solution (3-4 ms).
function jumpingOnCloudsEvenOdd(arr) {
  let count = 0;
  let rule = true;  // even
  for (let i = 0; i < arr.length; i++) {
    if (i>0 && arr[i] === 0){
      if (((rule && (i % 2 === 0)) || (!rule && (i % 2 !== 0))) ||
          (arr.length-1 === i && arr[i-1] === 0)) {
        count++;
      }
    }
    if (arr[i+2] === 1) {
      rule = (rule) ? false : true; // odd : even
    }
  }
  return count;
}

// Too difficult to read solution (3-6 ms).
function jumpingOnCloudsAllConditions(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i>0 && arr[i] === 0){
      if (arr[i-1] === 1 && arr[i-2] === 0) {
        count++;
      }
      else if (arr[i-1] === 0 && arr[i-2] === 1) {
        count++;
      }
      else if (arr[i-1] === 0 && arr[i+1] === 1) {
        count++;
      }
      else if ((arr[i-1] === 0 && arr[i-2] === 0) && (i !== arr.length-2)) {
        count++;
      }
      else if (arr[i-1] === 1 && arr[i+1] === 1) {
        count++;
      } else if (i === 1 && arr[i-1] === 1) {
        count--;
      }

      if (arr[i-1] === 0 && arr[i-2] === 0 && arr[i-3] === 0) {
        i++;
      } else if (arr[i-1] === 0 && arr[i-2] === 1 && arr[i+1] === 0) {
        i++;
      } else if (i === 1 && arr[i-1] === 1) {
        count--;
      }
    }
    // console.log(i, count, arr[i]);
  }
  return count;
}

// Recursion for jumpingOnClouds function.
function findPaths(c, paths) {
  if (c.length > 1) {
    // Copies of the paths.
      let path1 = paths.slice();
      let path2 = paths.slice();

      // Check path1/2 where we iterate over c by a jump of 1.
      // Check if c[1/2] is 1.
      // Invalidate path1/2 or add 1/2 to the path1/2.
      path1 = (c[1] !== 1) ? [ ...path1, 1 ] : 0;
      path2 = (c[2] !== 1) ? [ ...path2, 2] : 0;

      // Invalidating that we can't continue with a jump of 1/2.
      if (path1 === 0 && path2 === 0) {
          paths = 0;
      } else if (path1 !== 0 && path2 === 0) {
          return findPaths(c.slice(1), path1);
      } else if (path1 === 0 && path2 !== 0) {
          return findPaths(c.slice(2), path2);
      } else if (path1 !== 0 && path2 !== 0) {
          path1 = findPaths(c.slice(1), path1);
          path2 = findPaths(c.slice(2), path2);

          // Compare and return the shortest path.
          return (path1.length < path2.length) ? path1 : path2;
      }
  }
  return paths;
}

// The best solution (4-6 ms).
function jumpingOnClouds(c) {
  let jumps = 0;
  // Base cover.
  if (c.length >= 2 && c.length <= 100) {
    jumps = findPaths(c, []);
  }
  return ((typeof jumps === "number") ? jumps : jumps.length);
}

function runUnitTests() {
  let testCases = [
    '0 0 1 0 0 1 0',
    '0 0 0 0 1 0',
    '0 0 0 1 0 0',
    '0 1 0 0 1 0 0 1 0 0 1 0',
    '0 1 0 0 1 0',
    '0 1 0 0 1 1',
    '0 0 0 0 0 0',
    '1 1 1 1 1 1',
    '0 0 0 1 1 1',
    '1 1 1 1 0 0 0 0',
    '0 1 0 0 1 1 0 1 0 0 1 1',
    '0 0 0 1 0 0 0 0 0 1 0 0',
    '0 1 0 1 0 1 0 1 0 1 0 1',
    '1 0 1 0 1 0 1 0 1 0 1 0',
    '',
  ];
  let testResults = [4, 3, 3, 7, 3, 2, 3, 0, 1, 2, 5, 6, 5, 5, 0];
  for (let i = 0; i < testCases.length; i++) {
    const arr = testCases[i].split(' ').map(temp => parseInt(temp, 10));
    console.log(testResults[i] === jumpingOnClouds(arr));
  }
}

function runPerformanceTest() {
  let t0 = performance.now();
  runUnitTests();
  let t1 = performance.now();
  console.log("Time Measured: " + Math.round((t1 - t0) * 100) / 100 + " ms.")
}
runPerformanceTest();