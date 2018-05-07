// 1.

const a = "Hello ";
const b = "World!!!";

console.log(`${a}, ${b}`);

// 2.

const multiply = (a = 1, b = 1) => a * b;

console.log(multiply(3, 7));
console.log(multiply(6));
console.log(multiply());

// 3.

const average = (...numbers) =>
	numbers.reduce((a, b) => a + b) / numbers.length;
console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

// 4.

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

const avg = (...grades) => grades.reduce((a, b) => a + b) / grades.length;
console.log(avg(...grades));

// 5.

const sth = [2, 3, "Jurekk", false, "Kowalski"];
const [, , firstname, , lastname] = sth;

console.log(`${firstname} ${lastname}`);
