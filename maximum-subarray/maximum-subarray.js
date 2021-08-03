/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let largestTotal = nums[0] || 0;
    for (let i = 0; i < nums.length; i++) {
        let currentTotal = nums[i];
        if (currentTotal > largestTotal) {
                largestTotal =  currentTotal;
        }
        for (let j = i + 1; j < nums.length; j++) {
            currentTotal += nums[j];
            if (currentTotal > largestTotal) {
                largestTotal =  currentTotal;
            }
        }
    }
    return largestTotal;
};