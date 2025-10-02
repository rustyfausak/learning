function incMap(map, key) {
    if (map.has(key)) {
        map.set(key, map.get(key) + 1);
    }
    else {
        map.set(key, 1);
    }
}

function decMap(map, key) {
    if (map.has(key)) {
        map.set(key, map.get(key) - 1);
    }
    if (map.get(key) <= 0) {
        map.delete(key);
    }
}

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = new Map();
    for (let i = 0; i < magazine.length; i++) {
        incMap(map, magazine[i]);
    }

    for (let i = 0; i < ransomNote.length; i++) {
        if (!map.has(ransomNote[i])) {
            return false;
        }
        decMap(map, ransomNote[i]);
    }

    return true;
};
