/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const len = matrix.length;
    const layers = Math.floor(len / 2);
    for (let layer = 0; layer < layers; layer++) {
        // console.log("layer:", layer);
        for (let offset = layer; offset < len - 1 - layer; offset++) {
            // console.log("offset:", offset);
            // console.log("  top", matrix[layer][offset]);
            // console.log("  right", matrix[offset][len - 1 - layer]);
            // console.log("  bottom", matrix[len - 1 - layer][len - 1 - offset]);
            // console.log("  left", matrix[len - 1 - offset][layer]);
            const tmp = matrix[layer][offset]; // tmp = top
            matrix[layer][offset] = matrix[len - 1 - offset][layer]; // top = left
            matrix[len - 1 - offset][layer] = matrix[len - 1 - layer][len - 1 - offset]; // left = bottom
            matrix[len - 1 - layer][len - 1 - offset] = matrix[offset][len - 1 - layer]; // bottom = right
            matrix[offset][len - 1 - layer] = tmp; // right = top
        }
    }
};
