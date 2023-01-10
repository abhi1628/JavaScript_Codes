// Array basic operations
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
