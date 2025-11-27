function isPrime(n) {

    if(n === 1) {
        console.log(`Only numbers greater than 1 are allowed`)
        return;
    }
    for(let x = 2; x < n; x++) {

        if(n % x === 0) {
            return;
        }
    }
        console.log(`This is a prime number ${n}\n`)
        return;

}

// dynamic non fixed number
let input = 10;

for(let x = 2; x < input; x++) {
    isPrime(x);
}
