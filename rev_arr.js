// Reverse Array Elements
let arr = new Array('pizza', 'burger', 'coke');
console.log('The original array elements are:');
console.log(arr);
let revArrElements = new Array;
for (let i = arr.length-1; i >= 0; i--){
     revArrElements.push(arr[i]);
 }
console.log('The reversed array elements are:');
console.log(revArrElements);
