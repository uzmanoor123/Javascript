/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let total= 0;
    let week = 0;
    while(n>0){
        let start = week+1
        for(let day= 0; day<7&& n>0;day++){
            total += start+day
            n--
        }
        week++
    }
    return total
};