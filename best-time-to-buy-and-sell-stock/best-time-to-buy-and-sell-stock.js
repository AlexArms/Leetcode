/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     let biggestMargin = 0;
//     for (let i = 0; i < prices.length; i++) {
//         let startingPrice = prices[i];
//         for (let o = i + 1; o < prices.length; o++) {
//             if (prices[o] - startingPrice > biggestMargin) {
//                 biggestMargin = prices[o] - startingPrice;
//             }
//         }
//     }
//     return biggestMargin;
// };

var maxProfit = function(prices) {
    let maxProfitSoFar = 0;
    let minNumberSoFar = prices[0];
    for(let i = 1; i < prices.length; i++) {
        if (prices[i] < minNumberSoFar) minNumberSoFar = prices[i];
        if (prices[i] - minNumberSoFar > maxProfitSoFar) maxProfitSoFar = prices[i] - minNumberSoFar;
    }    
    
    return maxProfitSoFar;
};