/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const spiralOrder = [];
  let row = 0;
  let col = 0;
  let direction = 'right';
  while (spiralOrder.length < matrix.length * matrix[0].length) {
      spiralOrder.push(matrix[row][col]);
      matrix[row][col] = undefined;
      if (direction === 'right') {
        if (matrix[row][col + 1] !== undefined) {
          col += 1;
        } else {
          direction = 'down';
          row += 1;
        }
      } else if (direction === 'down') {
        if (matrix[row + 1] && matrix[row + 1][col] !== undefined) {
          row += 1;
        } else {
          direction = 'left';
          col -= 1;
        }
      } else if (direction === 'left') {
        if (matrix[row][col - 1] !== undefined) {
          col -= 1;
        } else {
          direction = 'up';
          row -= 1;
        }
      } else if (direction === 'up' ) {
        if (matrix[row - 1] && matrix[row - 1][col] !== undefined) {
          row -= 1;
        } else {
          direction = 'right';
          col += 1;
        }
      }
  }
  return spiralOrder;
};