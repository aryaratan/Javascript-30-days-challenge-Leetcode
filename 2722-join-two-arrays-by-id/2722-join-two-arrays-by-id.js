/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    var newArr = [];
    let i = 0, j= 0;
    while(i < arr1.length && j < arr2.length){

        if(arr1[i].id == arr2[j].id){
            var newObj = {...arr1[i] , ...arr2[j]};
            
            newArr.push(newObj);
            i++;
            j++;
        }
        else if(arr1[i].id < arr2[j].id){
            newArr.push(arr1[i]);
            i++;
        }
        else{
            newArr.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length){
        newArr.push(arr1[i]);
            i++;
    }
    while(j < arr2.length){
        newArr.push(arr2[j]);
        j++;
    }
    return newArr;
};