/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const list = new LinkedList();
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === '(' || c === '[' || c === '{') {
            list.insertFirst(c);
        }
        else {
            const node = list.removeFirst();
            if (!node) {
                return false;
            }
            const prevChar = node.getValue();
            if (c === ')' && prevChar !== '(') {
                return false;
            }
            if (c === ']' && prevChar !== '[') {
                return false;
            }
            if (c === '}' && prevChar !== '{') {
                return false;
            }
        }
    }
    return !list.count();
};
