/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n, sums = {}) {
  const digits = [];
  let tempNum = n;
  while (tempNum > 0) {
    digits.push((tempNum % 10) * (tempNum % 10));
    tempNum = Math.trunc(tempNum / 10);
  }
  const sum = digits.reduce((sum, val) => sum + val, 0);
  if (sum === 1) {
    return true;
  } else if (sum in sums) {
    return false;
  } else {
    sums[sum] = sum;
    return isHappy(sum, sums);
  }
};