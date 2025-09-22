/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length;
    const first = nums[0];
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let center = nums[mid];
        //console.log("mid=", mid, "center=", center, "left=", left, "right=", right);
        // there are two segments, one from 0 to P and another from P + 1 to N
        // there can be just one segment if the array is normally sorted, like 012345
        // two segments:
        //  345012 has "345" and "012"
        //  123450 has "12345" and "0"
        if ((center < first) == (target < first)) {
            // target and center are in the same segment
            // nums 234501 target 4 center 5
            // nums 345012 target 1 center 0
            // nums 012345 target 2 center 3
            if (center < target) {
                //console.log('a');
                // shift window right
                left = mid + 1;
            }
            else if (center > target) {
                //console.log('b');
                // shift window left
                right = mid;
            }
            else {
                //console.log('c');
                return mid;
            }
        }
        else {
            // target and center are on different segments
            // nums 234501 target 0 center 5
            // nums 345012 target 4 center 0
            if (target < first) {
                //console.log('d');
                // shift window right
                left = mid + 1;
            }
            else {
                //console.log('e');
                // shift window left
                right = mid;
            }
        }
    }
    return -1;
};
