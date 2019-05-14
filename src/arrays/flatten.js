"use strict"

/**
 * Flattening an array
 * Example: [1,2,3,[1,2,3,4, [2,3,4]]] => [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
 */


/**
 * Returns flatten array (recursive)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
 * @param {array} arr
 * @param {number} depth
 */
function flatten(arr, depth) {
    return arr.flat(depth);
}

/**
 * Returns flatten array
 * @param {array} oldArr
 */
function flatten(oldArr) {
    var newArr = []
    for (var i = 0; i < oldArr.length; i++) {
        // check if item is nested array
        if (Array.isArray(oldArr[i])) {
            // recursivly concat to newArr
            newArr = newArr.concat(flatten(oldArr[i]))
        } else {
            newArr.push(oldArr[i])
        }
    }
    return newArr;
}

/**
 * Returns flatten array
 * @param {array} arr
 */
function flattenDeep(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}

function test() {
    const arr = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];
    console.log("Input data: [1,2,3,[1,2,3,4, [2,3,4]]]");
    console.log(flatten(arr, 2));
    console.log(flatten(arr));
    console.log(flattenDeep(arr));
}