function largestNum(a, b, c) {
    let largest = c;

    if (a > b && a > c) {
        largest = a;
    } else if (b > a && b > c) {
        largest = b;
    }

    console.log(`The largest number is ${largest}.`);
}

largestNum(5, -3, 16);
largestNum(-3, -5, -22.5);