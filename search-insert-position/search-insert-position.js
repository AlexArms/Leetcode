/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let center = middleIndex(start, end);
  while (start < end) {
    let midEle = nums[center];
    if (midEle === target) {
      return center;
    } else if (midEle < target) {
      start = center + 1;
      center = middleIndex(start, end);
    } else if (midEle > target) {
      end = center - 1;
      center = middleIndex(start, end);
    }
  }
  return nums[center] === target ? center : nums[center] > target ? center : center + 1;
};

const middleIndex = (start, end) => {
  return Math.floor((start + end) / 2);
};