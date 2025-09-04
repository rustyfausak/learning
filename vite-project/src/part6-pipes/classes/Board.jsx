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
        this.destIndexesLeft = [];
        this.sourceIndexesRight = [];
        this.destIndexesRight = [];
        this.wateredIndexesLeft = [];
        this.wateredIndexesRight = [];
        deck.forEach(tile => this.cells.push(new Cell(tile)));
        this.saveInitialOrder();
    }

    getNumRotations() {
        return this.cells.reduce((num, cell) => num + cell.isRotated(), 0);
    }

    saveInitialOrder() {
        this.cells.forEach(cell => {
            this.initialIdToIndex[cell.id] = this.cells.indexOf(cell);
        });
    }

    shuffle() {
        this.empty();
        for (let i = this.cells.length - 1; i > 0; i--) {
            const j = Math.floor(this.randomizer.next() * (i + 1));
            [this.cells[i], this.cells[j]] = [this.cells[j], this.cells[i]];
        }
        for (let i = 0; i < this.cells.length; i++) {
            this.cells[i].rotate(Math.floor(this.randomizer.next() * 4), true);
        }
        this.saveInitialOrder();
    }

    reset() {
        this.empty();
        let tmp = [];
        this.cells.forEach(cell => {
            cell.resetRotation();
            tmp[this.initialIdToIndex[cell.id]] = cell;
        });
        this.cells = tmp;
    }

    rotateCell(index, ccw) {
        this.empty();
        this.cells[index].rotate(ccw ? -1 : 1);
    }

    swapCells(fromIndex, toIndex) {
        this.empty();
        [this.cells[fromIndex], this.cells[toIndex]] = [this.cells[toIndex], this.cells[fromIndex]];
    }

    indexToXY(index) {
        const x = index % this.cols;
        const y = Math.floor(index / this.cols);
        return { x, y };
    }

    xyToIndex(x, y) {
        return y * this.cols + x;
    }

    empty() {
        this.cells.forEach(cell => cell.hasWater = false);
    }

    pump() {
        this.empty();
        console.log("~~~ Pumping ~~~");
        this.wateredIndexesLeft = [];
        this.wateredIndexesRight = [];
        this.sourceIndexesLeft.forEach(index => {
            this.pumpCell(0, index, 'middleLeft');
        });
        this.sourceIndexesRight.forEach(index => {
            this.pumpCell(this.cols, index, 'middleRight');
        });
        this.destIndexesLeft.forEach(index => {
            
        });
    }

    pumpCell(x, y, intoPart) {
        console.log("pumpCell", x, y, intoPart);
        if (x == -1) {
            this.wateredIndexesLeft.push(y);
        }
        if (x > this.cols - 1) {
            this.wateredIndexesRight.push(y);
        }
        if (y > this.rows - 1 || x > this.cols - 1 || x < 0 || y < 0) {
            return;
        }
        const index = this.xyToIndex(x, y);
        if (index < 0) {
            return;
        }
        if (index > this.cells.length - 1) {
            return;
        }
        if (this.cells[index].hasWater) {
            return;
        }
        if (!this.cells[index][intoPart].isPipe) {
            return;
        }
        this.cells[index].hasWater = true;
        if (this.cells[index].topCenter.isPipe && intoPart !== 'topCenter') {
            this.pumpCell(x, y - 1, 'bottomCenter');
        }
        if (this.cells[index].middleLeft.isPipe && intoPart !== 'middleLeft') {
            this.pumpCell(x - 1, y, 'middleRight');
        }
        if (this.cells[index].middleRight.isPipe && intoPart !== 'middleRight') {
            this.pumpCell(x + 1, y, 'middleLeft');
        }
        if (this.cells[index].bottomCenter.isPipe && intoPart !== 'bottomCenter') {
            this.pumpCell(x, y + 1, 'topCenter');
        }

    }
}
