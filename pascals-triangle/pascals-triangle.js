/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const triangleRows = [[1]];
    
    while (triangleRows.length < numRows) {
        const row = [1, 1];
        let index = 1;
        while (row.length <= triangleRows.length) {
            const prevRow = triangleRows[triangleRows.length - 1];
            const sumToAdd = (prevRow[index] || 1) + (prevRow[index - 1] || 1);
            row.splice(row.length - 1, 0, sumToAdd);
            index += 1;
        }
        triangleRows.push(row);
    }
    
    return triangleRows;
};