/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let visited = new Set();
    // console.log("n=", n);
    while (true) {
        const digits = n.toString().split('');
        n = 0;
        for (let i = 0; i < digits.length; i++) {
            n += digits[i] * digits[i];
        }
        if (n == 1) {
            break;
        }
        // console.log(n);
        if (visited.has(n)) {
            return false;
        }
        visited.add(n);
    }
    return true;
};
