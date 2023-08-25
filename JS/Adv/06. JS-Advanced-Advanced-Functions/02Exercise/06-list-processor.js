function processor(input) {
    let result = [];
    
    let commandObj = {
        add(str) {
            result.push(str);
        },
        remove(str) {
            result = result.filter(el => el != str);
        },
        print() {
            console.log(result.join(','));
        }
    }

    input.forEach(combo => {
        let [command, string] = combo.split(' ');
        commandObj[command](string);
    });
}

processor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
processor(['add pesho', 'add george', 'add peter', 'remove peter','print']);