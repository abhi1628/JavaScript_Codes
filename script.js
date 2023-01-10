"use strict";

//1. n digit Armstrong Number
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

//------------------------------------------------------

//2. 3 digit Armstrong Number
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

//------------------------------------------------------

//3. Find LCM of numbers
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

//-------------------------------------------------------

//4. Print the table of any given number upto any given number
let num = Number(prompt("Enter a number:"));
let end_num = Number(
  prompt("Enter the end number upto which you want to print the table:")
);
for (let i = 1; i <= end_num; i++) {
  console.log(num + " x " + i + " = " + num * i);
}

//------------------------------------------------------

//5. Find greater number from three numbers
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

//------------------------------------------------------

//6. Sum of digits of a given number
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

//------------------------------------------------------

//7. Factorial of a given number
let a = Number(prompt("Enter a number:"));
let fact = 1;
for (let i = 1; i <= a; i++) {
  fact *= i;
}
console.log("The factorial of " + a + " is " + fact);

//------------------------------------------------------

//8. Sum of digits of a number upto single digit
let num = Number(prompt("Enter a number:"));
const temp = num;
const res = num % 9 === 0 ? 9 : num % 9;
console.log("The sum of digits of " + temp + " is " + res);

//------------------------------------------------------

//9. Add array elements
let arr = [1, 2, 3, 4, 15, 10];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log(sum);

//------------------------------------------------------

//10. concate two arrays
const evennums = [0, 2, 4, 6, 8];
const oddnums = [1, 3, 5, 7, 9];
let num = [].concat(evennums, oddnums);
console.log(num);

//concate values into array
const evennums = [0, 2, 4, 6, 8];
let num = [].concat(evennums, 10);
console.log(num);

//------------------------------------------------------

//11. insert one element at last place
const num = [3,4,5,6];
num.push(7);
console.log(num);
//insert more than one element at last place
num.push(8,9,10);
console.log(num);
//finding length of array using push
const num = [3,4,5,6];
const new_num = num.push(7,8,9);
console.log(new_num);

//------------------------------------------------------

//12. insert one element at any given place
const num = [4,5,6,7];
num.splice(0,0,1);
console.log(num);
//insert more than one element at any given place
num.splice(1,0,1,2);
console.log(num);

//splice(index position, 0 means no deletion, values to be inserted)
//push & unshift methods returned the length of the new array, 
//but the splice method changes the original array. 
//It does not remove any elements, so it returns an empty array.

//---------------------------------------------------------

//13. insert one element at zeroth place
const num = [3,4,5,6];
num.unshift(2);
console.log(num);
//insert more than one element at zeroth place
num.unshift(0,1);
console.log(num);
//finding length of array using unshift
const num = [3,4,5,6];
const new_num = num.unshift(0,1,2);
console.log(new_num);

//---------------------------------------------------------

//14. Check if the given number is prime number or not
const num = Number(prompt("Enter a number: "));
let isPrime = true;
if (num === 1) {
    console.log("1 is neither prime nor composite number.");
}
else if (num === 2){
    console.log("2 is the smallest prime number");
}
else if (num > 2) {
    for (let i = 3; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            console.log(Math.trunc(num/i)+' x '+i+' = '+num);
            break;
        }
    }
    if (isPrime) {
        console.log(`${num} is a prime number`);
    } else {
        console.log(`${num} is a not prime number`);
    }
}
else {
    console.log("Enter a positive number");
}

//---------------------------------------------------------

//15. Check if the given number is even or odd
const num = Number(prompt('Enter a number: '));
if(num % 2 == 0) {
   console.log(`${num} is even`);
}
else{
  console.log(`${num} is odd`);
}

//---------------------------------------------------------

//16. Check if the given number is positive or negative
const num = Number(prompt('Enter a number: '));
if(num > 0) {
   console.log(`${num} is positive`);
}
else{
  console.log(`${num} is negative`);
}

//---------------------------------------------------------

//17. Find the factors
const num = prompt('Enter a positive number: ');
console.log(`The factors of ${num} is:`);
// looping through 1 to num
for(let i = 1; i <= num; i++) {
    // check if number is a factor
    if(num % i == 0) {
        console.log(i);
    }
}

