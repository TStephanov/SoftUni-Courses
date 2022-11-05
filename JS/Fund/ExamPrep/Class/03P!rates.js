function pirates(input) {
    let workArr = input.slice();
    let cities = {};
    let index = 0;
    let combo = workArr[index]; index++;

    let commands = {
        Plunder,
        Prosper
    }

    // create functions for each action
    function Plunder(p1, p2, p3) {
        let city = p1;
        let kills = Number(p2);
        let goldStolen = Number(p3);

        cities[city].pop -= kills;
        cities[city].gold -= goldStolen;

        console.log(`${city} plundered! ${goldStolen} gold stolen, ${kills} citizens killed.`);

        if (cities[city].pop === 0 || cities[city].gold === 0) {
            delete cities[city];
            console.log(`${city} has been wiped off the map!`);
        }
    }

    function Prosper(p1, p2) {
        let city = p1;
        let goldAdded = Number(p2);

        if (goldAdded > 0) {
            cities[city].gold += goldAdded;
            console.log(`${goldAdded} gold added to the city treasury. ${city} now has ${cities[city].gold} gold.`);
        } else {
            console.log('Gold added cannot be a negative number!');
        }
    }
    
    // parse input until 'Sail' and store cities info
    while (combo !== 'Sail') {
        let [city, pop, gold] = combo.split('||');
        pop = Number(pop);
        gold = Number(gold);

        if (cities.hasOwnProperty(city) === false) {
            cities[city] = {
                pop: 0,
                gold: 0
            }
        }
        cities[city].pop += pop;
        cities[city].gold += gold;

        combo = workArr[index]; index++;
    }

    combo = workArr[index]; index++;

    // modify cities
    while (combo !== 'End') {
        let [action, cityName, p1, p2] = combo.split('=>');
        let command = commands[action];

        command(cityName, p1, p2);

        combo = workArr[index]; index++;
    }

    // print
    if (Object.keys(cities).length > 0) {
        console.log(`Ahoy, Captain! There are ${Object.keys(cities).length} wealthy settlements to go to:`);
        for (let city of Object.keys(cities)) {
            console.log(`${city} -> Population: ${cities[city].pop} citizens, Gold: ${cities[city].gold} kg`);
        }
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}

pirates([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"
]);
// pirates([
//     "Nassau||95000||1000",
//     "San Juan||930000||1250",
//     "Campeche||270000||690",
//     "Port Royal||320000||1000",
//     "Port Royal||100000||2000",
//     "Sail",
//     "Prosper=>Port Royal=>-200",
//     "Plunder=>Nassau=>94000=>750",
//     "Plunder=>Nassau=>1000=>150",
//     "Plunder=>Campeche=>150000=>690",
//     "End"
// ]);