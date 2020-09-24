// FUNCTION

// function declaration
function add(num1, num2) {
	return num1 + num2;
}
const tambah = add(5, 6);
console.log(tambah);

function sayHello() {
	console.log('Hello, how are you...');
}
sayHello();

// arrow function
const addByFive = (num1) => num1 + 5;
console.log(addByFive(9));

// function expression
const square = function (x) {
	return x * x;
};
console.log(square(9));

// immediately invoked function expression
let squared = ((x) => x * x)(8);
console.log(squared);
