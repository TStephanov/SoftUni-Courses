function argumentsInfo(...elements) {
    let resultCount = {};

    Array.from(elements).forEach(element => {
        const typeOfElement = typeof element;
        console.log(`${typeOfElement}: ${element}`);

        if (resultCount.hasOwnProperty(typeOfElement) === false) {
            resultCount[typeOfElement] = 0;
        }
        resultCount[typeOfElement]++;
    });

    Object.entries(resultCount)
        .sort((a, b) => b[1] - a[1]) // 'a' and 'b' are [type, count] elements - b[1] and a[1] is the count from each tuple [type, count]
        .forEach(([type, count]) => {
            console.log(type + ' = ' + count);
            // console.log(`${type} = ${count}`);
        });
}

argumentsInfo('cat', 42, function () { console.log('Hello world!'); });