function argumentInfo(...arguments) {
    let typesInfo = {};

    Array.from(arguments).forEach(argument => {
        const argumentType = typeof argument;
        console.log(`${argumentType}: ${argument}`);

        if (typesInfo.hasOwnProperty(argumentType) === false) {
            typesInfo[argumentType] = 0;
        }
        typesInfo[argumentType]++;
    });

    Object.entries(typesInfo)
        .sort((a, b) => b[1] - a[1])
        .forEach(([type, count]) => console.log(`${type} = ${count}`));
}

argumentInfo('cat', 42, 53, function () { console.log('Hello world!'); });