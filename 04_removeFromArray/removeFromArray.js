const removeFromArray = function(Array, ...removeList) {
    for (removeElement of removeList){
        Array = Array.filter(element => element !== removeElement);
    }
    return Array;
};

console.log(removeFromArray([1, 2, 3, 4], 2, 3,1));
console.log(1==="1");
// Do not edit below this line
module.exports = removeFromArray;
