/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const combinations = [];
    
    const findCombinations = (num, combination) => {
        if (combination.length === k) {
            combinations.push(combination);
            return;
        }
        for (let i = num; i <= n; i++) {
            const newComb = combination.concat(i);
            findCombinations(i + 1, newComb);
        }
    };
    
    findCombinations(1, []);
    
    return combinations;
};