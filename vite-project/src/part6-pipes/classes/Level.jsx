export default class Level {
    constructor(name) {
        this.name = name;
        this.requiredScore = 0;
        this.sourceIndexesLeft = [];
        this.sourceIndexesRight = [];
        this.destIndexesLeft = [];
        this.destIndexesRight = [];
    }
}
