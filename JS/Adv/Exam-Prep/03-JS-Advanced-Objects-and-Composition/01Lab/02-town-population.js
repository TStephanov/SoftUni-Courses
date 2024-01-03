function population(input) {
    let info = {};

    input.forEach(townInfo => {
        let [name, population] = townInfo.split(' <-> ');

        if (!info.hasOwnProperty(name)) {
            info[name] = 0;
        }

        info[name] += Number(population);
    });

    Object.keys(info)
        .forEach(townName => console.log(townName + ' : ' + info[townName]));
}

population([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);
population([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);