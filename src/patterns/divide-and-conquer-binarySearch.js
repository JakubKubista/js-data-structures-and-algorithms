"use strict"

/**
 * Pattern: Divide & Conquer.
 * Source: https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/lecture/9816154
 * Description: This pattern involves dividing a data set into smaller
 * chunks and then repeating a process with a subset of data.
 * This pattern can tremendously decrease time complexity.
 *
 * Task: Given a sorted array of integers, write a function called search (binary),
 * that accepts a value and returns the index where the value passed to the
 * function is located.
 */

function search(arr, num) {
    let min = 0;
    let max = arr.length - 1;
    let middle = 0;
    while (min <= max) {
        middle = Math.floor((min + max) / 2);
        if (arr[middle] < num) {
            min = middle + 1;
        } else if (arr[middle] > num) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
}

search([1,2,3,4,5,6],4) // 3
search([1,2,3,4,5,6],6) // 5
search([1,2,3,4,5,6],11) // -1