/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} coordinates
 * @return {number[]}
 */
var countBlackBlocks = function(m, n, coordinates) {
    const results = [(m - 1) * (n - 1), 0, 0, 0, 0];
    const map = new Map();

    function incMap(x, y) {
        if (x < 0 || y < 0) return;
        if (x == m - 1) return;
        if (y == n - 1) return;
        let key = x + ',' + y;
        if (map.has(key)) {
            map.set(key, map.get(key) + 1);
        }
        else {
            map.set(key, 1);
        }
    }

    for (let i = 0; i < coordinates.length; i++) {
        const x = coordinates[i][0];
        const y = coordinates[i][1];
        incMap(x, y);
        incMap(x - 1, y);
        incMap(x, y - 1);
        incMap(x - 1, y - 1);
    }

    map.forEach((value, key) => {
        results[0]--;
        results[value]++;
    });

    //console.log(map);

    return results;
};
