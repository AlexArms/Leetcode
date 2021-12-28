/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const ans = [];
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        ans.push(nums[val]);
    }
    return ans;
};