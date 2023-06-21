const fibonacci = function(sequence) {
    if (sequence < 0) return "OOPS";
    if (sequence == 0) return 0;
    let sumArray = [0,1];
    for (let i = 1; i < sequence; i++){
        let lastNum = sumArray[sumArray.length-1];
        let secondNum = sumArray[sumArray.length-2];
        sumArray.push(lastNum+secondNum);
        //console.log(sumArray);
    }
    return sumArray[sumArray.length-1];
};

console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
