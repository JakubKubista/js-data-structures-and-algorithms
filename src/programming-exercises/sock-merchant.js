"use strict"

/**
 * Sock Merchant
 * Source: https://www.hackerrank.com/challenges/sock-merchant/
 *
 * Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.
 * sockMerchant has the following parameter(s):
 * n: the number of socks in the pile
 * ar: the colors of each sock
 */

function sockMerchant(n, ar) {
    let pairs = new Map();
    let total = 0;
    ar.forEach(col => {
        if(!pairs.get(col)) {
            pairs.set(col, 1);
        } else {
            pairs.set(col, pairs.get(col)+1);
            if (pairs.get(col) === 2) {
                pairs.set(col, 0);
                total++;
            }
        }
    });
    return total;
}

function test() {
    let n = 9;
    let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
    console.log(sockMerchant(n, ar));
}
test();