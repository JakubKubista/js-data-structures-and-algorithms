"use strict";

/**
 * Returns reversed string
 * Time Complexity: O(n)
 * @param {string} str
 */
function reverseString(str) {
    // convert 'str' to array
    // reverse 'str' order
    // join the reverse order values together
    return str.split("").reverse().join("");
}

function reverseStringES6(str) {
    return [...str].reverse().join('');
}

/**
 * Returns reversed individuals words
 * Time Complexity: O(n)
 * @param {string} str
 */
function reverseWords(str) {
    return str.split(" ").reverse().join(" ");
}


function testReverse() {
    console.log("Input data: Some sample data")
    console.log(reverseString("Some sample data"));
    console.log(reverseWords("Some sample data"));
}

/**
 * Another approaches: for loop, recursion, reduce(), ternary operator
 */