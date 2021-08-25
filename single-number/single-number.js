/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let outlier = 0;
  nums.forEach(num => outlier ^= num);
  return outlier;
};