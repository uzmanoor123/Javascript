/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
   let sum = 0;
   let str = x.toString()
   for(let i=0; i<str.length;i++){
    sum += Number(str[i])
   }
   if(x%sum ===0){
    return sum
   }
   return -1
};