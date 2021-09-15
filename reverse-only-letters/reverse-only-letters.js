/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    s = s.split('');
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        let leftChar = s[left].toUpperCase().charCodeAt();
        let rightChar = s[right].toUpperCase().charCodeAt();
        let leftIsLetter = (leftChar <= 90 && leftChar >= 65)
        let rightIsLetter = (rightChar <= 90 && rightChar >= 65)
        // 65-90 || 97-122 inclusive ranges
        if (leftIsLetter && rightIsLetter) {
            let temp = s[left];
            s[left] = s[right];
            s[right] = temp;
            left++;
            right--;
        } else if (leftIsLetter) {
            right--;
        } else if (rightIsLetter) {
            left++;
        } else {
            left++;
            right--;
        }
    }
    return s.join('');
};