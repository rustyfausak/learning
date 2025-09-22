/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const results = [];
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (map.has(n)) {
            map.set(n, map.get(n) + 1);
        }
        else {
            map.set(n, 1);
        }
    }
    map.forEach((value, key) => {
        if (value > Math.floor(nums.length / 3)) {
            results.push(key);
        }
    });
    return results;
};
