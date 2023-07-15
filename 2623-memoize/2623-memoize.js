/**
 * @param {Function} fn
 */
function memoize(fn) {
    var arr = {};
    return function(...args) {
        if(args.length == 1){
            if(arr[args[0]]){
                return arr[args[0]];
            }
            else{
                let ans = fn(...args);
                arr[args[0]] = ans;
                return ans;
            }
        }
        else{
            var str = args[0] + "," + args[1];
            // console.log(arr);
            // console.log(str, arr.str);
            if(arr[str] !== undefined){
                // console.log("already");
                return arr[str];
            }
            else{
                let ans = fn(...args);
                
                arr[str] = ans;
                return ans;
            }
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */