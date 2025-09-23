/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let tank = 0;
    let start = -1;
    let dist = 0;
    for (let j = 0; j < gas.length * 2; j++) {
        const i = j % gas.length;
        tank += gas[i];
        tank -= cost[i];
        if (tank < 0) {
            tank = 0;
            start = -1;
            dist = 0;
        }
        else {
            if (start == -1) {
                start = i;
                dist = 0;
            }
            dist++;
        }
        //console.log("start at", start, " station ", i, " add ", gas[i], " to tank. travel cost ", cost[i], " tank now has ", tank, "dist ", dist);
    }
    if (dist < gas.length) {
        return -1;
    }
    return start;
};
