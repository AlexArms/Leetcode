/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let index = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num !== val) {
            count++;
            nums[index] = num;
            index++;
        }
    }
    return count;
};