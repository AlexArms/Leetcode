/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // dynamic?
    // multiple number by itself
    // check is x (target) is between current and previous square
        // if so, return previous square
    if (x === 0) return 0;
    let root = 0;
    let prevSquare = 0;
    while (true) {
        root++;
        let square = root * root;
        if (x === square) return root;
        else if (x < square && x > prevSquare) {
            return root - 1;
        }
    }
};