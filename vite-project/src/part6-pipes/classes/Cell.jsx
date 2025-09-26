import CellPart from "./CellPart";
import { createToken } from './../funcs.jsx';

export default class Cell {
    constructor(tile) {
        this.id = createToken();
        this.tile = tile;
        this.rotation = 0;
        this.initialRotation = 0;
        this.hasWater = false;
        this.topLeft = new CellPart();
        this.topCenter = new CellPart(this.tile.top);
        this.topRight = new CellPart();
        this.middleLeft = new CellPart(this.tile.left);
        this.middleCenter = new CellPart(this.tile.top || this.tile.bottom || this.tile.left || this.tile.right, false);
        this.middleRight = new CellPart(this.tile.right);
        this.bottomLeft = new CellPart();
        this.bottomCenter = new CellPart(this.tile.bottom);
        this.bottomRight = new CellPart();
    }

    getParts() {
        return [
            this.topLeft,
            this.topCenter,
            this.topRight,
            this.middleLeft,
            this.middleCenter,
            this.middleRight,
            this.bottomLeft,
            this.bottomCenter,
            this.bottomRight,
        ];
    }

    empty() {
        this.hasWater = false;
        this.getParts().map((part) => (part.isConnected = false));
    }

    getNumConnections() {
        if (!this.hasWater) {
            return 0;
        }
        let num = 0;
        this.getParts().map((part) => {
            if (part.isPipe && part.isConnectable && part.isConnected) {
                num++;
            }
        });
        return num;
    }

    getNumOverflows() {
        if (!this.hasWater) {
            return 0;
        }
        let num = 0;
        this.getParts().map((part) => {
            if (part.isPipe && part.isConnectable && !part.isConnected) {
                num++;
            }
        });
        return num;
    }

    isRotated() {
        return this.getNumRotations() > 0;
    }

    getNumRotations() {
        if (this.rotation === this.initialRotation) {
            return 0;
        }
        if (this.isTwoAxisSymmetric()) {
            return 0;
        }
        if (this.isOneAxisSymmetric()) {
            return (this.rotation % 2) === (this.initialRotation % 2) ? 0 : 1;
        }
        return (this.rotation + 4 - this.initialRotation) % 4;
    }

    isOneAxisSymmetric() {
        return (
            // left/right
            this.topLeft.isPipe === this.topRight.isPipe &&
            this.middleLeft.isPipe === this.middleRight.isPipe &&
            this.bottomLeft.isPipe === this.bottomRight.isPipe &&
            // top/bottom
            this.bottomLeft.isPipe === this.topLeft.isPipe &&
            this.bottomCenter.isPipe === this.topCenter.isPipe &&
            this.bottomRight.isPipe === this.topRight.isPipe
        );
    }

    isTwoAxisSymmetric() {
        return (
            // left/right
            this.topLeft.isPipe === this.topRight.isPipe &&
            this.middleLeft.isPipe === this.middleRight.isPipe &&
            this.bottomLeft.isPipe === this.bottomRight.isPipe &&
            // top/bottom
            this.bottomLeft.isPipe === this.topLeft.isPipe &&
            this.bottomCenter.isPipe === this.topCenter.isPipe &&
            this.bottomRight.isPipe === this.topRight.isPipe &&
            // side/side
            this.topLeft.isPipe === this.bottomLeft.isPipe &&
            this.topCenter.isPipe === this.middleLeft.isPipe &&
            this.topRight.isPipe === this.topLeft.isPipe
        );
    }

    resetRotation() {
        this.rotate(this.initialRotation - this.rotation, true);
    }

    rotate(times, setInitial = false) {
        times = (4 + (times % 4)) % 4;
        for (let i = 0; i < times; i++) {
            this.rotateCW();
        }
        if (setInitial) {
            this.initialRotation = this.rotation;
        }
    }

    rotateCW() {
        [
            this.topLeft,
            this.topCenter,
            this.topRight,
            this.middleLeft,
            this.middleCenter,
            this.middleRight,
            this.bottomLeft,
            this.bottomCenter,
            this.bottomRight,
        ] = [
            this.bottomLeft,
            this.middleLeft,
            this.topLeft,
            this.bottomCenter,
            this.middleCenter,
            this.topCenter,
            this.bottomRight,
            this.middleRight,
            this.topRight,
        ];
        this.rotation = (this.rotation + 1) % 4;
    }
}