//---------------------------------------------------------

//18. Find the Fibonacci Series
const num = Number(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1;
console.log('Fibonacci Series:');
for (let i = 1; i <= num; i++) {
    console.log(n1);
    [n1, n2] = [n2, n1 + n2];
}

//---------------------------------------------------------

//19. Find greater number from three numbers
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

//---------------------------------------------------------

//20. String Palindrome with case sensitivity
org_str = prompt('Enter a string:');
new_str = org_str.split('').reverse().join('');
if(org_str == new_str){
    console.log('Palindrome');
}
else{
    console.log('Not Palindrome');
}

//---------------------------------------------------------

//21. String Palindrome without case sensitivity
org_str = prompt('Enter a string:').toLowerCase();
new_str = org_str.split('').reverse().join('');
if(org_str == new_str){
    console.log('Palindrome');
}
else{
    console.log('Not Palindrome');
}

//---------------------------------------------------------

//22. Swap without using third variable
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable:');
[a, b] = [b, a];
console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

//---------------------------------------------------------

//23. Check if the year is leap year or not
const year = parseInt(prompt('Enter the year:'));
if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
    console.log(`${year} is a leap year`);
}
else{
  console.log(`${year} is not a leap year`);  
}

//---------------------------------------------------------

//24. Reverse the digits of any number
let num = parseInt(prompt('Enter a number:'));
let rem = 0, rev = 0;
const temp = num;
while(num){
    rem = num % 10;
    rev = rev*10 + rem;
    num = Math.trunc(num / 10);
}
  console.log(`The reverse of ${temp} is ${rev}`); 

//---------------------------------------------------------

//25. Array basic operations
 arr = new Array('pizza', 'burger', 'coke');
 console.log('The array elements are:' + arr);
 console.log('The size of array is:'+arr.length)
 console.log('The array elements with their index positions are:')
 for(let i = 0; i < arr.length; i++){
     console.log('index '+i+' has value = '+arr[i]);
 }
// change 1st element of array
 arr[0] = 'hotdog';
 // insert new value in array in last position
 arr.push('icecream', 'sandwiches','frenchfries');
  console.log('The array after 1st updation is:' + arr);
 // replace array element with other element
 // Method 1: 
 arr[arr.indexOf('icecream')] = 'nachos';
 // Method 2:
 for (let x = 0; x < arr.length; x++){
     if(arr[x] === 'sandwiches')
        arr[x] = 'beer';
 }
 console.log('The array after 2nd updation is:' + arr);
// Method 3:
 orgArr = ['hotdog','burger','coke','icecream','sandwiches','frenchfries'];
 newArr = orgArr.splice(orgArr.indexOf('coke'),1,'pizza');
 console.log('The array after 3rd updation is:' + orgArr);

//---------------------------------------------------------

//26. Reverse Array Elements
let arr = new Array('pizza', 'burger', 'coke');
console.log('The original array elements are:');
console.log(arr);
let revArrElements = new Array;
for (let i = arr.length-1; i >= 0; i--){
     revArrElements.push(arr[i]);
 }
console.log('The reversed array elements are:');
console.log(revArrElements);

//---------------------------------------------------------

//27. Splitting the array elements as per even and odd index position and storing the result in two different arrays
let arr = new Array('pizza', 'burger', 'coke', 'beer');
console.log('The original array is:');
console.log(arr);
for (let x = 0; x < arr.length; x++){
    console.log('The position '+x+' has value '+arr[x]);
}
let evenArrElements = new Array;
let oddArrElements = new Array;
for (let i = 0; i < arr.length; i++){
    if (i % 2 === 0){
        evenArrElements.push(arr[i]);
    } 
    else{
        oddArrElements.push(arr[i]);
    }
 }
console.log('The new array with even numbered position elements is:');
console.log(evenArrElements);
console.log('The new array with odd numbered position elements is:');
console.log(oddArrElements);

//---------------------------------------------------------

//28. for...in loop
let arr = new Array('pizza', 'burger', 'coke', 'beer');
console.log('The original array is:');
console.log(arr);
for (let i in arr){
    console.log(arr[i]);
}

//---------------------------------------------------------
*/
