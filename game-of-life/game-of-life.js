/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const boardCopy = copyMatrix(board);
    board.forEach((row, i) => {
        row.forEach((cell, j) => {
            // const surroundingSum = ;
            setCellVal(i, j, getSurroundingSum(i, j, boardCopy), board);
        });
    });
};

const getSurroundingSum = (row, col, board) => {
    let sum = 0;
    const directions = [[0, 1], [0, -1], [-1, 0], [1, 0], [1, 1], [-1, -1], [-1, 1], [1, -1]];
    directions.forEach(([dRow, dCol]) => {
        if (board[row + dRow] && board[row + dRow][col + dCol]) {
            sum++; 
        }
    });
    return sum;
}

const setCellVal = (row, col, sum, board) => {
    if (sum < 2 || sum > 3) board[row][col] = 0;
    if (sum === 3) board[row][col] = 1;
}

const copyMatrix = (matrix) => {
    return matrix.map(row => row.map(cell => cell));
}

// convert seen vals to strings
// if string, toggle boolean context after conversion to num and use conversion