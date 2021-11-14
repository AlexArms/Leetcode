/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let binary = '';
    let bitPosition = 1;
    while (n > 0) {
        binary += n % 2;
        n = Math.trunc(n / 2);
    }
    binary = binary.padEnd(32, '0');
    let num = 0;
    let position = 1;
    for (let i = binary.length - 1; i >= 0; i -= 1) {
        const bit = binary[i];
        if (bit === '1') {
            num += position;
        }
        position = position * 2;
    }
    return num;
};