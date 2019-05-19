"use strict"

/**
 * Equalize the Array
 * Source: https://www.hackerrank.com/challenges/equality-in-a-array
 *
 * Complete the equalizeArray function in the editor below.
 * It must return an integer that denotes the minimum number of deletions required.
 *
 * equalizeArray has the following parameter(s):
 * arr: an array of integers
 */
function validateInputs(arr, n) {
    arr.forEach(char => {
        if (!(char >= 1 && char <= 100)) {
            return false;
        }
    });
    return (n >= 1 && n <= 100);
}

function equalizeArray(arr) {
    let counts = [];
    counts.length = Math.max(...arr) + 1;
    counts.fill(0);
    for (let i = 0; i < arr.length; i++) {
        counts[arr[i]]++;
    }
    return arr.length - Math.max(...counts);
}

function test() {
    let strS = ['3 3 2 1 3', '1 2 3 1 2 3 3 3'];
    let arrN = [5, 8];
    let arrResults = [2, 4];
    for (let i = 0; i < arrN.length; i++) {
         const arr = strS[i].split(' ').map(temp => parseInt(temp, 10));
        if (validateInputs(arr, arrN[i])) {
            console.log(equalizeArray(arr) === arrResults[i]);
        } else {
            console.log('Inputs are not valid.');
        }
    }
}
test();