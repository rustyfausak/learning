/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperationsToWriteY = function(grid) {
    const size = grid.length;
    const half = Math.floor(size / 2);
    const yMap = new Map();
    const oMap = new Map();

    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            const cell = grid[r][c];

            // is this cell part of the Y
            let y = false;
            if (r <= half) {
                if (r == c || r == (size - c - 1)) {
                    y = true;
                }
            }
            else {
                if (c == half) {
                    y = true;
                }
            }

            //console.log(r, c, cell, y);

            let map = oMap;
            if (y) {
                map = yMap;
            }
            if (map.has(cell)) {
                map.set(cell, map.get(cell) + 1);
            }
            else {
                map.set(cell, 1);
            }
        }
    }

    let minOps = -1;
    for (let ySel = 0; ySel <= 2; ySel++) {
        for (let oSel = 0; oSel <= 2; oSel++) {
            let tmpOps = 0;
            if (ySel == oSel) {
                continue;
            }
            yMap.forEach((num, cell, _) => {
                if (cell == ySel) {
                    return;
                }
                tmpOps += num;
            });
            oMap.forEach((num, cell, _) => {
                if (cell == oSel) {
                    return;
                }
                tmpOps += num;
            });
            if (minOps == -1 || tmpOps < minOps) {
                minOps = tmpOps;
            }
        }
    }

    // console.log(minOps);

    // console.log(yMap);
    // console.log(oMap);

    return minOps;
};
