function listProcessor(input) {
    let resultArray = [];
    const collection = {
        add,
        remove,
        print
    }

    // input.forEach(element => {
    //     const [command, text] = element.split(' ');
    //     // const action = collection[command];
    //     resultArray = collection[command](text, resultArray);
    // });

    input
        .map(el => el.split(' '))
        .forEach(([command, text]) => {
            // const action = collection[command];
            resultArray = collection[command](text, resultArray);
        });


    function add(string, array) {
        array.push(string);
        return array;
    }

    function remove(string, array) {
        while (array.includes(string)) {
            array.splice(array.indexOf(string), 1);
        }
        return array;
    }

    function print(string, array) {
        console.log(array.join(','));
        return array;
    }
}

// listProcessor(['remove again', 'print']);
// listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);