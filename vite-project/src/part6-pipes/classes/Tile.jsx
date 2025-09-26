export default class Tile {
    constructor({
        name = 'Blank',
        top = false,
        bottom = false,
        left = false,
        right = false,
    }) {
        this.name = name;
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
        this.points = 10;
    }
}
