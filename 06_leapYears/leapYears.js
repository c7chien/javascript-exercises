const leapYears = function(year) {
    let divideFour = year % 4 == 0;
    let divide100or400 = (year % 100 == 0) && (year % 400 != 0);
    return divideFour && !(divide100or400);
    // divide by 4
    // and (divisible by 100 and NOT divisible by 400)
};

console.log(leapYears(604));

// Do not edit below this line
module.exports = leapYears;
