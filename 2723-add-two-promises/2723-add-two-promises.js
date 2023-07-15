/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    let a = await promise1.then((v) => v);
    let b = await promise2.then((v) => v);
    
    return new Promise(resolve => setTimeout(() => resolve(a+b), 20));
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */