import Board from "./Board";

export default class Run {
    constructor({
        deck = null,
        gold = 100,
        level = 1,
        rows = 5,
        cols = 10,
        randomizer = null,
    }) {
        this.deck = deck;
        this.gold = gold;
        this.level = level;
        this.randomizer = randomizer;
        this.board = new Board({
            deck: this.deck,
            rows: rows,
            cols: cols,
            randomizer: this.randomizer,
        });
        this.advanceLevel(1);
    }

    advanceLevel(targetLevel = null) {
        if (targetLevel !== null) {
            this.level = targetLevel;
        }
        else {
            this.level += 1;
        }
        this.board.shuffle();
    }
}
