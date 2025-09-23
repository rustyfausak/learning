/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let n = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        const c = s[i];
        if (c == ' ') {
            if (n) {
                break;
            }
        }
        else {
            n++;
        }
    }
    return n;
};
