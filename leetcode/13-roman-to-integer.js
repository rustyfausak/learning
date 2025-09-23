/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let n = 0;
    for (let i = 0; i < s.length; i++) {
        const cur = s[i];
        const next = i < s.length - 1 ? s[i + 1] : '';
        if (next) {
            if (cur == 'I') {
                if (next == 'V') {
                    n += 4;
                    i++;
                    continue;
                }
                else if (next == 'X') {
                    n += 9;
                    i++;
                    continue;
                }
            }
            else if (cur == 'X') {
                if (next == 'L') {
                    n += 40;
                    i++;
                    continue;
                }
                else if (next == 'C') {
                    n += 90;
                    i++;
                    continue;
                }
            }
            else if (cur == 'C') {
                if (next == 'D') {
                    n += 400;
                    i++;
                    continue;
                }
                else if (next == 'M') {
                    n += 900;
                    i++;
                    continue;
                }
            }
        }
        if (cur == 'I') {
            n += 1;
        }
        else if (cur == 'V') {
            n += 5;
        }
        else if (cur == 'X') {
            n += 10;
        }
        else if (cur == 'L') {
            n += 50;
        }
        else if (cur == 'C') {
            n += 100;
        }
        else if (cur == 'D') {
            n += 500;
        }
        else if (cur == 'M') {
            n += 1000;
        }
    }
    return n;
};
