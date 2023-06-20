const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	const summation = array.reduce((total,number) => total + number, 0);
  return summation;
};

const multiply = function(array) {
  const product = array.reduce((total,number) => total * number, 1);
  return product;
};

console.log('multiply ' + multiply([1,2,3,4]));

const power = function(a,b) {
  result = a;
	for (let i = 2; i <= b; i++){
    result = result * a;
  }
  return result;
};

console.log('power ' + power(4,3));

const factorial = function(a) {
	product = 1;
  while (a > 0){
    product = product * a;
    a --;
  }
  return product;
};

console.log('factorial ' + factorial(4));


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

