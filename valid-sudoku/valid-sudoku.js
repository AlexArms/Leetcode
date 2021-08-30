/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const columns = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  const rows = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  const grids = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const val = board[i][j];
      if (val !== '.') {
        if (val in rows[i]) {
          return false;
        } else {
          rows[i][val] = val;
        }
        if (val in columns[j]) {
          return false;
        } else {
          columns[j][val] = val;
        }
        const gridIndex = Math.floor((i / 3)) * 3 + Math.floor(j / 3);
        if (val in grids[gridIndex]) {
          return false; 
        } else {
          grids[gridIndex][val] = val;
        }
      }
    }
  }
  return true;
};