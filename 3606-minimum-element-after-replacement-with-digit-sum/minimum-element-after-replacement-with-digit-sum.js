/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let min = 0
    for(num of nums){
        let sum = 0
        while(num>0){
            sum+=num%10
            num= Math.floor(num/10)
        }
        if(min==0||min>sum){
            min = sum
        }
    }
    return min
};