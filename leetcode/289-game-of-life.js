

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const rows = board.length;
    const cols = board[0].length;

    function alive(r, c) {
        if (r < 0 || c < 0 || r >= rows || c >= cols) {
            return 0;
        }
        if (board[r][c] == 1 || board[r][c] == 7) {
            return 1;
        }
        return 0;
    }


    /**
     * Since we are modifying the board in-place, we need to encode
     * both the current and next value. The following table describes
     * the encoding:

     * current   | 0 1
     * ----------+----
     * next    0 | 0 7
     *         1 | 8 1
     */

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const cell = board[r][c];
            const n = 0
                + alive(r - 1, c - 1)
                + alive(r - 1, c)
                + alive(r - 1, c + 1)
                + alive(r, c - 1)
                + alive(r, c + 1)
                + alive(r + 1, c - 1)
                + alive(r + 1, c)
                + alive(r + 1, c + 1)
                ;
            let next = cell;
            if (cell == 0) {
                // Currently dead
                if (n == 3) {
                    // Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
                    next = 8;
                }
                else {
                    // Dead cell with non-three live neighbors remains dead
                    next = 0;
                }
            }
            else {
                // Currently alive
                if (n < 2) {
                    // Any live cell with fewer than two live neighbors dies as if caused by under-population.
                    next = 7;
                }
                else if (n > 3) {
                    // Any live cell with more than three live neighbors dies, as if by over-population.
                    next = 7;
                }
                else {
                    // Any live cell with two or three live neighbors lives on to the next generation.
                    next = 1;
                }
            }
            board[r][c] = next;
        }
    }

    // Convert the encoding to the next value
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] == 7) {
                board[r][c] = 0;
            }
            if (board[r][c] == 8) {
                board[r][c] = 1;
            }
        }
    }
};
