/**
 * Min sum
 * Description: The function returns the sum of the array "num".
 * For each "k" it is necessary to find the maximum value in the array
 * and to substitute it by a 2-times smaller value (rounded up).
 */

// First brute force ES5 solution

function validate(num, k) {
  if (num.length < 1 || num.length > 100000) return false;
  for (let value of num) {
    if (value < 1 || value > 10000) return false;
  }
  if (k < 1 || k > 10000000) return false;
  if (k < 1 || k > 10000000) return false;
  return true;
}

// Time Complexity: O(n*n)
function minSumES5(num, k) {
  if (k === 0) return 0;
  let value = Math.max(...num);
  let i = num.indexOf(value);
  num[i] = Math.round(value/2);
  minSumES5(num, --k);
  console.log(num);
  const add = (a, b) => a + b;
  return num.reduce(add);
}

/**
 * Binary search to find a node, where should be placed rounded max
 * value divided by 2.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * @param {Array} num
 * @returns object with index and value
 */

function findInsertNode(num) {
  let min = 0;
  let max = num.length - 1;
  let middle = 0;
  let value = Math.round(num[max]/2);
  while (min <= max) {
    middle = Math.floor((min + max) / 2);
    if (num[middle] < value) {
        min = middle + 1;
    } else if (num[middle] > value) {
        max = middle - 1;
        if(max >= 0) return {middle, value};
    } else {
        return {index: middle, value};
    }
  }
}

/**
 * The main function for iteration above k.
 *
 * Time Complexity: O(n log n) - longer array, O(n * n) - shorter array
 * Space Complexity: O(log(n)- longer array, O(1) - shorter array
 * @param {Array} num
 * @param {Number} k
 * @returns number
 */

function minSum(num, k) {
  let i = num.length;
  let node = {};
  // Sort an array to reach less complexity.
  num.sort(function(a, b){return a - b});
  while (k > 0) {
    // Hadle if array has only one value.
      if(num.length < 2) {
          num[0] = Math.round(num[0]/2);
      } else {

        if (i === 0 || i === num.length) {
            num.sort(function(a, b){return a - b});
            i = num.length;
        }
        // Search the biggest node at the end.
        node = findInsertNode(num);
        num.pop();
        num.splice(node.index, 0, node.value);
      }
      --k;
      --i;
  }
  // Get sum of numbers and return.
  const add = (a, b) => a + b;
  return num.reduce(add);
}

let num = [10,20,7,5,7,8,9,1,0,2,1,4,5,7,4,5,6,8,7,
  41,245,6548,215,354,5,8489,6846,648864,86468,
  684684,864,864,684,684,684,684,6846,848,10,20,7,5,
  7,8,9,1,0,2,1,4,5,7,4,5,6,8,7,41,245,6548,215,354,5,8489,
  6846, 648864, 86468, 684684,864 ,864 ,684 ,684,684,684,
  6846,848,10,20,7,5,7,8,9,1,0,2,1,4,5,7,4,5,6,8,7,41,245,
  6548,215,354, 5, 8489, 6846, 648864, 86468, 684684,864,
  864 ,684 ,684,684,684,6846,848,
  10,20,7,5,7,8,9,1,0,2,1,4,5,7,4,5,6,8,7,
  41,245,6548,215,354,5,8489,6846,648864,86468,
  684684,864,864,684,684,684,684,6846,848,10,20,7,5,
  7,8,9,1,0,2,1,4,5,7,4,5,6,8,7,41,245,6548,215,354,5,8489,
  6846, 648864, 86468, 684684,864 ,864 ,684 ,684,684,684,
  6846,848,10,20,7,5,7,8,9,1,0,2,1,4,5,7,4,5,6,8,7,41,245,
  6548,215,354, 5, 8489, 6846, 648864, 86468, 684684,864,
  864 ,684 ,684,684,684,6846,848,
  10,20,7,5,7,8,9,1,0,2,1,4,5,7,4,5,6,8,7,
  41,245,6548,215,354,5,8489,6846,648864,86468,
  684684,864,864,684,684,684,684,6846,848,10,20,7,5,
  7,8,9,1,0,2,1,4,5,7,4,5,6,8,7,41,245,6548,215,354,5,8489,
  6846, 648864, 86468, 684684,864 ,864 ,684 ,684,684,684,
  6846,848,10,20,7,5,7,8,9,1,0,2,1,4,5,7,4,5,6,8,7,41,245,
  6548,215,354, 5, 8489, 6846, 648864, 86468, 684684,864,
  864 ,684 ,684,684,684,6846,848];
let k = 10000;

console.log(num);
function runPerformanceTest() {
  let t0 = performance.now();
  console.log(minSum(num, k));
  let t1 = performance.now();
  console.log("Time Measured: " + Math.round((t1 - t0) * 100) / 100 + " ms.")
}
runPerformanceTest();