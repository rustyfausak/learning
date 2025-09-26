import Cell from './Cell.jsx';

export default class Board {
    constructor({deck, randomizer}) {
        this.deck = deck;
        this.rows = 5;
        this.cols = 10;
        this.randomizer = randomizer;
        this.cells = [];
        this.initialIdToIndex = [];
        this.sourceIndexesLeft = [];
        this.sourceIndexesRight = [];
        this.destIndexesLeft = [];
        this.destIndexesRight = [];
        this.wateredIndexesLeft = [];
        this.wateredIndexesRight = [];
        deck.forEach(tile => this.cells.push(new Cell(tile)));
        this.saveInitialOrder();
    }

    /**
     * Returns the number of cells that are rotated (not in their original orientation).
     * @returns {number}
     */
    getNumRotations() {
        return this.cells.reduce((num, cell) => num + cell.isRotated(), 0);
    }

    /**
     * Saves the initial order of the cells by mapping their IDs to their indexes.
     * This is used to reset the board to its original state.
     */
    saveInitialOrder() {
        this.cells.forEach(cell => {
            this.initialIdToIndex[cell.id] = this.cells.indexOf(cell);
        });
    }

    /**
     * Reorders and rotates the cells randomly.
     */
    shuffle() {
        for (let i = this.cells.length - 1; i > 0; i--) {
            const j = Math.floor(this.randomizer.next() * (i + 1));
            [this.cells[i], this.cells[j]] = [this.cells[j], this.cells[i]];
        }
        for (let i = 0; i < this.cells.length; i++) {
            this.cells[i].rotate(Math.floor(this.randomizer.next() * 4), true);
        }
        this.saveInitialOrder();
    }

    /**
     * Resets the board to its initial state (original order and orientation).
     */
    reset() {
        this.empty();
        let tmp = [];
        this.cells.forEach(cell => {
            cell.resetRotation();
            tmp[this.initialIdToIndex[cell.id]] = cell;
        });
        this.cells = tmp;
    }

    /**
     * Rotates a cell at the given index.
     * @param {number} index 
     * @param {boolean} ccw 
     */
    rotateCell(index, ccw = false) {
        this.cells[index].rotate(ccw ? -1 : 1);
    }

    /**
     * Swaps two cells in the board.
     * @param {number} fromIndex
     * @param {number} toIndex
     */
    swapCells(fromIndex, toIndex) {
        [this.cells[fromIndex], this.cells[toIndex]] = [this.cells[toIndex], this.cells[fromIndex]];
    }

    /**
     * Converts a 1D index to 2D coordinates (x, y).
     * @param {number} index 
     * @returns {{x: number, y: number}}
     */
    indexToXY(index) {
        const x = index % this.cols;
        const y = Math.floor(index / this.cols);
        return { x, y };
    }

    /**
     * Converts 2D coordinates (x, y) to a 1D index.
     * @param {number} x 
     * @param {number} y 
     * @returns {number}
     */
    xyToIndex(x, y) {
        return y * this.cols + x;
    }

    /**
     * Empties all cells of water.
     */
    empty() {
        this.cells.forEach(cell => cell.empty());
    }

    /**
     * Returns true if all destination indexes are watered, false otherwise.
     * @returns {boolean}
     */
    isAllDestinationsWatered() {
        for (let index of this.destIndexesLeft) {
            if (!this.wateredIndexesLeft.includes(index)) {
                return false;
            }
        }
        for (let index of this.destIndexesRight) {
            if (!this.wateredIndexesRight.includes(index)) {
                return false;
            }
        }
        return true;
    }

    /**
     * Returns the sum of points for all cells that have water.
     * @returns {number}
     */
    getCoveragePoints() {
        let points = 0;
        this.cells.forEach(cell => {
            if (cell.hasWater) {
                points += cell.tile.coveragePoints;
            }
        });
        return points;
    }

    /**
     * Returns the sum of points for missing connections. Usually negative.
     * @returns {number}
     */
    getOverflowPoints() {
        let points = 0;
        this.cells.forEach(cell => {
            points += cell.getNumOverflows() * cell.tile.overflowPoints;
        });
        return points;
    }

    /**
     * Pumps water from the source indexes through the pipes.
     */
    pump() {
        this.empty();
        this.wateredIndexesLeft = [];
        this.wateredIndexesRight = [];
        this.sourceIndexesLeft.forEach(index => {
            this.wateredIndexesLeft.push(index);
            this.pumpCell(0, index, 'middleLeft');
        });
        this.sourceIndexesRight.forEach(index => {
            this.wateredIndexesRight.push(index);
            this.pumpCell(this.cols, index, 'middleRight');
        });
    }

    /**
     * Pumps water into a cell from a given direction.
     * If the cell is a pipe, it continues pumping water through connected pipes.
     * If the cell is outside the board on the left or the right, it marks the corresponding left or right index as watered.
     * @param {number} x The x coordinate of the cell to pump. Left to right, starting at 0.
     * @param {number} y The y coordinate of the cell to pump. Top to bottom, starting at 0.
     * @param {string} intoPart The part of the cell to pump into. One of 'topCenter', 'middleLeft', 'middleRight', 'bottomCenter'.
     * @returns {boolean} True if the cell is connected, false otherwise.
     */
    pumpCell(x, y, intoPart) {
        //console.log("pumpCell", x, y, intoPart);
        let connection = false;
        if (x == -1) {
            // left side
            this.wateredIndexesLeft.push(y);
            if (
                this.destIndexesLeft.includes(y)
                || this.sourceIndexesLeft.includes(y)
            ) {
                connection = true;
            }
        }
        if (x > this.cols - 1) {
            // right side
            this.wateredIndexesRight.push(y);
            if (
                this.destIndexesRight.includes(y)
                || this.sourceIndexesRight.includes(y)
            ) {
                connection = true;
            }
        }
        if (y > this.rows - 1 || x > this.cols - 1 || x < 0 || y < 0) {
            // out-of-bounds
            return connection;
        }
        const index = this.xyToIndex(x, y);
        if (index < 0) {
            return false;
        }
        if (index > this.cells.length - 1) {
            return false;
        }
        const cell = this.cells[index];
        if (!cell[intoPart].isPipe) {
            return false;
        }
        cell[intoPart].isConnected = true;
        if (cell.hasWater) {
            return true;
        }
        cell.hasWater = true;
        if (cell.topCenter.isPipe && intoPart !== 'topCenter') {
            cell.topCenter.isConnected = this.pumpCell(x, y - 1, 'bottomCenter');
        }
        if (cell.middleLeft.isPipe && intoPart !== 'middleLeft') {
            cell.middleLeft.isConnected = this.pumpCell(x - 1, y, 'middleRight');
        }
        if (cell.middleRight.isPipe && intoPart !== 'middleRight') {
            cell.middleRight.isConnected = this.pumpCell(x + 1, y, 'middleLeft');
        }
        if (cell.bottomCenter.isPipe && intoPart !== 'bottomCenter') {
            cell.bottomCenter.isConnected = this.pumpCell(x, y + 1, 'topCenter');
        }
        //console.log(cell);
        return true;
    }
}
