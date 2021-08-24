/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  // loop through one list
  // collect indexes of each in object, with name of restaurant as key
  // loop through other list, summing indexes if common restaurant exists
  // if sum is same as smallest, add to return array
  // if sum is smaller, clear array and add new restaurant
  
  const indexSums = {};
  let favs = [];
  let smallestSumIndex;
  
  list1.forEach((restaurant, index, list) => {
    indexSums[restaurant] = index;
  });
  
  
  for (let i = 0; i < list2.length; i++) {
    if (list2[i] in indexSums) {
      const indexSum = indexSums[list2[i]] + i;
      if (smallestSumIndex === undefined) {
        smallestSumIndex = indexSum;
        favs.push(list2[i]);
      } else {
        if (indexSum < smallestSumIndex) {
          smallestSumIndex = indexSum;
          favs = [list2[i]];
        } else if (indexSum === smallestSumIndex) {
          favs.push(list2[i]);
        }
      }
    }
  }
  
  return favs;
};