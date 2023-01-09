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
