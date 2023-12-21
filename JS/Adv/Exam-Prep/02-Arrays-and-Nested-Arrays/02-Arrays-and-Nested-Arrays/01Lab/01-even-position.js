function even(input) {
    let result = input.filter((el, index) => {
        if (index % 2 === 0) {
            return el;
        } else {
            return false;
        }
    });

    console.log(result.join(' '));
}

even(['20', '30', '40', '50', '60']);
even(['5', '10']);