// 1.

const a = 'Hello ';
	  b = 'World!!!';

console.log(`${a}, ${b}`);


// 2.


const multiply = (a=1,b=1) => console.log(`${a * b}`);

multiply(3,7);
multiply(6);
multiply();

// 3.			


const average = (...numbers) => console.log(numbers.reduce((a, b) => a + b)/numbers.length);
average(1);
average(1,3);
average(1,3,6,6);

// 4.

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

const average = (...grades) => console.log(grades.reduce((a, b) => a + b)/grades.length);
console.log(average(...grades));

// 5.

const sth = [2, 3, 'Jurekk', false, 'Kowalski'];
const [, , firstname, , lastname] = sth;

console.log(`${firstname} ${lastname}`);
