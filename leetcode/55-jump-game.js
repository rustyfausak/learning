/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const map = new Map();
    map.set(0, true);
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(i)) {
            continue;
        }
        const range = nums[i];
        if (i + range >= nums.length - 1) {
            return true;
        }
        for (let j = 1; j <= range; j++) {
            if (!map.has(i + j)) {
                map.set(i + j, true);
            }
        }
    }
    return false;
};
