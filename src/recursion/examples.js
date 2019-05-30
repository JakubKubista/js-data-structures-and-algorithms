function power(x, n) {
    if (n === 0) {
        return 1;
    }
    return x * power(x, n - 1);
}
//power(2,1) // 2
//power(2,4) // 16
//power(3,2) // 9

function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}
//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function productOfArray(a) {
    if (a.length === 0) {
        return 1;
    }
    return a[0] * productOfArray(a.slice(1));
}
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function recursiveRange(n) {
    if (n === 0) {
        return 0;
    }
    return n + recursiveRange(n - 1);
}
// recursiveRange(6) // 21
// recursiveRange(10) // 55
