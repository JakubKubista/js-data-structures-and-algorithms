"use strict";

/**
 * Task: Returns string without duplicates of characters.
 * Fast way to implement, but not the best way.
 * Better way is to use SET, self balanging BST or Hash table
 * Time Complexity: O(n*n)
 * Source: https://www.geeksforgeeks.org/remove-duplicates-from-a-given-string/
 * @param {string} str
 */

function removeDuplicates(str) {
    let newStr = '';
    let uniques = {};
    for (let char of str) {
        if (!uniques[char]) {
            uniques[char] = true;
            newStr += char;
        }
    }

    return newStr;
}


function removeDuplicatesSet(str) {
    let set =  new Set(str);
    let newStr = '';
    for (let char of set) {
        newStr += char;
    }
    return newStr;
}


function testRemoveDuplicates() {
    let expected = 'geksfor';
    let str = "geeksforgeeks";
    console.log(removeDuplicates(str));
    console.log(removeDuplicates(str) === expected);
}
testRemoveDuplicates();