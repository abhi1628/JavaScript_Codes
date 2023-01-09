//insert one element at zeroth place
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
