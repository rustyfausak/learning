import Board from "./Board";

export default class Run {
    constructor({
        deck = null,
        gold = 100,
        level = 1,
        randomizer = null,
    }) {
        this.deck = deck;
        this.gold = gold;
        this.level = level;
        this.randomizer = randomizer;
        this.board = new Board({
            deck: this.deck,
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
        this.board.sourceIndexesLeft = [2];
        this.board.sourceIndexesRight = [];
        this.board.destIndexesLeft = [];
        this.board.destIndexesRight = [2];
    }

    rotateCell(index, ccw = false) {
        this.board.rotateCell(index, ccw);
    }

    swapCells(fromId, toId) {
        let match = fromId.match(/^draggable-(\d+)$/);
        if (!match) {
            return;
        }
        let fromIndex = parseInt(match[1]);
        match = toId.match(/^droppable-(\d+)$/);
        if (!match) {
            return;
        }
        let toIndex = parseInt(match[1]);
        this.board.swapCells(fromIndex, toIndex);
    }

    pump() {
        this.board.pump();
    }
}
