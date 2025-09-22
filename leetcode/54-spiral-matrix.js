/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const spiral = [];
    let p = [-1, 0];
    let v = [1, 0];
    let last = false;
    while (true) {
        // apply vector
        p[0] += v[0];
        p[1] += v[1];

        //console.log("at (" + p.join(',') + ")");

        if (
            // out of bounds
            p[0] < 0
            || p[1] < 0
            || p[1] >= matrix.length
            || p[0] >= matrix[p[1]].length
            // already visited
            || matrix[p[1]][p[0]] == '#'
        ) {
            if (!last) {
                //console.log("two bad nodes in a row, break");
                break;
            }
            last = false;
            // revert vector
            p[0] -= v[0];
            p[1] -= v[1];
            // rotate direction vector
            if (v[0] == 1 && v[1] == 0) {
                v = [0, 1];
            }
            else if (v[0] == 0 && v[1] == 1) {
                v = [-1, 0];
            }
            else if (v[0] == -1 && v[1] == 0) {
                v = [0, -1];
            }
            else if (v[0] == 0 && v[1] == -1) {
                v = [1, 0];
            }
            else {
                //console.log("Invalid direction vector");
            }
            continue;
        }

        //console.log("push", matrix[p[1]][p[0]]);
        spiral.push(matrix[p[1]][p[0]]);
        matrix[p[1]][p[0]] = '#';
        last = true;
    }
    return spiral;
};
