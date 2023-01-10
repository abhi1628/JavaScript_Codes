// Splitting the array elements as per even and odd index position and storing the result in two different arrays
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
