/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const tribbNums = [0, 1, 1];
    if (n < 3) return tribbNums[n];
    let last = tribbNums[tribbNums.length - 1];
    let secondLast = tribbNums[tribbNums.length - 2];
    let thirdLast = tribbNums[tribbNums.length - 3];
    let newNum = last + secondLast + thirdLast;
    while (n > 3) {
        thirdLast = secondLast;
        secondLast = last;
        last = newNum;
        newNum = (last + secondLast + thirdLast);
        n--;
    }
    return newNum;
};