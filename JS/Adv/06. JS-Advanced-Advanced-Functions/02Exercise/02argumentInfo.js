function info(...elements) {
    let objectsInfo = {};

    elements.forEach(element => {
        console.log(`${typeof element}: ${element}`);

        if (objectsInfo.hasOwnProperty(typeof element) === false) {
            objectsInfo[typeof element] = 0;
        }
        objectsInfo[typeof element] += 1;
    });

    Object.entries(objectsInfo)
        .sort((firstEl, secondEl) => secondEl[1] - firstEl[1])
        .forEach(([type, counter]) => console.log(`${type} = ${counter}`));
}

info('cat', 'cat', 42, 35, 36, function () { console.log('Hello world!'); });