/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums.length <= 1) {
        return 0;
    }
    let jumps = 0;
    for (let r = nums.length - 1; r > 0;) {
        //console.log(r);
        let minL = null;
        for (let l = r - 1; l >= 0; l--) {
            if (nums[l] >= r - l) {
                //console.log("minL set to ", l);
                minL = l;
            }
        }
        jumps++;
        r = minL;
    }
    return jumps;
};
