orgArr = ['pizza', 'burger', 'hotdog'];
newArr = new Array;
console.log('The original array is:');
console.log(orgArr)
for(let i = 0; i < orgArr.length; i++){
    newArr.push(orgArr[i]);
}
console.log('The new array is:');
console.log(newArr)
newArr[0] = 'sandwich';
console.log('The original array after updation is:');
console.log(orgArr)
console.log('The new array after updation is:');
console.log(newArr)
