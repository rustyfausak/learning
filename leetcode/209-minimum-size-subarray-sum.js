/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let l = 0;
    let r = 1;
    let sum = nums[0];
    let min = 0;
    while (r <= nums.length) {
        //console.log(l, r - 1, sum, min);
        if (sum >= target) {
            if (!min || r - l < min) {
                min = r - l;
            }
            sum -= nums[l];
            l++;
        }
        else {
            if (r >= nums.length) {
                break;
            }
            sum += nums[r];
            r++;
        }
    }
    if (sum >= target) {
        if (!min || r - l < min) {
            min = r - l;
        }
    }
    return min;
};
