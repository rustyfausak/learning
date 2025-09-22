/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (nums.length <= 1) {
        return;
    }
    k = k % nums.length;
    const buffer = [];
    for (let i = 0; i < nums.length; i++) {
        buffer.push(nums[i]);
        if (buffer.length > k) {
            const val = buffer.shift();
            nums[i] = val;
        }
    }
    let i = 0;
    while (buffer.length) {
        nums[i++] = buffer.shift();
    }
};
