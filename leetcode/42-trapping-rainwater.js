/**
 * @param {number[]} heights
 * @param {number} acc
 * @return {number}
 */
var trap = function(heights, acc = 0) {
    let n = heights.length;
    let left = 0;
    let right = n - 1;
    let leftMax = 0;
    let rightMax = 0;
    let result = 0;
    while (left <= right) {
        if (heights[left] <= heights[right]) {
            if (heights[left] > leftMax) {
                leftMax = heights[left];
            }
            else {
                result += leftMax - heights[left];
            }
            left++;
        }
        else {
            if (heights[right] > rightMax) {
                rightMax = heights[right];
            }
            else {
                result += rightMax - heights[right];
            }
            right--;
        }
    }
    return result;
};
