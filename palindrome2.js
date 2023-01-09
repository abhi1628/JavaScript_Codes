org_str = prompt('Enter a string:').toLowerCase();
new_str = org_str.split('').reverse().join('');
if(org_str == new_str){
    console.log('Palindrome');
}
else{
    console.log('Not Palindrome');
}
