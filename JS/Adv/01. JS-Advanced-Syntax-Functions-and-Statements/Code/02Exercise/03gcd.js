function commonDivisor(num1, num2) {
    let gcd = Number.MIN_SAFE_INTEGER;
    let largest = Math.max(num1, num2);

    for (let i = 1; i <= largest; i++) {
        let divisorOne = num1 % i;
        let divisorTwo = num2 % i;

        if (divisorOne === 0 && divisorTwo === 0) {
            gcd = i;
        }
    }

    console.log(gcd);
}

// commonDivisor(15, 5); // 5
commonDivisor(2154, 458); // 2