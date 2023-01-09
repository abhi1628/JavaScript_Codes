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
