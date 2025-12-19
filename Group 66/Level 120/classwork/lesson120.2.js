// Most digits

function findLongest(array){
    let common = array[0]
    
    for (let i = 0; i < array.length; i++) {
        if(array[i].toString().length > common.toString().length){
        common = array[i];
        }
    }
    return common
};