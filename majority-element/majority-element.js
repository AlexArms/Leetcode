/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const counts = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    counts[num] = (counts[num] || 0) + 1; 
    if (counts[num] > (nums.length / 2)) {
      return num;
    }
  }
};