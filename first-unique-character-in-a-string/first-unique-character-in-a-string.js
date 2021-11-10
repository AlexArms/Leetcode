/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const indexes = {};
    
    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        if (letter in indexes) {
            indexes[letter]++;
        } else {
            indexes[letter] = 1;
        }
    }
    
    for (letters in indexes) {
        if (indexes[letters] === 1) {
            return s.indexOf(letters);
        }
    }
    
    return -1;
};