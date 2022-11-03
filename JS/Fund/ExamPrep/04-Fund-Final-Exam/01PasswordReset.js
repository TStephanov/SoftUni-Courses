function passwordReset(input) {
    let workArray = input.slice();
    let pass = workArray.shift();
    let commandCombo = workArray.shift();

    while (commandCombo !== 'Done') {
        if (commandCombo.includes('TakeOdd')) {
            // TakeOdd
            let newPass = '';
            for (let i = 0; i < pass.length; i++) {
                if (i % 2 === 1) {
                    newPass += pass[i];
                }
            }            
            pass = newPass;
            console.log(pass);

        } else if (commandCombo.includes('Cut')) {
            // Cut {index} {length}
            let [command, index, length] = commandCombo.split(' ');
            index = Number(index);
            length = Number(length);
            let toRemove = pass.substring(index, index + length);
            pass = pass.replace(toRemove, '');

            console.log(pass);

        } else if (commandCombo.includes('Substitute')) {
            // Substitute {substring} {substitute}
            let [command, text, replacement] = commandCombo.split(' ');

            if (pass.includes(text)) {
                pass = pass.split(text).join(replacement);
                
                console.log(pass);

            } else {
                console.log('Nothing to replace!');
            }
        }
        
        commandCombo = workArray.shift();
    }

    console.log(`Your password is: ${pass}`);
}

passwordReset([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd", // icecream::hot::summer
    "Cut 15 3", // icecream::hot::mer
    "Substitute :: -", // icecream-hot-mer
    "Substitute | ^", // "Nothing to replace!"
    "Done"
]);
passwordReset([
    "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"
]);