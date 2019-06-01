"use strict"

/**
 * Left Rotation
 * Source: https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 */

function rotLeft(a, d) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
      if (i + d > a.length - 1) {
         let tmp = Math.abs(a.length - i - d);
         result[i] = a[tmp];
      } else {
         result[i] = a[i + d];
      }
  }
  return result;
}

function runUnitTests() {
let testCases = [
  '1 2 3 4 5',
  '41 73 89 7 10 1 59 58 84 77 77 97 58 1 86 58 26 10 86 51',
  '33 47 70 37 8 53 13 93 71 72 51 100 60 87 97',
];
let rotations = [
  '5 4',
  '20 10',
  '15 13',
];
let resultCases = [
  '5 1 2 3 4',
  '77 97 58 1 86 58 26 10 86 51 41 73 89 7 10 1 59 58 84 77',
  '87 97 33 47 70 37 8 53 13 93 71 72 51 100 60',
];

for (let i = 0; i < testCases.length; i++) {
  const a = testCases[i].split(' ').map(temp => parseInt(temp, 10));
  const d = rotations[i].split(' ').map(temp => parseInt(temp, 10));
  const results = resultCases[i].split(' ').map(temp => parseInt(temp, 10));
  console.log(results === rotLeft(a, d[1]));
}
}

function runPerformanceTest() {
let t0 = performance.now();
runUnitTests();
let t1 = performance.now();
console.log("Time Measured: " + Math.round((t1 - t0) * 100) / 100 + " ms.")
}
runPerformanceTest();