/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {

    let ans = new Promise((resolve, reject) =>{
        var arr = [], j= functions.length;
        functions.forEach((fun, i)=>{
            let promi = fun();
            promi.then((val) => {
                arr[i] = val;
                if(--j === 0)
                    resolve(arr);
            }).catch(reject);   
        });
    });
    return ans;
    
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */