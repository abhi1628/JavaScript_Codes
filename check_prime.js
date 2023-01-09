const num = Number(prompt("Enter a number: "));
let isPrime = true;
if (num === 1) {
    console.log("1 is neither prime nor composite number.");
}
else if (num === 2){
    console.log("2 is the smallest prime number");
}
else if (num > 2) {
    for (let i = 3; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            console.log(Math.trunc(num/i)+' x '+i+' = '+num);
            break;
        }
    }
    if (isPrime) {
        console.log(`${num} is a prime number`);
    } else {
        console.log(`${num} is a not prime number`);
    }
}
else {
    console.log("Enter a positive number");
}
