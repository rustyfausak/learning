import Cell from './Cell.jsx';

export default class Board {
    constructor({deck, rows, cols, randomizer}) {
        this.deck = deck;
        this.rows = rows;
        this.cols = cols;
        this.randomizer = randomizer;
        this.cells = [];
        deck.forEach(tile => this.cells.push(new Cell(tile)));
    }

    shuffle() {
        for (let i = this.cells.length - 1; i > 0; i--) {
            const j = Math.floor(this.randomizer.next() * (i + 1));
            [this.cells[i], this.cells[j]] = [this.cells[j], this.cells[i]];
        }
        for (let i = 0; i < this.cells.length; i++) {
            this.cells[i].rotation = Math.floor(this.randomizer.next() * 4);
        }
    }
}
