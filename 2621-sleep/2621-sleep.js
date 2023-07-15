/**
 * @param {number} millis
 */
async function sleep(millis) {
    var p =   new Promise(resolve => setTimeout(() => resolve(2), millis));
    
   let a = await p.then((v) => v);
    return;
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */