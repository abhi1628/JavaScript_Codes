// Print the table of any given number upto any given number
let num = Number(prompt("Enter a number:"));
let end_num = Number(
  prompt("Enter the end number upto which you want to print the table:")
);
for (let i = 1; i <= end_num; i++) {
  console.log(num + " x " + i + " = " + num * i);
}
