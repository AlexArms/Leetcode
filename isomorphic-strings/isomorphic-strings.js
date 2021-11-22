/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // create object for letter mappings
    // loop over string s (string to change)
    // if char exists in mappings, map to existing letter
    // else...
        // if desired result letter has been mapped, return false
        // else, add mapping to object, and mapped letter to Set
    const mapped = new Set();
    const mappings = {};
    let mappedWord = '';
    for (let i = 0; i < s.length; i += 1) {
        const char = s[i];
        if (char in mappings) {
            mappedWord += mappings[char];
        } else {
            if (mapped.has(t[i])) {
                return false;
            } else {
                mapped.add(t[i]);
                mappings[char] = t[i];
                mappedWord += mappings[char];
            }
        }
    }
    return mappedWord === t;
};