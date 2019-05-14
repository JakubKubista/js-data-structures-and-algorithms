"use strict"

/**
 * Search an element in a sorted and rotated array.
 * Time Complexity: O(log n)
 * Source: https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/
 * @param {array} arr
 * @param {number} low
 * @param {number} high
 * @param {number} key
 * @return {number} index of element.
 */
function search(arr, low, high, key) {
    // Key is not present.
    if (low > high) {
        return -1;
    }

    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === key) {
        return mid;
    }

    // If arr[low..mid] is sorted
    if (arr[low] <= arr[mid]) {
        // Check if key is in half or other half.
        if (key >= arr[low] && key <= arr[mid]) {
            return search(arr, low, mid-1, key);
        }
        // Check if key is in other half.
        return search(arr, mid+1, high, key);
    }

    // If arr[low..mid] is not sorted,
    // then arr[mid..high] must be sorted.
    if (key >= arr[mid] && key <= arr[high]) {
        return search(arr, mid+1, high, key);
    }
    return search(arr, low, mid-1, key);
}

function test(expected = 2, key = 6) {
    let arr = [4, 5, 6, 7, 8, 9, 1, 2, 3];
    let searched = search(arr, 0, arr.length-1, key);
    console.log(arr);
    console.log(searched, key);
    console.log(searched === expected);
}
test();

/**
 * Algorithm:
 * 1) Find middle point mid = (l + h)/2
 * 2) If key is present at middle point, return mid.
 * 3) Else If arr[l..mid] is sorted
    a) If key to be searched lies in range from arr[l]
       to arr[mid], recur for arr[l..mid].
    b) Else recur for arr[mid+1..h]
 * 4) Else (arr[mid+1..h] must be sorted)
    a) If key to be searched lies in range from arr[mid+1]
       to arr[h], recur for arr[mid+1..h].
    b) Else recur for arr[l..mid]
 */