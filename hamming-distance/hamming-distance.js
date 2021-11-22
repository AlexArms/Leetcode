/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    const bitsAsString = (num) => {
        let bits = '';
        while (num > 0) {
            bits += (num % 2) + ''
            num = Math.trunc(num / 2)
        }
        return bits;
    }
    // const xBits = bitsAsString(x).split('').reverse().join('');
    // const yBits = bitsAsString(y).split('').reverse().join('');
    // console.log(xBits);
    // console.log(yBits);
    const dumbThing = x ^ y;
    return bitsAsString(dumbThing).split('').reduce((prev, curr) => {
        if (curr === '1') return prev + 1;
        else return prev;
    }, 0);
};