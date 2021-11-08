/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const combinations = [];
    
    const findCombs = (index, vals, sum) => {
        if (sum === target) {
            combinations.push(vals);
            return;
        }
        for (let i = index; i < candidates.length; i++) {
            const num = candidates[i];
            if (sum + num <= target) {
                findCombs(i, [...vals, num], sum + num);
            }
        }
    }
    findCombs(0, [], 0);
    
    return combinations;
};