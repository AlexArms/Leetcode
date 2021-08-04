/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let validChars = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
    s = s.toLowerCase().split('');
    formattedString = s.reduce((string, char) => {
        if (validChars.indexOf(char) > -1) {
            return string+= char;
        } else {
            return string;
        }
    }, "");
    let firstChar = 0;
    let lastChar = formattedString.length - 1;
    while (firstChar <= lastChar) {
        if (formattedString[firstChar] !== formattedString[lastChar]) {
            return false;
        }
        firstChar++;
        lastChar--;
    }
    return true;
};