function cars(input) {
    let result = [];

    let objCommands = {
        create(name, parent) {
            if (parent == undefined) {
                result.push({name});
            } else {
                let newObj = {};
                let parentObj = result.filter(x => x.name == parent);

                // Object.assign(newObj, parentObj);
                console.log(newObj);
                console.log(parentObj)
                // newObj.name = name;
                result.push(newObj);
                // Object.assign(target, source);
            }
        },
        set(name, key, value) {
            result.forEach(obj => {
                if (obj.name == name) {
                    obj[key] = value;
                }
            });
        },
        print(name) {

        }

    }
    // create <name>
    // create <name> inherits <parentName>
    // set <name> <key> <value>
    // print <name>

    input.forEach(el => {
        let [...arr] = el.split(' ');
        arr = arr.filter(el => el != 'inherit');
        objCommands[arr.shift()](...arr);
    });

    console.log(result);
}

cars([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    // 'set c2 model new',
    // 'print c1',
    // 'print c2'
]);