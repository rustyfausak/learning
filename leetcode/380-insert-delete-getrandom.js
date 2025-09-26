
var RandomizedSet = function() {
    this.values = [];
    this.map = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (!this.map.has(val)) {
        const index = this.values.push(val) - 1;
        this.map.set(val, index);
        return true;
    }
    return false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.map.has(val)) {
        // we want to remove the element at index
        let index = this.map.get(val);
        // get the value at the last element in the array
        const lastValue = this.values[this.values.length - 1];
        // copy the value to the index we want to remove
        this.values[index] = lastValue;
        // set the new location of the last value in the map
        this.map.set(lastValue, index);
        // then we pop the last element off the values array
        this.values.pop();
        // and remove it from the map
        this.map.delete(val);
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.values[Math.floor(Math.random() * this.values.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
