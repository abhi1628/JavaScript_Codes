//insert one element at any given place
const num = [4,5,6,7];
num.splice(0,0,1);
console.log(num);
//insert more than one element at any given place
num.splice(1,0,1,2);
console.log(num);

//----------------------------
//splice(index position, 0 means no deletion, values to be inserted)
//push & unshift methods returned the length of the new array, 
//but the splice method changes the original array. 
//It does not remove any elements, so it returns an empty array.
