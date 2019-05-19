"use strict"

/**
 * Repeated String
 * Source: https://www.hackerrank.com/challenges/repeated-string
 *
 * Complete the repeatedString function in the editor below.
 * It should return an integer representing the number of occurrences
 * of a in the prefix of length N in the infinitely repeating string.
 *
 * repeatedString has the following parameter(s):
 * s: a string to repeat
 * n: the number of characters to consider
 */
function validateInputs(s, n) {
    return (s.length >= 1 && s.length <=100) && (n >= 1 && n<= Math.pow(10, 12));
}

function repeatedString(s, n) {
    const countA = s => s.split('a').length - 1;
    let reps = Math.floor(n / s.length);
    let rest = s.slice(0, n % s.length);
    return reps * countA(s) + countA(rest);
}

function test() {
    let arrS = ['aba', 'a', 'ab', 'ab', 'abcac', 'a', 'b'];
    let arrN = [10, Math.pow(10, 12), Math.pow(10, 12), Math.pow(10, 12)-1, 11, 1, 2];
    let arrResults = [7, Math.pow(10, 12), Math.pow(10, 12)/2, Math.pow(10, 12)/2, 5, 1, 0];
    for (let i = 0; i < arrS.length; i++) {
        if (validateInputs(arrS[i], arrN[i])) {
            console.log(repeatedString(arrS[i], arrN[i]) === arrResults[i]);
        } else {
            console.log('Inputs are not valid.');
        }
    }
}
test();