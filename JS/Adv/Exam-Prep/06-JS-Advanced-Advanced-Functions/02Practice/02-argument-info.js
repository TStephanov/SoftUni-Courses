function info(...input) {
    let types = {};

    input.forEach(item => {
        console.log(`${typeof item}: ${item}`);
        if (!types.hasOwnProperty(typeof item)) {
            types[typeof item] = 0;
        }
        types[typeof item]++;
    });

    Object.entries(types)
        .sort((a, b) => b[1] - a[1])
        .forEach(([key, value]) => console.log(`${key} = ${value}`));
}

info('cat', 42, function () { console.log('Hello world!'); }, 31);