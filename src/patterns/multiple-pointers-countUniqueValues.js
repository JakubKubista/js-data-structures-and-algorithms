"use strict"

/**
 * Pattern: Multiple Pointers.
 * Source: https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/lecture/9816154
 * Description: Creating pointers or values that correspond to an index or position and
 * move towards the beginning, end or middle based on a certain condition.
 *
 * Task: Count Unique Values
 * Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0. Return an array
 * that includes both values that sum to zero or undefined if a pair does not exist.
 */

function countUniqueValues(arr) {
    let count = 0;
    // Approach 1 - video
    /*
    for (let i = 1; i < arr.length; i++) {
        if (arr[count] !== arr[i]) {
            count++;
            arr[count] = arr[i];
        }
    }
    return count + 1;
    */

    // Approach 2 - my own
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i-1]) {
            count++;
        }
    }
    return count;
}

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4