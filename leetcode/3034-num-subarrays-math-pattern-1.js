/**
 * @param {number[]} nums
 * @param {number[]} pattern
 * @return {number}
 */
var countMatchingSubarrays = function(nums, pattern) {
    let count = 0;
    let seq = [...Array(nums.length)].map(() => 0);
    for (let i = 0; i < nums.length - 1; i++) {
        let cur = nums[i];
        let next = nums[i + 1];
        for (let k = 0; k < pattern.length; k++) {
            const p = pattern[k];
            if (p == 1) {
                if (cur < next) {
                    seq[i - k]++;
                }
            }
            else if (p == 0) {
                if (cur == next) {
                    seq[i - k]++;
                }
            }
            else if (p == -1) {
                if (cur > next) {
                    seq[i - k]++;
                }
            }
            if (seq[i - k] == pattern.length) {
                count++;
            }
        }
    }
    //console.log(seq);
    return count;
};
