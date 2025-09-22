/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function(boxGrid) {
    const m = boxGrid.length;
    const n = boxGrid[0].length;
    //console.log("m", m, "n", n);
    const rotated = [...Array(n)].map(() => Array(m).fill(0));
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            rotated[c][m - r - 1] = boxGrid[r][c];
        }
    }
    for (let c = 0; c < m; c++) {
        //console.log("column", c);
        let empties = [];
        let r = n - 1;
        while (r >= 0) {
            //console.log("r", r, rotated[r][c]);
            if (rotated[r][c] == '#') {
                // block
                const x = empties.shift();
                if (x) {
                    console.log("x", x);
                    rotated[x][c] = '#';
                    rotated[r][c] = '.';
                    empties.push(r);
                }
            }
            else if (rotated[r][c] == '.') {
                // empty
                empties.push(r);
            }
            else if (rotated[r][c] == '*') {
                // obstacle
                empties = [];
            }
            r--;
        }
    }
    //console.log(rotated);
    return rotated;
};
