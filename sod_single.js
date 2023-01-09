// Sum of digits of a number upto single digit
let num = Number(prompt("Enter a number:"));
const temp = num;
const res = num % 9 === 0 ? 9 : num % 9;
console.log("The sum of digits of " + temp + " is " + res);
