"use strict";

// n digit Armstrong Number
/*let num = Number(prompt("Enter a number:"));
const pow = num.toString().length;
let rem = 0;
let arm = 0;
const temp = num;
while (num > 0) {
  rem = num % 10;
  arm = arm + rem ** pow;
  num = parseInt(num / 10);
}
if (arm === temp) {
  console.log(`${temp} is an Armstrong number`);
} else {
  console.log(`${temp} is not an Armstrong number`);
}

// 3 digit Armstrong Number
let num = Number(prompt("Enter a 3 digit number:"));
let rem = 0;
let arm = 0;
const temp = num;
while (num > 0) {
  rem = num % 10;
  arm = arm + rem * rem * rem;
  num = parseInt(num / 10);
}
if (arm === temp) {
  console.log(`${temp} is an Armstrong number`);
} else {
  console.log(`${temp} is not an Armstrong number`);
}

// Find LCM of numbers
let num1 = Number(prompt("Enter the 1st number:"));
let num2 = Number(prompt("Enter the 2nd number:"));
let greater = 0,
  lcm_is = 0;
if (num1 > num2) {
  greater = num1;
} else {
  greater = num2;
}

while (true) {
  if (greater % num1 === 0 && greater % num2 === 0) {
    lcm_is = greater;
    break;
  }
  greater++;
}
console.log("The LCM of " + num1 + " and " + num2 + " is " + lcm_is);

// Print the table of any given number upto any given number
let num = Number(prompt("Enter a number:"));
let end_num = Number(
  prompt("Enter the end number upto which you want to print the table:")
);
for (let i = 1; i <= end_num; i++) {
  console.log(num + " x " + i + " = " + num * i);
}

// Find greater number from three numbers
let num1 = Number(prompt("Enter the 1st number:"));
let num2 = Number(prompt("Enter the 2nd number:"));
let num3 = Number(prompt("Enter the 3rd number:"));
if (num1 > num2 && num1 > num3) {
  console.log(num1 + " is greater");
} else if (num2 > num1 && num2 > num3) {
  console.log(num2 + " is greater");
} else {
  console.log(num3 + " is greater");
}

// Sum of digits of a given number
let num = Number(prompt("Enter a number:"));
let rem = 0;
let sum = 0;
const temp = num;
while (num > 0) {
  rem = num % 10;
  sum = sum + rem;
  num = Math.trunc(num / 10);
}
console.log("The sum of the digits of the number " + temp + " is " + sum);

// Factorial of a given number
let a = Number(prompt("Enter a number:"));
let fact = 1;
for (let i = 1; i <= a; i++) {
  fact *= i;
}
console.log("The factorial of " + a + " is " + fact);


// Sum of digits of a number upto single digit
let num = Number(prompt("Enter a number:"));
const temp = num;
const res = num % 9 === 0 ? 9 : num % 9;
console.log("The sum of digits of " + temp + " is " + res);


// Add array elements
let arr = [1, 2, 3, 4, 15, 10];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log(sum);
*/
