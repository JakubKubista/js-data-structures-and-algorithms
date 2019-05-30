"use strict"

/**
 * 2D Array - DS
 * Source: https://www.hackerrank.com/challenges/2d-array
 *
 * Complete the function hourglassSum in the editor below.
 * It should return an integer, the maximum hourglass sum in the array.
 *
 * hourglassSum has the following parameter(s):
 * arr: an array of integers
 */
function validateInputs(arr) {
    for (let i = 0, j = 0; i, j <= arr.length - 1; i++ , j++) {
        if (!(((arr[i].length >= -9 && arr[i].length <= 9)) &&
            ((i >= 0 && i <= 5) && (j >= 0 && j <= 5)))) {
            return false;
        }
    }
    return true;
}

function hourglassSum(arr) {

}

function test() {
    let input = '1 1 1 0 0 0\n' +
        '0 1 0 0 0 0\n' +
        '1 1 1 0 0 0\n' +
        '0 0 2 4 4 0\n' +
        '0 0 0 2 0 0\n' +
        '0 0 1 2 4 0';
    let strS = [input];
    let arrResults = [19];
    let arr = [];
    for (let i = 0; i < arrResults.length; i++) {
        let arrS = strS[i].split('\n');
        for (let j = 0; j < arrS.length; j++) {
            arr[j] = arrS[j].split(' ').map(temp => parseInt(temp, 10));
        }
        if (!(validateInputs(arr))) {
            console.log('Inputs are not valid.');
        }
        console.log(hourglassSum(arr) === arrResults[i]);
    }
}
test();