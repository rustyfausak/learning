/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let r = map.get(target - nums[i]);
        if (r !== undefined) {
            return [i, r];
        }
        map.set(nums[i], i);
    }
    return [];
};
