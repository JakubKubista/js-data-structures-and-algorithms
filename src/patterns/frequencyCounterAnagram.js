"use strict"

/**
 * Pattern: Frequency Counter
 * Task: Check equality of strings.
 * Source: https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/lecture/9816154
 *
 * Given two strings, write a function to determine if the second string is an
 * anagram of the first. An anagram is a word, phrase, or name formed by
 * rearranging the letters of another, such as cinema, formed from iceman.
 *
 * Try to compare two strings regardless of order.
 */

function validAnagram(str1, str2){
    if (str1.length !== str2.length) {
        return false;
    }

    let frequencyCounter = {};

    for (let val of str1) {
        if (frequencyCounter[val]) {
            frequencyCounter[val]++;
        } else {
            frequencyCounter[val] = 1
        }
    }

    for (let val of str2) {
        if (!frequencyCounter[val]) {
            return false;
        } else {
            frequencyCounter[val]--;
        }
    }
    return true;
  }

  function tests(){
    validAnagram('', '') // true
    validAnagram('aaz', 'zza') // false
    validAnagram('anagram', 'nagaram') // true
    validAnagram("rat","car") // false
    validAnagram('awesome', 'awesom') // false
    validAnagram('qwerty', 'qeywrt') // true
    validAnagram('texttwisttime', 'timetwisttext') // true
  }
  tests();