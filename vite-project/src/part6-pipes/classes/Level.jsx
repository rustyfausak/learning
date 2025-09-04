export default class Level {
    constructor(name) {
        this.name = name;
        this.allowedRotations = 0;
        this.allowedSwaps = 0;
        this.sourceIndexesLeft = [];
        this.sourceIndexesRight = [];
        this.destIndexesLeft = [];
        this.destIndexesRight = [];
    }
}
