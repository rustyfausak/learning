class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.list = new DoublyLinkedList();
        this.data = new Map();
    }

    get(key) {
        if (this.data.has(key)) {
            const e = this.data.get(key);
            this.list.remove(e.node);
            this.list.insertFirst(e.node);
            return e.value;
        }
        return -1;
    }

    put(key, value) {
        if (this.data.has(key)) {
            const e = this.data.get(key);
            this.data.set(key, {
                node: e.node,
                value: value,
            });
            this.list.remove(e.node);
            this.list.insertFirst(e.node);
        }
        else {
            if (this.data.size >= this.capacity) {
                // evict the LRU
                const oldNode = this.list.removeLast();
                this.data.delete(oldNode.getValue());
            }
            this.data.set(key, {
                node: this.list.insertFirst(key),
                value: value,
            });
        }
    }
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
