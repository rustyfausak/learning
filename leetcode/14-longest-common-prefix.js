/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let shortestStrIndex = 0;
    let shortestStrLen = strs[0].length;
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < shortestStrLen) {
            shortestStrIndex = i;
            shortestStrLen = strs[i].length;
        }
    }
    let commonPrefix = "";
    for (let j = 0; j < strs[shortestStrIndex].length; j++) {
        let valid = true;
        for (let i = 0; i < strs.length; i++) {
            if (i === shortestStrIndex) {
                continue;
            }
            if (strs[i][j] !== strs[shortestStrIndex][j]) {
                valid = false;
                break;
            }
        }
        if (!valid) {
            break;
        }
        commonPrefix += strs[shortestStrIndex][j];
    }
    return commonPrefix;
};
