// Reverse the digits of any number
let num = parseInt(prompt('Enter a number:'));
let rem = 0, rev = 0;
const temp = num;
while(num){
    rem = num % 10;
    rev = rev*10 + rem;
    num = Math.trunc(num / 10);
}
  console.log(`The reverse of ${temp} is ${rev}`); 
