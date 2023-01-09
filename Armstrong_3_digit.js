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
