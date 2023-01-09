// Sum of digits of a given number
let num = Number(prompt("Enter a number:"));
let rem = 0;
let sum = 0;
let temp = 0;
while (num > 0) {
  rem = num % 10;
  sum = sum + rem;
  num = Math.trunc(num / 10);
}
console.log("The sum of the digits of the number" + temp + " is " + sum);
