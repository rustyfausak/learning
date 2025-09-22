/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const matrix = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(0));
    let island = 1;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == '0') {
                continue;
            }
            if (matrix[i][j]) {
                continue;
            }
            popIslands(grid, matrix, i, j, island);
            island++;
        }
    }
    return island - 1;
};

var popIslands = function(grid, matrix, i, j, island) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length) {
        return;
    }
    if (grid[i][j] == '0') {
        return;
    }
    if (matrix[i][j]) {
        return;
    }
    matrix[i][j] = island;
    popIslands(grid, matrix, i + 1, j, island);
    popIslands(grid, matrix, i, j + 1, island);
    popIslands(grid, matrix, i - 1, j, island);
    popIslands(grid, matrix, i, j - 1, island);
}
