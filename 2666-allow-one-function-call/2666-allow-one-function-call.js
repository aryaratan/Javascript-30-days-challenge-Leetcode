/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    var v  =0;
    return function(...args){
        if(v === 0){
            v++;
            return fn(...args);
        }
        return;
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
