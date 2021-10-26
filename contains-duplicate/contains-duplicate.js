/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const seenVals = new Set(nums);
    return seenVals.size != nums.length;
};