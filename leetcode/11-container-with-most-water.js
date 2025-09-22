/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let max = 0;
    let right = height.length - 1;
    while (left < right) {
        const cur = Math.min(height[left], height[right]) * (right - left);
        if (cur > max) {
            max = cur;
        }
        if (height[left] < height[right]) {
            left++;
        }
        else {
            right--;
        }
    }
    return max;
};
