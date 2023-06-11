const repeatString = function(inputString, repeatNum) {
    if (repeatNum<0) return 'ERROR';
    let repeatedString = '';
    for (let i = 1; i<=repeatNum; i++) {
        repeatedString += inputString;
    }    
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
