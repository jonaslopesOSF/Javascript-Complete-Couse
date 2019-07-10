const array = [1,2,3];
 
function getMaxNumber(arr){
    let aux = -1000000;
    arr.forEach(num => {
        if (num > aux) {
            aux = num;
        }
    });
    return aux;
}

const array = [1,2,3];

// in this case, the 'this' keyword doesn't matter!
function getMaxNumber(arr){
  return Math.max.apply(null, arr);  
}

getMaxNumber(array) // should return 3