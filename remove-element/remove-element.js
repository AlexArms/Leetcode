/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
    let valCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[valCount] = nums[i];
            valCount++;
        }
    }
    return valCount;
};
