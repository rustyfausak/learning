class TrieNode {
    constructor() {
        this.children = new Map();
        this.count = 0;
    }
}

/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    let number = 0;
    const root = new TrieNode();
    for (let i = 0; i < words.length; i++) {
        let cur = root;
        const word = words[i];
        //console.log("word", word);
        for (let left = 0; left < word.length; left++) {
            let right = word.length - left - 1;
            let key = word.at(left) + word.at(right);
            //console.log(left, right, "key", key);
            if (cur.children.has(key)) {
                cur = cur.children.get(key);
            }
            else {
                const node = new TrieNode();
                cur.children.set(key, node);
                cur = node;
            }
            number += cur.count;
        }
        cur.count++;
    }
    return number;
};
