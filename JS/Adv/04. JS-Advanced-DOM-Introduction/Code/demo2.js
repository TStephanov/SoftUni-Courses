function demo() {
    let value = Number('356');

    if (isNaN(value)) {
        console.log('insert a number');
    } else {
        console.log(value, typeof value);
    }
}

demo();