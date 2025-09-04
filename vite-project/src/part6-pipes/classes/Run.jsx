import Board from "./Board";
import Action from "./Action";
import LevelOne from "./../levels/LevelOne";

export default class Run {
    constructor({
        deck = null,
        gold = 100,
        randomizer = null,
    }) {
        this.deck = deck;
        this.gold = gold;
        this.level = null;
        this.randomizer = randomizer;
        this.board = new Board({
            deck: this.deck,
            randomizer: this.randomizer,
        });
        this.actions = [];
        this.allowedRotations = 0;
        this.allowedSwaps = 0;
        this.advanceLevel(new LevelOne());
    }

    canResetLevel() {
        return this.actions.length > 0;
    }

    canUndoAction() {
        return this.actions.length > 0;
    }

    resetLevel() {
        this.board.reset();
        this.actions = [];
        this.pump();
    }

    undoAction() {
        if (!this.canUndoAction()) {
            return;
        }
        const action = this.actions.pop();
        switch (action.type) {
            case 'rotate':
                this.rotateCell(action.payload.index, !action.payload.ccw, false);
                break;
            case 'swap':
                this._swapCells(action.payload.fromIndex, action.payload.toIndex, false);
                break;
            default:
                break;
        }
    }

    getNumRotations() {
        return this.board.getNumRotations();
    }

    getNumSwaps() {
        return this.actions.reduce((count, action) => count + (action.type === 'swap' ? 1 : 0), 0);
    }

    advanceLevel(level) {
        this.level = level;
        this.board.shuffle();
        this.board.sourceIndexesLeft = level.sourceIndexesLeft;
        this.board.sourceIndexesRight = level.sourceIndexesRight;
        this.board.destIndexesLeft = level.destIndexesLeft;
        this.board.destIndexesRight = level.destIndexesRight;
        this.allowedRotations = level.allowedRotations;
        this.allowedSwaps = level.allowedSwaps;
        this.actions = [];
        this.pump();
    }

    canRotate() {
        return this.getNumRotations() < this.allowedRotations;
    }

    rotateCell(index, ccw = false, save = true) {
        if (
            !this.canRotate()
            && !this.board.cells[index].isRotated()
        ) {
            return;
        }
        if (save) {
            this.actions.push(new Action('rotate', { index, ccw }));
        }
        this.board.rotateCell(index, ccw);
        this.pump();
    }

    canSwap() {
        return this.getNumSwaps() < this.allowedSwaps;
    }

    swapCells(fromId, toId, save = true) {
        if (!this.canSwap()) {
            return;
        }
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
        this._swapCells(fromIndex, toIndex, save);
    }

    _swapCells(fromIndex, toIndex, save = true) {
        if (save) {
            this.actions.push(new Action('swap', { fromIndex, toIndex }));
        }
        this.board.swapCells(fromIndex, toIndex);
        this.pump();
    }

    pump() {
        this.board.pump();
    }

    isCellSwapped(index) {
        return this.board.initialIdToIndex[this.board.cells[index].id] !== index;
    }

    isCellRotated(index) {
        return this.actions.some(action => {
            return action.type === 'rotate' && action.payload.index === index;
        });
    }
}
