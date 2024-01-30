function processor(input) {
    let result = [];
    const commands = {
        add (string) {
            result.push(string);
        },
        remove (string) {
            result = result.filter(x => x !== string);
        },
        print () {
            console.log(result.join(','));
        }
    };

    input.forEach(combo => {
        const [command, string] = combo.split(' ');
        commands[command](string);
    });
}

processor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
// processor(['add pesho', 'add george', 'add peter', 'remove peter','print', 'add george', 'add peter', 'print']);