/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const list = new DoublyLinkedList();
    const chars = new Map();
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (chars.has(char)) {
            let node = chars.get(char);
            if (list.count() > max) {
                max = list.count();
            }
            while (node.hasPrev()) {
                const prev = node.getPrev();
                list.remove(node);
                chars.delete(node.getValue())
                node = prev;
            }
            list.remove(node);
            chars.delete(node.getValue());
        }
        const node = list.insertLast(char);
        chars.set(char, node);
    }
    return Math.max(list.count(), max);
};
