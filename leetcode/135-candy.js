/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const candies = new Array(ratings.length).fill(0);

    function getCandies(i, left, cur, right) {
        if (left === undefined && right === undefined) {
            // | c |
            return 1;
        }
        else if (left === undefined) {
            if (cur <= right) {
                // | c r |
                // | 3 3 |
                // | 3 5 |
                return 1;
            }
            else if (candies[i + 1]) {
                // | c r |
                // | 5 3 |
                return candies[i + 1] + 1;
            }
        }
        else if (right === undefined) {
            if (cur <= left) {
                // | l c |
                // | 3 3 |
                // | 5 3 |
                return 1;
            }
            else if (candies[i - 1]) {
                // | l c |
                // | 3 5 |
                return candies[i - 1] + 1;
            }
        }
        else {
            if (cur > left) {
                if (cur > right) {
                    // | l c r |
                    // | 3 5 3 |
                    if (candies[i - 1] && candies[i + 1]) {
                        return Math.max(candies[i - 1], candies[i + 1]) + 1;
                    }
                }
                else {
                    // | l c r |
                    // | 3 5 5 |
                    // | 3 5 7 |
                    if (candies[i - 1]) {
                        return candies[i - 1] + 1;
                    }
                }
            }
            else {
                // cur <= left
                if (cur > right) {
                    // | l c r |
                    // | 5 5 3 |
                    // | 5 4 3 |
                    if (candies[i + 1]) {
                        return candies[i + 1] + 1;
                    }
                }
                else {
                    // cur <= right
                    // | l c r |
                    // | 5 5 5 |
                    // | 5 4 5 |
                    return 1;
                }
            }
        }
    }

    for (let i = 0; i < ratings.length; i++) {
        candies[i] = getCandies(i, ratings[i - 1], ratings[i], ratings[i + 1]);
    }

    for (let i = ratings.length - 1; i >= 0; i--) {
        candies[i] = getCandies(i, ratings[i - 1], ratings[i], ratings[i + 1]);
    }

    return candies.reduce((x, acc) => acc + x);
};
