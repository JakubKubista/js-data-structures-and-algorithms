"use strict"

/**
 * Pattern: Divide & Conquer.
 * Source: https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/lecture/9816154
 * Description: This pattern involves dividing a data set into smaller
 * chunks and then repeating a process with a subset of data.
 * This pattern can tremendously decrease time complexity.
 * Time Complexity - O(log n)
 *
 * Task: Given an array of 1s and 0s which has all 1s first
 * followed by all 0s, write a function called countZeroes,
 * which returns the number of zeroes in the array.
 */

function countZeroes(arr) {
    let min = 0;
    let max = arr.length - 1;
    let middle = 0;
    if (arr[0] === 0) return arr.length;
    if (arr[arr.length-1] === 1) return 0;
    while (min <= max) {
        middle = Math.floor((min + max) / 2);
        if (arr[middle]) {
            min = middle + 1;
        } else if (arr[middle - 1] === 1) {
            return arr.length - middle;
        } else {
            max = middle - 1;
        }
    }
}

let results = []
results.push(countZeroes([1,1,1,1,0,0])) // 2
results.push(countZeroes([1,0,0,0,0])) // 4
results.push(countZeroes([0,0,0])) // 3
results.push(countZeroes([1,1,1,1])) // 0
console.log(results);