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
        this.advanceLevel(new LevelOne());
    }

    canResetLevel() {
        return this.actions.length > 0;
    }

    canUndoAction() {
        return this.actions.length > 0;
    }

    canPump() {
        return this.board.isAllDestinationsWatered();
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
            default:
                break;
        }
    }

    getRotationCredits() {
        return 10;
    }

    getRotationMult() {
        return 0.25;
    }

    getConnectedPoints() {
        return 100;
    }

    getScoreSummary() {
        return {
            points: {
                coverage: this.board.getCoveragePoints(),
                connections: this.board.isAllDestinationsWatered() ? this.getConnectedPoints() : 0,
                overflows: this.board.getOverflowPoints(),
            },
            mults: {
                base: 1,
                rotations: Math.max(0, (this.getRotationCredits() - this.getNumRotations()) * this.getRotationMult()),
            },
        };
    }

    getRequiredScore() {
        return this.level.requiredScore;
    }

    getNumRotations() {
        return this.board.getNumRotations();
    }

    advanceLevel(level) {
        this.level = level;
        this.board.shuffle();
        this.board.sourceIndexesLeft = level.sourceIndexesLeft;
        this.board.sourceIndexesRight = level.sourceIndexesRight;
        this.board.destIndexesLeft = level.destIndexesLeft;
        this.board.destIndexesRight = level.destIndexesRight;
        this.actions = [];
        this.pump();
    }

    canRotate() {
        return true;
    }

    rotateCell(index, ccw = false, save = true) {
        if (
            !this.canRotate()
            && !this.board.cells[index].isRotated()
        ) {
            return;
        }
        if (this.board.cells[index].isTwoAxisSymmetric()) {
            return;
        }
        if (save) {
            this.actions.push(new Action('rotate', { index, ccw }));
        }
        this.board.rotateCell(index, ccw);
        this.pump();
    }

    pump() {
        this.board.pump();
    }

    isCellRotated(index) {
        return this.board.cells[index].isRotated();
        /*
        // this would only check if the cell was ever rotated, even if it returned to it's initial rotation
        return this.actions.some(action => {
            return action.type === 'rotate' && action.payload.index === index;
        });
        */
    }
}
