/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    var newArr =[];
    arr.forEach((curr, i) => {
        newArr[i] = [fn(curr), i];
    });

    newArr.sort(function(a, b){return (a[0] < b[0]) ? -1 : 1;});
    
    var ans = [];

    newArr.forEach((curr, i) => {
        ans[i] = arr[curr[1]];
    });
    return ans;
};