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

function reverseLoop(str) {
    let newStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr
}

function reverseRecursive(str, newStr = '') {
    if (!str) return newStr;
    newStr += str[str.length - 1];
    str = str.slice(0, str.length - 1);
    return reverseRecursive(str, newStr);
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