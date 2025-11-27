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

for(let x = 2; x < 150; x++) {
    isPrime(x);
}
