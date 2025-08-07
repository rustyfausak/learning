export default class DieClass {
    value = 0;
    isLocked = false;
    
    constructor() {
        this.reroll();
    }

    reroll() {
        this.value = Math.floor(Math.random() * 6) + 1;
    }
}
