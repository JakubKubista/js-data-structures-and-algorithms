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
    // Array passage - O(n)
    for (let i = 0; i < str.length; i++) {
        let character = str.charAt(i);
        // Search character index of string - O(n)
        if (newStr.indexOf(character) < 0) {
            newStr += character;
        }
    }
    return newStr;
}

function testRemoveDuplicates() {
    let expected = 'geksfor';
    let str = "geeksforgeeks";
    console.log(removeDuplicates(str))
    if (removeDuplicates(str) === expected) {
        console.log(true);
    } else {
        console.log(false);
    }
}
testRemoveDuplicates();