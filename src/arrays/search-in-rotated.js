"use strict"

/**
 * Data structure: Array
 * Task: Search an element in a sorted and rotated array.
 * Time Complexity: O(log n)
 * Source: https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/
 */

/**
 * Get middle pivot.
 * @param {number} low
 * @param {number} high
 * @return {number} pivot
 */
function getMiddlePivot(low, high) {
    return Math.floor((low + high) / 2);
}

/**
 * Choose the sorted half.
 * @param {object} payload
 * @return {number} sorted half
 */
function getSortedHalf(payload) {
    let {arr, low, mid, high, key} = payload;
    // If arr[low..mid] is sorted.
    if (arr[low] <= arr[mid]) {
        // Check if key is in half or other half.
        if (key >= arr[low] && key <= arr[mid]) {
            return search(arr, low, mid-1, key);
        }
        // Check if key is in other half.
        return search(arr, mid+1, high, key);
    }

    // arr[low..mid] is not sorted so
    // arr[mid..high] will be sorted.
    if (key >= arr[mid] && key <= arr[high]) {
        return search(arr, mid+1, high, key);
    }
    return search(arr, low, mid-1, key);
}

/** The main searching engine.
* @param {array} arr
* @param {number} low
* @param {number} high
* @param {number} key
* @return {number} index of element
*/
function search(arr, low, high, key) {
    // Key is not present.
    if (low > high) {
        return -1;
    }

    let mid = getMiddlePivot(low, high);
    if (arr[mid] === key) {
        return mid;
    }

    // Get the sorted half and continue.
    let payload = { arr, low, mid, high, key };
    return getSortedHalf(payload);
}

function test(expected = 2, key = 6) {
    let arr = [4, 5, 6, 7, 8, 9, 1, 2, 3];
    let searched = search(arr, 0, arr.length-1, key);
    console.log(arr);
    console.log(searched, key);
    console.log(searched === expected);
}
test();