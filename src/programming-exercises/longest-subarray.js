"use strict"

// https://www.geeksforgeeks.org/longest-subarray-sum-elements-atmost-k/?fbclid=IwAR2535r6VA_IKVOfaJn__NpEV-zvlGG8__opVrX5kzVus9ISR60ZO0NnCLw

function longestSubarray(arr, k) {
    // optimalization - remove too big elements 
    function opt(x) {
        return x < k;
    }
    arr = arr.filter(opt);

    // sort
    arr.sort();

    // while sum of sorted elements < k 
    let res = 0;
    let i = 0;
    while (res + arr[i] <= k) {
        res += arr[i];
        i++;
    }

    // return count of iteration
    return i;
}

console.log(longestSubarray([3, 1, 2], 3));



