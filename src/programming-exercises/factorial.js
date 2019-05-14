"use strict";

/**
 * Factorial
 * Time Complexity: O(1)
 */

function Factorial(num) {
    if (num === 0) return 1;
    return num * Factorial(num - 1);
}

function test() {
    console.log("Factorial: 5");
    console.log(Factorial(5));
}
test()