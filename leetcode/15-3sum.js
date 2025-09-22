/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    //console.log(nums);
    const results = [];
    const uresults = new Set();
    for (let i = 0; i < nums.length; i++) {
        const x = nums[i];
        if (x > 0) {
            break;
        }
        if (i && x === nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        //console.log("test", x);
        while (left < right) {
            const y = nums[left];
            if (x + y > 0) {
                break;
            }
            const z = nums[right];
            const s = x + y + z;
            if (s === 0) {
                //console.log("\t", y, z, s);
                const key = [x, y, z].join(',');
                if (!uresults.has(key)) {
                    uresults.add(key);
                    results.push([x, y, z]);
                }
                left++;
                right--;
            }
            else if (s < 0) {
                left++;
            }
            else {
                right--;
            }
        }
    }
    return results;
};
