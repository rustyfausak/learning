export default class Die {
    value = null;
    isLocked = false;
    sides = null;

    constructor(sides = 6) {
        //this.reroll();
        this.sides = sides;
    }

    reroll() {
        this.value = Math.ceil(Math.random() * this.sides);
    }
}
