/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 1) {
        return s;
    }
    let result = '';
    for (let r = 0; r < numRows; r++) {
        let i = r;
        while (i < s.length) {
            if (r == 0 || r == numRows - 1) {
                result += s[i];
            }
            else {
                result += s[i];
                let x = i + (numRows - 1) * 2 - r * 2;
                if (x < s.length) {
                    result += s[x];
                }
            }
            i += (numRows - 1) * 2;
        }
    }
    return result;
};
