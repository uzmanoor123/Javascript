/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let diff = nums[1]-nums[0]
    for(let i= 1; i<nums.length-1; i++){
        let current = nums[i+1]-nums[i]
        if(diff*current<0){
        return false
        }
        if(diff===0){
        diff= current
        }
    }
    return true
};