import CellPart from "./CellPart";
import { createToken } from './../funcs.jsx';

export default class Cell {
    constructor(tile) {
        this.id = createToken();
        this.tile = tile;
        this.rotation = 0;
        this.hasWater = false;
        this.topLeft = new CellPart();
        this.topCenter = new CellPart(this.tile.top);
        this.topRight = new CellPart();
        this.middleLeft = new CellPart(this.tile.left);
        this.middleCenter = new CellPart(this.tile.top || this.tile.bottom || this.tile.left || this.tile.right);
        this.middleRight = new CellPart(this.tile.right);
        this.bottomLeft = new CellPart();
        this.bottomCenter = new CellPart(this.tile.bottom);
        this.bottomRight = new CellPart();
    }

    rotate(times) {
        times = (4 + (times % 4)) % 4;
        for (let i = 0; i < times; i++) {
            this.rotateCW();
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
