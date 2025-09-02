import Cell from './Cell.jsx';

export default class Board {
    constructor({deck, randomizer}) {
        this.deck = deck;
        this.rows = 5;
        this.cols = 10;
        this.randomizer = randomizer;
        this.cells = [];
        this.sourceRowIndexes = [];
        this.destRowIndexes = [];
        deck.forEach(tile => this.cells.push(new Cell(tile)));
    }

    shuffle() {
        for (let i = this.cells.length - 1; i > 0; i--) {
            const j = Math.floor(this.randomizer.next() * (i + 1));
            [this.cells[i], this.cells[j]] = [this.cells[j], this.cells[i]];
        }
        for (let i = 0; i < this.cells.length; i++) {
            this.cells[i].rotate(Math.floor(this.randomizer.next() * 4));
        }
    }
}
