function heroicInventory(input) {
    let heroes = {};
    let test = [{ "name": "Jake", "level": 1000, "items": ["Gauss", "HolidayGrenade"] }];
    let result = [];

    for (let row of input) {
        // let [name, level, ...items] = row.split(' / ');
        let dataArr = row.split(' / ');
        let formatted = '';

        if (dataArr.length === 1) {
            let name = dataArr[0];            
            heroes.name = name;

        } else if (dataArr.length === 2) {
            let name = dataArr[0];
            let level = Number(dataArr[1]);
            
            heroes.name = name;
            heroes.level = level;

        } else if (dataArr.length === 3) {
            let name = dataArr[0];
            let level = Number(dataArr[1]);
            let itemsArr = dataArr[2].split(', ');
            
            heroes.name = name;
            heroes.level = level;
            heroes.items = [];
    
            itemsArr.forEach(item => heroes.items.push(item));
        }
        
        formatted = JSON.parse(JSON.stringify(heroes));

        result.push(formatted);
    }

    return JSON.stringify(result);
}

console.log(heroicInventory([
    'Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]));
console.log('---------------');
console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']));