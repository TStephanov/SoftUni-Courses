function gcd(num1, num2) {
    let divisorsMaxNum = [];
    let divisorsMinNum = [];
    let maxNum = Math.max(num1, num2);
    let minNum = Math.min(num1, num2);

    // Extract all divisors of biggest number
    for (let i = 1; i <= maxNum; i++) {
        if (maxNum % i === 0) {
            divisorsMaxNum.push(i);
        }
    }

    // Extract all divisors of smallest number
    for (let i = 1; i <= minNum; i++) {
        if (minNum % i === 0) {
            divisorsMinNum.push(i);
        }
    }    

    // Compare maxNum and minNum divisros and save matching
    let matchingDivisors = [];

    divisorsMinNum.forEach(divisor => {
        if (divisorsMaxNum.includes(divisor)) {
            matchingDivisors.push(divisor);
        }
    });

    console.log(matchingDivisors[matchingDivisors.length - 1]);
}

gcd(15, 5);
gcd(2154, 458);