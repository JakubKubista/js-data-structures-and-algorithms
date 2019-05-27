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
    let left = 0;
    let right = arr.length - 1;
    let uniques = [];
    let count = 0;
    while (left < right) {
        if (!uniques[arr[left]]) {
            uniques[arr[left]] = true;
            count++;
        }
        if (!uniques[arr[right]]) {
            uniques[arr[right]] = true;
            count++;
        }
        left++;
        right--;
    }
    return count;
}

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4