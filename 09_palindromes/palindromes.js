const palindromes = function (string) {
    // assign simpleString first since .reverse() is destructive
    const simpleArray = string.toUpperCase().split("").filter(x => x.charCodeAt() >= 48);
    const simpleString = simpleArray.join("");

    const reverseArray = simpleArray.reverse();
    const reverseString = reverseArray.join("");
    
    console.log(simpleString + "__" + reverseString);
    return simpleString == reverseString;

};


// Do not edit below this line
module.exports = palindromes;
