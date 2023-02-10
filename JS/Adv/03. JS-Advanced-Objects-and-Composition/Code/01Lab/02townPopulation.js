function townPopulation(input) {
    let city = {};

    for (let line of input) {
        let [name, population] = line.split(' <-> ');
        population = Number(population);

        if (!city[name]) {
            city[name] = 0;
        }

        city[name] += population;
    }

    for (let name of Object.keys(city)) {
        console.log(`${name} : ${city[name]}`);
    }
}

townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);
townPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);