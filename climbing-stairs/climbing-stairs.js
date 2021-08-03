/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//     let combinations = 0;
    
//     const climbStairs = (step) => {
//         if (step === n) {
//             combinations++;
//             return;
//         }
//         if (step + 1 <= n) climbStairs(step + 1);
//         if (step + 2 <= n) climbStairs(step + 2);
//     }
    
//     climbStairs(0);
    
//     return combinations;
// };

const climbStairs = (step) => {
    let results = [];
    results[0] = 1;
    results[1] = 1;
    for (let i = 2; i <= step; i++) {
        results[i] = results[i - 1] + results[i - 2];
    }
    return results[step];
}