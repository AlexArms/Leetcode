/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function(m, n) {
//     let pathCount = 0;
//     const countPaths = (row, col) => {
//         if (row === m && col === n) {
//             pathCount++;
//             return;
//         }
//         if (row < m) countPaths(row + 1, col);
//         if (col < n) countPaths(row, col + 1);
//     }
//     countPaths(1, 1);
//     return pathCount;
// };

var uniquePaths = function(m, n) {
    const res = [];
    for (let i = 0; i < n; i++) res.push([...new Array(m).fill(1)]); // initialize list
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            res[i][j] = res[i-1][j] + res[i][j-1];
        }
    }
    return res[n-1][m-1];
};