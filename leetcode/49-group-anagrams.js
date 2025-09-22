/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    for (let i = 0; i < strs.length; i++) {
        const alpha = Array.from(strs[i]).sort().join();
        if (map.has(alpha)) {
            map.set(alpha, [...map.get(alpha), i]);
        }
        else {
            map.set(alpha, [i]);
        }
    }
    const result = [];
    map.forEach((value, key, map) => {
        const tmp = [];
        for (let i = 0; i < value.length; i++) {
            tmp.push(strs[value[i]]);
        }
        result.push(tmp);
    })
    return result;
};
