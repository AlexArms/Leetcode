/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
//     let canReachEnd = false;
//     const jumpittyJump = (index) => {
//         if (nums[index] > nums.length - 1 - index) {
//             canReachEnd = true;
//         }
//         if (!canReachEnd) {
//             if (index === nums.length - 1) {
//             canReachEnd = true;
//             return;
//             }
//             let jumpDistance = nums[index];
//             while (jumpDistance > 0) {
//                 jumpittyJump(index + jumpDistance);
//                 jumpDistance--;
//             }
//         }
        
//     }
//     jumpittyJump(0);
//     return canReachEnd;
    let lastReachable = nums.length - 1;
    for (let i = lastReachable - 1; i >= 0; i--) {
        if (lastReachable - i <= nums[i]) {
            lastReachable = i;
        }
    }
    return lastReachable === 0;
};