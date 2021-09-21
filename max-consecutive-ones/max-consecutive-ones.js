/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let biggestLine = 0;
    let currentLine = 0;
    nums.forEach(num => {
        if (num == 0) {
            currentLine = 0;
        } else {
            currentLine++;
            biggestLine = Math.max(biggestLine, currentLine);
        }
    });
    return biggestLine;
};