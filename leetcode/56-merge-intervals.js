/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        }
        if (a[0] > b[0]) {
            return 1;
        }
        if (a[1] < b[1]) {
            return -1;
        }
        if (a[1] > b[1]) {
            return 1;
        }
        return 0;
    });
    let results = [];
    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i];
        let found = false;
        for (let j = 0; j < results.length; j++) {
            const result = results[j];
            if (
                (interval[0] >= result[0] && interval[0] <= result[1])
                || (interval[1] >= result[0] && interval[1] <= result[1])
                || (interval[0] <= result[0] && interval[1] >= result[1])
            ) {
                results[j][0] = Math.min(interval[0], result[0]);
                results[j][1] = Math.max(interval[1], result[1]);
                found = true;
            }
        }
        if (!found) {
            results.push(intervals[i]);
        }
    }
    return _.uniqWith(results, (e1, e2) => {
        return e1[0] === e2[0] && e1[1] === e2[1];
    });
};
