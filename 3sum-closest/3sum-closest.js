/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let summedNums = [];
    let smallestDiff = Infinity;
    for (let i = 0; i < nums.length; i++) {
        const num1 = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            const num2 = nums[j];
            for (let o = j + 1; o < nums.length; o++) {
                const num3 = nums[o];
                const currentSum = num1 + num2 + num3;
                const currentDiff = Math.abs(currentSum - target);
                if (currentDiff < smallestDiff) {
                    summedNums = currentSum;
                    smallestDiff = currentDiff;
                }
            }
        }
    }
    return summedNums;
};