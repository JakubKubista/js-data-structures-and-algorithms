"use strict";

/**
 * Task: Check if is a string palindrome.
 * Time Complexity: O(n / 2)
 * @param {string} str
 */
function isPalindrome(str) {
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}

function test() {
    console.log(isPalindrome('isomorphic'))
}