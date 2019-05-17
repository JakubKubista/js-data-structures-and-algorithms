
"use strict"

/**
 * Counting Valleys
 * Source: https://www.hackerrank.com/challenges/counting-valleys
 *
 * Complete the countingValleys function in the editor below.
 * It must return an integer that denotes the number of valleys
 * Gary traversed. countingValleys has the following parameter(s):
 * n: the number of steps Gary takes
 * s: a string describing his path
 */


function countingValleys(n, s) {
    let altitude = 0;
    let valleys = 0;
    for (let i = 0; i < n; i++) {
        if (s.charAt(i) === 'U') {
            if (altitude === -1) {
                valleys++;
            }
            altitude++;
        } else {
            altitude--;
        }
    }
    return valleys;
}

function test() {
    let n = 12;
    let s = 'DDUUDDUDUUUD';
    console.log(countingValleys(n, s));
}
test();