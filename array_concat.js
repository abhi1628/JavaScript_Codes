//concate two arrays
const evennums = [0,2,4,6,8];
const oddnums = [1,3,5,7,9]
let num = [].concat(evennums, oddnums);
console.log(num);

//concate values into array
const evennums = [0,2,4,6,8];
let num = [].concat(evennums, 10);
console.log(num);
