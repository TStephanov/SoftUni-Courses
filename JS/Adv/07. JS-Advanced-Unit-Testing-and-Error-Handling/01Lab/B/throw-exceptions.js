function getNumber() {
    let randomNumber = Math.random();

    if (randomNumber < 0.5) {
        // different values might be thrown, new Error, string, object, etc.
        // throw stop function execution as return does for the function where it's invoked
        throw new Error('Your number is too low');
        // RULE OF THUMB: if we'll need stack, circumbstances around error creation, e.g. where, why, we want to
        // log then, use new Error ... If the message will be shown to customer, then throw just errors3t 
        // throw 'Your number is too low';
        // throw {
        //     message: 'Your number is too low',
        //     type: 'SOME_TYPE_ERROR'
        // }
    }

    return Math.floor(randomNumber * 100);

    // code above will throw an error, OR, return Math.floor result
}

// "try" to to this, if not successful, do what's in "catch"
function app() {
    let number;
    try { // try to do this ...
        // place the statement(code) where we expect to have possible error
        number = getNumber(); // if number is returned, ok, if error returned goes to catch
        console.log(number);
    } catch (err) { // ... if not successful, catch this
        console.log(err);
        console.log(err.stack);
    } finally {
        // it's always executed, with try or with catch
        console.log('always goes here');
    }

    console.log(number);
}

app();