/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let transformed = [];
  let rows = numRows;
  while (rows) {
    transformed.push([]);
    rows--;
  }
  let rowToAdd = 0;
  let direction = 'increase';
  for (let i = 0; i < s.length; i++) {
    transformed[rowToAdd].push(s[i]);
    if (direction === 'increase' && rowToAdd === numRows - 1) direction = 'decrease';
    if (direction === 'increase' && rowToAdd < numRows - 1) rowToAdd++;
    if (direction === 'decrease' && rowToAdd > 0) rowToAdd--;
    if (direction === 'decrease' && rowToAdd === 0) direction = 'increase';

  }
  return transformed.flat().join('');
};