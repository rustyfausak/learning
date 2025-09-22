/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length <= 1) {
        return s;
    }

    var expandFromCenter = function (left, right) {
        while (left >= 0 && right < s.length && s[left] == s[right]) {
            left -= 1;
            right += 1;
        }
        return s.substring(left + 1, right);
    };

    let maxSub = s[0];
    for (let i = 0; i < s.length; i++) {
        const odd = expandFromCenter(i, i);
        const even = expandFromCenter(i, i + 1);
        if (odd.length > maxSub.length) {
            maxSub = odd;
        }
        if (even.length > maxSub.length) {
            maxSub = even;
        }
    }
    return maxSub;
};
