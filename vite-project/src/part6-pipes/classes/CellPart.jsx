export default class CellPart {
    constructor(isPipe = false, isConnectable = true) {
        this.isPipe = isPipe;
        this.isConnected = false;
        this.isConnectable = isConnectable;
    }
}
