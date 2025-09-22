/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 1;
    let major = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == major) {
            count++;
        }
        else {
            count--;
            if (count <= 0) {
                major = nums[i];
                count = 1;
            }
        }
    }
    return major;
};
