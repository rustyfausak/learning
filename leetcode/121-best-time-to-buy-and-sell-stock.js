/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (min === undefined || prices[i] < min) {
            min = prices[i];
        }
        else if (prices[i] == min) {}
        else {
            const profit = prices[i] - min;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
};
