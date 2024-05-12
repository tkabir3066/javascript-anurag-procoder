console.log(+true); // 1
console.log(+false); // 0
console.log(+null); //0
console.log(+undefined); //NaN

console.log(typeof null); //object
// In JavaScript null is "nothing". It is supposed to be something that doesn't exist. Unfortunately, in JavaScript, the data type of null is an object. You can consider it a bug in JavaScript that typeof null is an object.

// ======= BigInt ==============//

//BigInt -> new in js

let myNumber = 123;
// console.log(myNumber);

// BigInt first method
let num1 = BigInt(123);
console.log(num1); // 123n

// BigInt second method

let num2 = 123n;
console.log(num2);

let total = num1 + num2;
console.log(total); // 246n

// add BigInt and  other data type
let x = 25n;
let y = 15;
//   let add = x+y; //Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions

// if we think that  grater than this variable we can acquire interger then we use BigInt.

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991// MAX_SAFE_INTEGER can tell how many (big)integer scores we can do. // koto boro integer score amra korte pari setai bojhacce

console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991
