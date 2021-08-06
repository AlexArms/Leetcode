/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (!s) return 0;
    let words = s.split(' ');
    words = words.filter(word => word.length > 0);
    return words[words.length - 1].length;
};