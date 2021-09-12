/**
 * @param {number[]} candyType
 * @return {number}
 */
const distributeCandies = (candies) => {
  // return maximum differing candy types
  // max count of candy returned can not exceed candies.length / 2
  const candyTypes = new Set();
  for (let i = 0; i < candies.length; i++) {
    const candy = candies[i];
    candyTypes.add(candy);
    if (candyTypes.size > candies.length / 2) return candies.length / 2;
  }
  return candyTypes.size;
};