/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = [];
    let word = '';
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c == ' ') {
            if (word.length) {
                words.unshift(word);
                word = '';
            }
        }
        else {
            word += c;
        }
    }
    if (word.length) {
        words.unshift(word);
    }
    return words.join(' ');
};
