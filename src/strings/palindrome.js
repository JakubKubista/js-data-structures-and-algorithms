"use strict";

/**
 * Task: Check if is a string palindrome.
 * Time Complexity: O(n / 2)
 * @param {string} str
 */


function isPalindromeLoop(s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[s.length-1-i]) return false;
    }
    return true;
}

function isPalindrome(s) {
    if (s.length < 2) return true;
    if (s[0] !== s[s.length-1]) return false;
    return isPalindrome(s.substring(1,s.length-1));
}

function isPalindrome(str) {
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}

function test() {
    console.log(isPalindrome('isomorphic')); // false
    console.log(isPalindrome('foobar')); // false
    console.log(isPalindrome('tacocat')); // true
    console.log(isPalindrome('amanaplanacanalpanama')); // true
    console.log(isPalindrome('amanaplanacanalpandemonium')); // false
}
test();