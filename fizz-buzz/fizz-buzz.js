/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const result = [];
    let current = 1;
    while (current <= n) {
        let str = '';
        if (current % 3 === 0) {
            str += 'Fizz';
        }
        if (current % 5 === 0) {
            str += 'Buzz';
        }
        if (str.length === 0) {
            str += current;
        }
        result.push(str);
        current++;
    }
    return result;
};