/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let valuesObj = {};
    const sumIndexes = [];
    for (let i = 0; i < numbers.length; i++) {
        if (valuesObj[numbers[i]] !== undefined) {
            sumIndexes.push(valuesObj[numbers[i]] + 1, i + 1);
            break;
        } else {
            valuesObj[target - numbers[i]] = i;
        }
    }
    console.log(valuesObj);
    return sumIndexes;
};