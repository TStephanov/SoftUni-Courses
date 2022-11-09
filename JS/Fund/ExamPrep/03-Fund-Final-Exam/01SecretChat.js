function secretChat(input) {
    let workArr = input.slice();
    let message = workArr.shift();

    let commands = {
        InsertSpace,
        Reverse,
        ChangeAll
    }

    function InsertSpace(string, index) {
        index = Number(index);

        let left = string.substring(0, index);
        let right = string.substring(index);
        let result = left + ' ' + right;
        
        console.log(result);
        return result;
    }

    function Reverse(string, text) {
        let reversed = text.split('').reverse().join('');

        if (string.includes(text)) {
            string = string.replace(text, '') + reversed;
            console.log(string);
        } else {
            console.log('error');
        }

        return string;
    }

    function ChangeAll(string, text, replacement) {
        string = string.split(text).join(replacement);
        
        console.log(string);
        return string;
    }

    while (workArr[0] !== 'Reveal') {
        let [action, param1, param2] = workArr.shift().split(':|:');
        let command = commands[action];

        message = command(message, param1, param2);
    }

    console.log(`You have a new text message: ${message}`);
}

// secretChat([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
// ]);
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);