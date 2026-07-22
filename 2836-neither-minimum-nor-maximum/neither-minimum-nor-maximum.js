/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
    let result = -1;

    if (nums.length <= 2) return result;

    let min = nums[0], max = nums[0];

    for (let i = 1; i < 3; i++) {
        if (nums[i] < min) {
            result = min;
            min = nums[i];
        } else if (nums[i] > max) {
            result = max;
            max = nums[i];
        } else {
            return nums[i];
        }
    }

    return result;
};