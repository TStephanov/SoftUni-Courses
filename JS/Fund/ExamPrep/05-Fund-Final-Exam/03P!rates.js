function pirates(input) {
    let workArr = input.slice();
    let citiesList = new Map();

    // parse input until 'Sail', while storing cities info
    while (workArr[0] !== 'Sail') {
        let [cityName, population, gold] = workArr.shift().split('||');
        
        if (citiesList.has(cityName) === false) {
            citiesList.set(cityName, {
                population: 0,
                gold: 0
            })
        }
        citiesList.get(cityName).population += Number(population);
        citiesList.get(cityName).gold += Number(gold);
    }
    
    // function for each modification command
    let commands = {
        Plunder,
        Prosper
    }
    // collection of functions
    function Plunder(cityName, param1, param2) {
        let kills = param1;
        let stolenGold = Number(param2);
        citiesList.get(cityName).population -= kills;
        citiesList.get(cityName).gold -= stolenGold;

        console.log(`${cityName} plundered! ${stolenGold} gold stolen, ${kills} citizens killed.`);

        if (citiesList.get(cityName).population <= 0 || citiesList.get(cityName).gold <= 0) {
            citiesList.delete(cityName);
            console.log(`${cityName} has been wiped off the map!`);
        }
    }

    function Prosper(cityName, param1) {
        let newGold = Number(param1);

        if (newGold >= 0) {
            citiesList.get(cityName).gold += newGold;
            console.log(`${newGold} gold added to the city treasury. ${cityName} now has ${citiesList.get(cityName).gold} gold.`);
        } else {
            console.log('Gold added cannot be a negative number!');
        }
    }

    workArr.shift();
    while (workArr[0] !== 'End') {
        let [action, cityName, param1, param2] = workArr.shift().split('=>');
        let command = commands[action];
        command(cityName, param1, param2);
    }
    
    if (citiesList.size) {
        console.log(`Ahoy, Captain! There are ${citiesList.size} wealthy settlements to go to:`);
        Array.from(citiesList.entries()).forEach(([cityName, cityInfo]) => {
            console.log(`${cityName} -> Population: ${cityInfo.population} citizens, Gold: ${cityInfo.gold} kg`);
        })
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!')
    }
}

// pirates([
//     "Tortuga||345000||1250",
//     "Santo Domingo||240000||630",
//     "Havana||410000||1100",
//     "Sail",
//     "Plunder=>Tortuga=>75000=>380",
//     "Prosper=>Santo Domingo=>180",
//     "End"
// ]);
pirates([
    "Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"
]);