/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rowSets = Array(9).fill().map(() => new Set());
    const colSets = Array(9).fill().map(() => new Set());
    const boxSets = Array(9).fill().map(() => new Set());
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const cell = board[r][c];
            if (cell == ".") {
                continue;
            }
            const b = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            // console.log(r, c, b, cell);
            if (rowSets[r].has(cell)) {
                // console.log("R");
                return false;
            }
            if (colSets[c].has(cell)) {
                // console.log("C");
                return false;
            }
            if (boxSets[b].has(cell)) {
                // console.log("B");
                return false;
            }
            rowSets[r].add(cell);
            colSets[c].add(cell);
            boxSets[b].add(cell);
        }
    }
    return true;
};
