function imitation(input) {
    let workArr = input.slice();
    let toDecrypt = workArr.shift();

    let commands = {
        Move,
        Insert,
        ChangeAll
    }

    while (workArr[0] !== 'Decode') {
        // parse commands
        let [action, p1, p2] = workArr.shift().split('|');

        let command = commands[action];
        toDecrypt = command(toDecrypt, p1, p2);
    }

    // modify encrypted message
    // - create functions for each command
    function Move(string, index) {
        index = Number(index);
        let left = string.slice(0, index);
        let right = string.slice(index);
        let result = right + left;

        return result;
    }

    function Insert(string, index, newPart) {
        index = Number(index);
        let left = string.slice(0, index);
        let right = string.slice(index);
        let result = left + newPart + right;
        
        return result;
    }

    function ChangeAll(string, text, replacement) {
        let result = string.split(text).join(replacement);

        return result;
    }

    // print
    console.log(`The decrypted message is: ${toDecrypt}`);
}

imitation([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]);
console.log('---');
imitation([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]);