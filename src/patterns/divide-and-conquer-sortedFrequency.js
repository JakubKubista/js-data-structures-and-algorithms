"use strict"

/**
 * Pattern: Divide & Conquer.
 * Source: https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/lecture/9816154
 * Description: This pattern involves dividing a data set into smaller
 * chunks and then repeating a process with a subset of data.
 * This pattern can tremendously decrease time complexity.
 * Time Complexity - O(log n)
 *
 * Task: Given a sorted array and a number, write a function called
 * sortedFrequency that counts the occurrences of the number in the array.
 */

function sortedFrequency(arr, num) {
    let min = 0;
    let max = arr.length - 1;
    let middle = 0;
    let start = 0;
    let end = 0;
    if (arr[max] < num) return -1;
    while (min <= max) {
        middle = Math.floor((min + max) / 2);
        if (arr[middle] < num) {
            min = middle + 1;
        } else if (arr[middle - 1] < num) {
            start = middle;
            break;
        } else {
            max = middle - 1;
        }
    }
    min = 0;
    max = arr.length - 1;
    while (min <= max) {
        middle = Math.floor((min + max) / 2);
        if (arr[middle] > num) {
            max = middle - 1;
        } else if (arr[middle + 1] > num ||
            (middle === arr.length -1 && arr[middle] === num)) {
            end = middle;
            break;
        } else {
            min = middle + 1;
        }
    }
    return end - start + 1;
}

let results = []
results.push(sortedFrequency([1,1,2,2,2,2,3],2)) // 4
results.push(sortedFrequency([1,1,2,2,2,2,3],3)) // 1
results.push(sortedFrequency([1,1,2,2,2,2,3],1)) // 2
results.push(sortedFrequency([1,1,2,2,2,2,3],4)) // -1
console.log(results);