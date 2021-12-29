/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const boardCopy = board.map(row => row.map(cell => cell));
    board.forEach((row, i) => {
        row.forEach((cell, j) => {
            const surroundingSum = getSurroundingSum(i, j, boardCopy);
            if (surroundingSum < 2 || surroundingSum > 3) board[i][j] = 0;
            if (surroundingSum === 3) board[i][j] = 1;
        });
    });
};

const getSurroundingSum = (row, col, board) => {
    let sum = 0;
    const directions = [[0, 1], [0, -1], [-1, 0], [1, 0], [1, 1], [-1, -1], [-1, 1], [1, -1]];
    directions.forEach(([dRow, dCol]) => {
        if (board[row + dRow] && board[row + dRow][col + dCol]) sum++; 
    });
    return sum;
}

// convert seen vals to strings
// if string, toggle boolean context after conversion to num and use conversion