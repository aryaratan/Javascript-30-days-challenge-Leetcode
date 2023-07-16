/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    var ans = [];
    for(let i=0;i<arr.length;){
        var temp = [];
        let j = 0;
        while(i < arr.length && j <size){
            temp.push(arr[i]);
            j++;
            i++;
        }
        // i = j;
        ans.push(temp);
    }
    return ans;
};