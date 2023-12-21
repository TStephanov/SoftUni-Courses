function addRemove(input) {
    let result = [];
    let numToAdd = 0;

    input.forEach(command => {
        numToAdd+= 1;
        switch (command) {
            case 'add': {
                result.push(numToAdd);
            };
                break;
            case 'remove': {
                if (result.length !== 0) {
                    result.pop();
                }
            };
                break;
        }
    });

    result.length > 0 ? console.log(result.join('\n')) : console.log('Empty');
}

addRemove(['add', 'add', 'add', 'add']);
addRemove(['add', 'add', 'remove', 'add', 'add']);
addRemove(['remove', 'remove', 'remove']);