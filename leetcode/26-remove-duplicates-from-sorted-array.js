/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        const n = nums[j];
        if (i < 1 || n > nums[i - 1]) {
            nums[i++] = n;
        }
    }
    return i;
};
