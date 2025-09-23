/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let ti = 0;
    for (let si = 0; si < s.length; si++) {
        let found = false;
        while (ti < t.length) {
            const tc = t[ti];
            ti++;
            if (tc == s[si]) {
                found = true;
                break;
            }
        }
        if (!found) {
            return false;
        }
    }
    return true;
};
