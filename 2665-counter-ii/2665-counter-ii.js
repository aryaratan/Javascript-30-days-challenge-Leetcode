/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let v = init, n = init;
    return {
        increment : () => {
            n++;
            return n;
        },
        decrement : () => {
            n--;
            return n;
        },
        reset : () => {
            n = v;
            return n;
        }
    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */