/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let map1 = new Map();
    let map2 = new Map();
    let left = 0;
    let right = 0;
    for (let i = 0; i < pattern.length; i++) {
        for (right = left; right < s.length; right++) {
            if (s[right] == ' ') {
                break;
            }
        }
        const word = s.substring(left, right);
        left = right + 1;
        const letter = pattern[i];
        if (map1.has(letter)) {
            if (map1.get(letter) != word) {
                return false;
            }
        }
        else {
            map1.set(letter, word);
        }
        if (map2.has(word)) {
            if (map2.get(word) != letter) {
                return false;
            }
        }
        else {
            map2.set(word, letter);
        }
    }
    return right == s.length;
};
