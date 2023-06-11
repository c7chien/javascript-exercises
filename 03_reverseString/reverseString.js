const reverseString = function(word) {
    return word.split("").reverse().join("");
    // let reverseWord = "";
    // for (let i = word.length-1; i >=0; i--) {
    //     reverseWord = reverseWord + word[i];
    // }
    // return reverseWord;
};

console.log(reverseString("hello"));
// Do not edit below this line
//module.exports = reverseString;
