/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let l = 0;
    let r = s.length - 1;
    while (true) {
        if (l >= r) {
            break;
        }
        let left = s[l].toLowerCase();
        if (!left.match(/[a-z0-9]+/)) {
            l++;
            continue;
        }
        let right = s[r].toLowerCase();
        if (!right.match(/[a-z0-9]+/)) {
            r--;
            continue;
        }
        if (left != right) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};
