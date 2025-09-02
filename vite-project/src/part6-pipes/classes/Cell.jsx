import CellPart from "./CellPart";
import { createToken } from './../funcs.jsx';

export default class Cell {
    constructor(tile) {
        this.id = createToken();
        this.tile = tile;
        this.rotation = 0;
        this.top_left = new CellPart();
        this.top_center = new CellPart(this.tile.top);
        this.top_right = new CellPart();
        this.middle_left = new CellPart(this.tile.left);
        this.middle_center = new CellPart(this.tile.top || this.tile.bottom || this.tile.left || this.tile.right);
        this.middle_right = new CellPart(this.tile.right);
        this.bottom_left = new CellPart();
        this.bottom_center = new CellPart(this.tile.bottom);
        this.bottom_right = new CellPart();
    }

    rotate(times) {
        times = (4 + (times % 4)) % 4;
        for (let i = 0; i < times; i++) {
            this.rotateCW();
        }
    }

    rotateCW() {
        [
            this.top_left,
            this.top_center,
            this.top_right,
            this.middle_left,
            this.middle_center,
            this.middle_right,
            this.bottom_left,
            this.bottom_center,
            this.bottom_right,
        ] = [
            this.bottom_left,
            this.middle_left,
            this.top_left,
            this.bottom_center,
            this.middle_center,
            this.top_center,
            this.bottom_right,
            this.middle_right,
            this.top_right,
        ];
        this.rotation = (this.rotation + 1) % 4;
    }
}
