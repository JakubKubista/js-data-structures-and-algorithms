"use strict";

/**
 * Factorial
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function factorial(num) {
    if (num === 0) return 1;
    return num * Factorial(num - 1);
}
function factorialLoop(num) {
    let total = 1;
    for (let i = num; i > 0; i--) {
        total *= i;
    }
    return total;
}

console.log(120 === factorial(5));
