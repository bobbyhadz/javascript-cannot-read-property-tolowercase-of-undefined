// Cannot read properties of undefined (reading 'toLowerCase')

// EXAMPLE 1 - Initialize the variable to an empty string

const someVar = undefined;

const str = someVar || ''; // 👉️ ""

const result = str.toLowerCase();
console.log(result); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if the variable is a string before calling `toLowerCase`

// const str = undefined;

// if (typeof str === 'string') {
//   const result = str.toLowerCase();
//   console.log(result);
// } else {
//   // 👇️ this runs
//   console.log('The variable does NOT store a string');
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Use the ternary operator to solve the error

// const str = undefined;

// const result = typeof str === 'string' ? str.toLowerCase() : '';

// console.log(result); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 4 - Using optional chaining (?.) to solve the error

// const str = undefined;

// const result = str?.toLowerCase() || '';

// console.log(result); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 5 - Solve the error when working with arrays

// const arr = [];

// const result =
//   typeof arr?.[0] === 'string' ? arr[0].toLowerCase() : '';
// console.log(result); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 6 - Solve the error when working with classes

// class Person {
//   // ✅ Initialize to empty string
//   last = '';

//   // ✅ Initialize from parameters
//   constructor(first) {
//     this.first = first;
//   }

//   lowerFirst() {
//     return this.first.toLowerCase();
//   }

//   lowerLast() {
//     return this.last.toLowerCase();
//   }
// }

// const p1 = new Person('John');
// p1.lowerFirst();
// p1.lowerLast();

// ------------------------------------------------------------------

// // Cannot read properties of null (reading 'toLowerCase') in JS

// // EXAMPLE 7 - Initialize the variable to an empty string

// const example = null;

// const str = example || '';

// const result = str.toLowerCase();
// console.log(result); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 8 - Check if the variable is a string before calling `toLowerCase`

// const str = null;

// if (typeof str === 'string') {
//   const result = str.toLowerCase();
//   console.log(result);
// } else {
//   // 👇️ this runs
//   console.log('The variable does NOT store a string');
// }

// ------------------------------------------------------------------

// // EXAMPLE 9 - Use the ternary operator to solve the error

// const str = null;

// const result = typeof str === 'string' ? str.toLowerCase() : '';

// console.log(result); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 10 - Using optional chaining (?.) to solve the error

// const str = null;

// const result = str?.toLowerCase() || '';

// console.log(result); // 👉️ ""
