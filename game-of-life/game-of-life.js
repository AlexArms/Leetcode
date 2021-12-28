/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const boardCopy = board.map(row => row.map(cell => cell));
    for (let i = 0; i < boardCopy.length; i++) {
        const row = boardCopy[i];
        for (let j = 0; j < row.length; j++) {
            let surroundingSum = checkSurroundingSum(i, j, boardCopy);
            let val = 0;
            if (surroundingSum < 2) {
                val = 0;
            } else if (surroundingSum > 3) {
                val = 0;
            } else if (surroundingSum === 3) {
                val = 1;
            } else {
                val = boardCopy[i][j];
            }
            board[i][j] = val;
        }
    }
    // return board;
};

const checkSurroundingSum = (row, col, board) => {
    let sum = 0;
    if (board[row][col + 1]) sum++;
    if (board[row][col - 1]) sum++;
    if (board[row - 1] && board[row - 1][col]) sum++;
    if (board[row + 1] && board[row + 1][col]) sum++;
    if (board[row + 1] && board[row + 1][col + 1]) sum++;
    if (board[row + 1] && board[row + 1][col - 1]) sum++;
    if (board[row - 1] && board[row - 1][col + 1]) sum++;
    if (board[row - 1] && board[row - 1][col - 1]) sum++;
    return sum;
}