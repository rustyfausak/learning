/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const map1 = new Map();
    const map2 = new Map();
    const len = s.length;

    for (let i = 0; i < len; i++) {
        if (map1.has(s[i])) {
            map1.set(s[i], [...map1.get(s[i]), i]);
        }
        else {
            map1.set(s[i], [i]);
        }
        if (map2.has(t[i])) {
            map2.set(t[i], [...map2.get(t[i]), i]);
        }
        else {
            map2.set(t[i], [i]);
        }
    }

    if (map1.size != map2.size) {
        return false;
    }

    map1.forEach((value1, key1) => {
        map2.forEach((value2, key2) => {
            if (_.isEqual(value1, value2)) {
                map2.delete(key2);
            }
        });
    });

    return !map2.size;
};
