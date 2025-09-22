/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let r = nums.length - 1;
    for (let i = 0; i <= r; i++) {
        if (nums[i] == val) {
            nums[i--] = nums[r--];
        }
    }
    return r + 1;
};
