// Factorial of a given number
let a = Number(prompt("Enter a number:"));
let fact = 1;
for (let i = 1; i <= a; i++) {
  fact *= i;
}
console.log("The factorial of " + a + " is " + fact);
