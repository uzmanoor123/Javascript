/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
//     const max = Math.max(...nums)
//     const min = Math.min(...nums)
//    for(let i = 0; i<nums.length; i++){
//     if(nums[i]>min && nums[i]< max){
//        return nums[i]
//     }
//    } 
//    return -1

    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;
    
    for(let i=0; i<nums.length; ++i) {
        if(nums[i] > max) {
            max = nums[i];
        }

        if(nums[i] < min) {
            min = nums[i];
        }
    }

    for(let i=0; i<nums.length; ++i) {
        if(nums[i] > min && nums[i] < max) {
            return nums[i];
        }
    }
    return -1;
};