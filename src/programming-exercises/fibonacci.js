"use strict";

/**
 * Fibonacci sequence
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

// 1) long loop solution
function fibLoop(n) {
  let now = 0;
  let last = 1;
  let prelast = 1;
  for (let i = 2; i < n; i++) {
    now = last + prelast;
    prelast = last;
    last = now;
  }
  return now;
}

function fibLong(n) {
  let now = 0;

  function helper(i, last, prelast) {
    if (n === i) return 0;
    now = last + prelast;
    return helper(i + 1, now, last);
  }
  helper(2, 1, 1)

  return now;
}

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// 2) ES6 generator solution
function* fibonacci(n) {
  const infinite = !n && n !== 0;
  let current = 0;
  let next = 1;

  while (infinite || n--) {
    yield current;
    [current, next] = [next, current + next];
  }
}

// 3) Infinity ES6 generator solution
// Compare to previous solutions before we do not takes count of numbers
// as argument, but the highest number, which we want to reach.
function* fibonacciInfinity(limit = Infinity) {
  let current = 0
  let next = 1

  while (current < limit) {
    yield current
      ;[current, next] = [next, current + next]
  }
}

fib(4) // 3
fib(10) // 55
fib(28) // 317811
fib(35) // 9227465


let [...arr] = fibonacciInfinity(Infinity);
console.log(arr);