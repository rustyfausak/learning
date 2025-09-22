/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let total = 0;
    let b = 0;
    for (let c = b + 1; c < prices.length; c++) {
        if (b == c) {
            continue;
        }
        const buy = prices[b];
        const cur = prices[c];
        const next = prices[c + 1];
        const profit = cur - buy;
        // console.log("buy=", buy, "cur=", cur, "next=", next, "profit=", profit);
        if (profit < 0) {
            b = c;
            continue;
        }
        if (next && cur <= next) {
            continue;
        }
        else {
            // sell
            total += profit;
            b = c + 1;
        }
    }
    return total;
};
