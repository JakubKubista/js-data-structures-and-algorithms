/**
 * Greedy Florist
 * Complexity: O(n*log n)
 * Source: https://www.hackerrank.com/challenges/greedy-florist/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
 *
 * Description: Complete the getMinimumCost function in the editor below.
 * It should return the minimum cost to purchase all of the flowers.
 * getMinimumCost has the following parameter(s):
 *    c: an array of integers representing the original price of each flower
 *    k: an integer, the number of friends
 */
function getMinimumCost(k, c) {
    if (k >= c.length) return c.reduce((a, b) => a + b, 0);

    c.sort(function(a, b) {
        return b - a;
    });

    let sum = 0;
    let counter = {};

    for (let i = 0; i < c.length; i++) {
        if (k <= i) {
            if (!counter[c[i]]) counter[c[i]] = 0;
            counter[c[i]]++;
            let tmp = Math.floor(i / k) + counter[c[i]];
            sum += c[i] * tmp;
        } else {
            sum += c[i];
        }
    }
    return sum;
}

(function(){
  let k = [3, 2, 3, 3, 7];
  let inputs = ['2 5 6','2 5 6', '1 3 5 7 9', '3 3 1 1 5 7 9', '1 2 3 4'];
  let outputs = [13, 15, 29, 42, 10];
  let c = [];

  for (let i = 0; i < inputs.length; i++) {
      c[i] = inputs[i].split(' ').map(temp => parseInt(temp, 10));
      console.log(outputs[i] === getMinimumCost(k[i], c[i]));
  }
})()