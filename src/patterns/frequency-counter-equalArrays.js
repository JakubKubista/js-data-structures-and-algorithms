"use strict"

/**
 * Pattern: Frequency Counter
 * Source: https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/lecture/9816154
 * Description:  This pattern uses objects or sets to collect values/frequencies of values.
 * This can often avoid the need for nested loops or O(N^2) operations with arrays / strings.
 *
 * Task: Check equality of arrays.
 * Try to compare two arrays (the second one has multiples of the first).
 */

function equalArrays(arr1, arr2) {

    if (arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let val in frequencyCounter1) {
        if (!(val ** 2 ) in frequencyCounter2) {
            return false;
        }
        if (!(frequencyCounter2[val ** 2] === frequencyCounter1[val])) {
            return false;
        }
    }
    return true;
}

equalArrays([1, 2, 3], [9, 1, 4]);