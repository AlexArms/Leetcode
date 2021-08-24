/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const seenVals = {};
  for (let i = 0; i < nums.length; i++) {
    if (seenVals[nums[i]] !== undefined) {
      delete seenVals[nums[i]];
    } else {
      seenVals[nums[i]] = nums[i];
    }
  }
  return Object.keys(seenVals)[0];
};