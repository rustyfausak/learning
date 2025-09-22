/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var colorTheArray = function(n, queries) {
    const colors = new Array(n);
    const answer = new Array(queries.length);
    let adj = 0;
    for (let i = 0; i < queries.length; i++) {
        const x = queries[i][0];
        const color = queries[i][1];
        if (colors[x] == color) {
            answer[i] = adj;
            continue;
        }
        if (colors[x]) {
            if (x > 0 && colors[x] == colors[x - 1]) {
                adj--;
            }
            if (x < n - 1 && colors[x] == colors[x + 1]) {
                adj--;
            }
        }
        colors[x] = color;
        if (x > 0 && colors[x] == colors[x - 1]) {
            adj++;
        }
        if (x < n - 1 && colors[x] == colors[x + 1]) {
            adj++;
        }
        answer[i] = adj;
    }
    return answer;
};
