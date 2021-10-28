/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    const seenVals = {};
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const needed = target - num;
        if (needed in seenVals) {
            return [i, seenVals[needed]]
        }
        seenVals[num] = i;
    }
};