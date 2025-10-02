/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    let firstRowZero = false;
    let firstColZero = false;

    for (let c = 0; c < cols; c++) {
        if (matrix[0][c] == 0) {
            firstRowZero = true;
            break;
        }
    }

    for (let r = 0; r < rows; r++) {
        if (matrix[r][0] == 0) {
            firstColZero = true;
            break;
        }
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (matrix[r][c] == 0) {
                matrix[0][c] = 0;
                matrix[r][0] = 0;
            }
        }
    }

    for (let r = 1; r < rows; r++) {
        for (let c = 1; c < cols; c++) {
            if (matrix[0][c] == 0 || matrix[r][0] == 0) {
                matrix[r][c] = 0;
            }
        }
    }

    if (firstRowZero) {
        for (let c = 0; c < cols; c++) {
            matrix[0][c] = 0;
        }
    }

    if (firstColZero) {
        for (let r = 0; r < rows; r++) {
            matrix[r][0] = 0;
        }
    }
};
