/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const letters = {};
    
    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        if (char in letters) letters[char]++;
        else letters[char] = 1;
    }
    
    for (let j = 0; j < s.length; j++) {
        const char = s[j];
        letters[char]--;
        if (letters[char] === 0) {
            delete letters[char];
        }
    }
    
    let key = Object.keys(letters)[0];
    return key;
};