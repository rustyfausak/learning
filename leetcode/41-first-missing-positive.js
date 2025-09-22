/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        // console.log("n", n);
        if (n - 1 == i) {
            // correct position
            //console.log("correct");
        }
        else if (n <= 0 || n > nums.length) {
            // irrelevant
            // console.log("irrelevant");
            nums[i] = 0;
        }
        else {
            // swap
            // console.log("swap");
            if (nums[n - 1] == nums[i]) {
                nums[i] = 0;
                continue;
            }
            nums[i] = nums[n - 1];
            nums[n - 1] = n;
            // recheck
            i--;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            return i + 1;
        }
    }
    // console.log(nums);
    return nums.length + 1;
};
