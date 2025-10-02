/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], 0);
    }
    // console.log(map);

    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!map.get(nums[i])) {
            // console.log("i=", i, "nums[i]=", nums[i]);
            let n = nums[i] + 1;
            let len = 1;
            let setLen = 1;
            while (map.has(n)) {
                // console.log("check ", n);
                if (map.get(n)) {
                    len += map.get(n);
                    break;
                }
                setLen++;
                len++;
                n++;
            }
            for (let j = setLen - 1; j >= 0; j--) {
                // console.log("set", nums[i] + j, len - j);
                map.set(nums[i] + j, len - j);
            }
            max = Math.max(max, len);
        }
    }
    // console.log(map);

    return max;
};
