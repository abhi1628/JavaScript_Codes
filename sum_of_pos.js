//Sum of Positive Numbers Only
let sum = 0;
let num = parseInt(prompt('Enter a number: '));

while(num > 0) {
    sum += num;
    num = parseInt(prompt('Enter another number greater than zero: '));
}
console.log(`The sum is ${sum}.`);
