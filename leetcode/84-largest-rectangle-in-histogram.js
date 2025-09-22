/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const lesserOnLeft = [];
    const lesserOnRight = [];
    lesserOnRight[heights.length - 1] = heights.length;
    lesserOnLeft[0] = -1;

    // compute lesserOnLeft
    for (let i = 1; i < heights.length; i++) {
        let l = i - 1;
        while (heights[l] >= heights[i]) {
            // use already computed value
            l = lesserOnLeft[l];
        }
        lesserOnLeft[i] = l;
    }

    // compute lesserOnRight
    for (let i = heights.length - 2; i >= 0; i--) {
        let r = i + 1;
        while (heights[r] >= heights[i]) {
            r = lesserOnRight[r];
        }
        lesserOnRight[i] = r;
    }

    // console.log(lesserOnLeft);
    // console.log(lesserOnRight);

    let maxArea = 0;
    for (let i = 0; i < heights.length; i++) {
        maxArea = Math.max(maxArea, heights[i] * (lesserOnRight[i] - lesserOnLeft[i] - 1));
    }
    return maxArea;
};
