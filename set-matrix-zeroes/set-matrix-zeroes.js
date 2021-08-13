/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const toggled = new Set();
    const toggledRows = new Set();
    const toggledCols = new Set();
    const toggleRow = (row) => {
        matrix[row].forEach((num, i) => {
            if (num !== 0) {
                matrix[row][i] = 0;
                toggled.add(row + '-' + i);
            }
        });
    }
    const toggleColumn = (col) => {
        matrix.forEach((row, i) => {
            const num = row[col];
            if (num !== 0) {
                matrix[i][col] = 0;
                toggled.add(i + '-' + col);
            }
        });
    }
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        for (let j = 0; j < row.length; j++) {
            const element = row[j];
            if (element === 0 && !toggled.has(i + '-' + j)) {
                if (!toggledCols.has(j)) {
                    toggleColumn(j);
                    toggledCols.add(j);
                }
                if (!toggledRows.has(i)) {
                    toggleRow(i);
                    toggledRows.add(i);
                }
            }
        }
    }
};