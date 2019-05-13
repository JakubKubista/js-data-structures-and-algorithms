"use strict";

/**
 * Returns reversed string
 * @param {string} str
 */
function reverseString(str) {
    // convert 'str' to array
    // reverse 'str' order
    // join the reverse order values together
    return str.split("").reverse().join("");
}

/**
 * Returns reversed individuals words
 * @param {string} str
 */
function reverseWords(str) {
    return str.split(" ").reverse().join(" ");
}
