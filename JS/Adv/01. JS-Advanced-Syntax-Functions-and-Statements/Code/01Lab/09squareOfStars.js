function squareOfStars(a = 5) {
    let row = [];
    
    // for (let i = 0; i < a; i++) {
    //     row.push('*');
    // }

    // for (let i = 0; i < a; i++) {
    //     console.log(row.join(' '));
    // }

    for (let i = 0; i < a; i++) {
        console.log('* '.repeat(a));
    }
}

squareOfStars(1);
console.log(' - - - ');
squareOfStars(2);
console.log(' - - - ');
squareOfStars();
console.log(' - - - ');
squareOfStars(7);