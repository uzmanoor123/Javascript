/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    let result= []
    for(let i = 0; i<words.length; i++){
        let arr = words[i].split(separator)
            for(j=0; j<arr.length;j++){
                if(arr[j]!==""){
                    result.push(arr[j])
                }
            }
     }
    return result
};