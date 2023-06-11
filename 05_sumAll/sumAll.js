const sumAll = function(start,end) {
    let sum = 0;
    if ((start < 0 || end < 0) ||
        (typeof start != "number" || typeof end != "number")){
        return "ERROR";
    }
    if (start > end){
        let start_save = start;
        start = end;
        end = start_save;
    }

    for (let num = start; num <= end; num++) {
        sum += num;
    }
    return sum;
};

console.log(sumAll(10,"7"));
//console.log(typeof 10);

// Do not edit below this line
module.exports = sumAll;
