function info(...args) {
    let counter = {};

    args.forEach(arg => {
        console.log(`${typeof arg}: ${arg}`);

        if (!counter.hasOwnProperty(typeof arg)) {
            counter[typeof arg] = 0;
        }
        counter[typeof arg]++;
    });
    
    Object.entries(counter)
        .sort((a, b) => b[1] - a[1])
        .forEach(([key, value]) => console.log(`${key} = ${value}`));
}

// info('cat', 42, function () { console.log('Hello world!'); }, 'dog');
info({ name: 'bob' }, 3.333, 9.999);