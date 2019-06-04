"use strict"

/**
 * Binary Search
 * Source: https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/lecture/8344072#content
 * Time Complexity: O(log n)
 * Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.
 */

function binarySearch(a, x) {
    let left = 0;
    let right = a.length - 1;
    let middle = 0;
    while (left <= right) {
        middle = Math.floor((right + left) / 2);
        if (a[middle] > x) right = middle - 1;
        else if (a[middle] < x) left = middle + 1;
        else return middle;
    }
    return -1;
}

binarySearch([1, 2, 3, 4, 5], 2) // 1
binarySearch([1, 2, 3, 4, 5], 3) // 2
binarySearch([1, 2, 3, 4, 5], 5) // 4
binarySearch([1, 2, 3, 4, 5], 6) // -1
binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10) // 2
binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95) // 16
binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100) // -1