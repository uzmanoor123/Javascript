/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let total = 0;
    let monday = 1;
    let today = 1;
    for (let i = 1; i<=n; i++){
        total +=today
        if(i%7===0){
            monday ++
            today = monday
        }else{
            today++
        }
    }
    return total
};