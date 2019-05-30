"use strict"

/**
 * Rorate the Matrix
 * Source: Cracking the Coding Interview:
 * 150 Programming Questions and Solutions (John Mongan)
 *
 * Given an image represented by an NxN matrix, where each
 * pixel in the image is 4 bytes, write a method to rotate
 * the image by 90 degrees.
 *
 * Time Complexity: O(N*N)
 * Space Complexity: O(1)
 */

function rorateMatrix(m) {
  console.log(matrix);
  for (let i = 0; i < m.length / 2; i++) {
    let rows = m.length -1 -i;
    for (let j = i; j < rows; j++) {
      let cols = m.length -1 -j;
      let tmp = m[i][j];
      m[i][j] = m[cols][i];
      m[cols][i] = m[rows][cols];
      m[rows][cols] = m[j][rows];
      m[j][rows] = tmp;
    }
  }
  return m;
}

let matrix = [
  [1, 2, 3, 4],
  [2, 3, 1, 1],
  [3, 1, 2, 3],
  [4, 4, 2, 4]
];

let result = [
  [4, 3, 2, 1],
  [4, 1, 3, 2],
  [2, 2, 1, 3],
  [4, 3, 1, 4]
];

console.log(areEqual(result, rorateMatrix(matrix)));