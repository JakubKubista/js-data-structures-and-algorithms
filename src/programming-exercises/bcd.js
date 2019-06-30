/**
 * Amazon demo test: BCD.
 * The greatest common divisor (BCD), also called highest common factor (HCF)
 * of N numbers is the largest positive integer that divides all numbers
 * without giving a remainder.
 */

let gcdNeighbors = (a, b) => {
  if (!b) return a;
  return gcdNeighbors(b, a % b);
};

function generalizedGCD(num, arr) {
  if (!num) return null;
  let a = arr[0];
  for (let i = 1; i < num; i++) a = gcdNeighbors(a, arr[i]);
  return a;
}

function test() {
  cellCompete(5, [2, 3, 4, 5, 6]) // 1
  cellCompete(5, [2, 4, 6, 8, 10]) // 2
}