/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const numCounts = {};
    const intersections = [];
    
    nums1.forEach(num => {
        if (num in numCounts) {
            numCounts[num]++;
        } else {
            numCounts[num] = 1;
        }
    });
    
    nums2.forEach(num => {
       if (num in numCounts) {
           if (numCounts[num] > 0) {
               intersections.push(num);
               numCounts[num]--;
           }
       } 
    });
    
    return intersections;
};