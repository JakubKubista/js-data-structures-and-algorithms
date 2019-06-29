"use strict"

/**
 * Pattern: Frequency Counter
 * Source: https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/quiz/4410600
 * Description: Write a function called constructNote, which
 * accepts two strings, a message and some letters. The function
 * should return true if the message can be built with the letters
 * that you are given, or it should return false.
 */

function constructNote(first, second) {

    var letters = {};

    for (let i = 0; i < first.length; i++) {
        letters[first[i]] !== undefined ?
            letters[first[i]]++ : letters[first[i]] = 1;
    }

    for (let i = 0; i < second.length; i++) {
        if (letters[second[i]] !== undefined) letters[second[i]]--;
    }

    for (let i = 0; i < first.length; i++) {
        return !(letters[first[i]] > 0)
    }

    return true;
}

function tests() {
    console.log(constructNote('aa', 'abc')) // false
    console.log(constructNote('abc', 'dcba')) // true
    console.log(constructNote('aabbcc', 'bcabcaddff')) // true
}
tests();