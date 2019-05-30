"use strict"

/**
 * Pattern: Multiple Pointers.
 * Source: https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/lecture/9816154
 * Description: Creating pointers or values that correspond to an index or position and
 * move towards the beginning, end or middle based on a certain condition.
 *
 * Task: Write a function called isSubsequence which takes in two strings and
 * checks whether the characters in the first string form a subsequence of the
 * characters in the second string. In other words, the function should check
 * whether the characters in the first string appear somewhere in the second
 * string, without their order changing.
 */

function isSubsequence(subStr, str) {
    let j = 0;
    for (let i = 0; i < str.length; i++) {
        if (subStr[j] === str[i]) {
            j++;
        }
        if (j === subStr.length) {
            return true;
        }
    }
    return false;
}

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)