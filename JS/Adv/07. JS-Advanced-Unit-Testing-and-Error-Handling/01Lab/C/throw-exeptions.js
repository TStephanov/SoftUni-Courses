function getNumber() {
    let randomNumber = Math.random();

    // we might throw whatever we want - e.g. string, object, array
    if (randomNumber < 0.5) {
        // throw new Error('Your number is too low');
        throw {
            message: 'Your number is too low',
            type: 'SOME_ERROR_TYPE'
        }
    }

    return Math.floor(randomNumber * 100);
}

function app() {
    try {
        let number = getNumber();
    } catch (err) {
        console.log(err.message);
    }
}

app();