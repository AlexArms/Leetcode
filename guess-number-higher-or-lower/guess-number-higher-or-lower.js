/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    // guess half
    // if 1, guess mid of right
    // if -1, guess mid of left
    // else return number
    let rangeStart = 1;
    let rangeEnd = n;
    let numToGuess = Math.floor(n / 2);
    while (rangeStart <= rangeEnd) {
        let guessResult = guess(numToGuess);
        if (guessResult === 0) return numToGuess;
        else if (guessResult === -1) {
            rangeEnd = numToGuess - 1;
            numToGuess = Math.floor((rangeStart + rangeEnd) / 2);
        } else {
            rangeStart = numToGuess + 1;
            numToGuess = Math.floor((rangeStart + rangeEnd) / 2);
        }
    }
};