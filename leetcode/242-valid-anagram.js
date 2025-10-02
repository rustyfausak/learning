function incMap(map, key) {
    if (map.has(key)) {
        map.set(key, map.get(key) + 1);
    }
    else {
        map.set(key, 1);
    }
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //return s.split('').sort().join('') == t.split('').sort().join('');

    if (s.length != t.length) {
        return false;
    }

    let map1 = new Map();
    let map2 = new Map();

    for (let i = 0; i < s.length; i++) {
        incMap(map1, s[i]);
        incMap(map2, t[i]);
    }

    // console.log(map1);
    // console.log(map2);

    for (let i = 0; i < s.length; i++) {
        if (!map2.has(s[i])) {
            return false;
        }
        if (map1.get(s[i]) != map2.get(s[i])) {
            return false;
        }
    }
    return true;
};
