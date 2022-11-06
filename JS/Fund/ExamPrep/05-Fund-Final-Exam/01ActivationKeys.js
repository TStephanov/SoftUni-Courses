function activationKeys(input) {
    let workArr = input.slice();
    // parse key from input
    let key = workArr.shift();

    // create a collection of functions
    let func = {
        Contains,
        Flip,
        Slice
    }
    
    // create function for each possible action
    function Contains(text, substring) {
        if (text.includes(substring)) {
            console.log(`${text} contains ${substring}`);
        } else {
            console.log('Substring not found!');
        }
    }

    function Flip(text, command, startIndex, endIndex) {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);
    
        let leftPart = text.slice(0, startIndex);
        let toModify = text.slice(startIndex, endIndex);
        let rightPart = text.slice(endIndex);
    
        if (command === 'Upper') {
            toModify = toModify.toUpperCase();
        } else if (command === 'Lower') {
            toModify = toModify.toLowerCase();
        }
    
        let result = leftPart + toModify + rightPart;
    
        console.log(result);
        return result;
    }

    function Slice(text, startIndex, endIndex) {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);

        let leftPart = text.substring(0, startIndex);
        let rightPart = text.substring(endIndex);

        let result = leftPart + rightPart;
        
        console.log(result);
        return result;
    }

    // modify key
    while (workArr[0] !== 'Generate') {
        let [action, param1, param2, param3] = workArr.shift().split('>>>');
        let command = func[action];

        if (action === 'Contains') {
            command(key, param1, param2, param3);
        } else {
            key = command(key, param1, param2, param3);
        }
    }

    // print
    console.log(`Your activation key is: ${key}`);

}

// activationKeys([
//     "abcdefghijklmnopqrstuvwxyz",
//     "Slice>>>2>>>6",
//     "Flip>>>Upper>>>3>>>14",
//     "Flip>>>Lower>>>5>>>7",
//     "Contains>>>def",
//     "Contains>>>deF",
//     "Generate"
// ]);
activationKeys([
    "134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"
]);