function heroInventory(input) {
    let heroes = [];

    input.forEach(heroeInfo => {
        let [name, level, items] = heroeInfo.split(' / ');
        level = Number(level);
        let heroe = {
            name,
            level,
            items: []
        };

        if (items !== undefined) {
            items.split(', ').forEach(item => heroe.items.push(item));
        }

        heroes.push(heroe);
    });

    console.log(JSON.stringify(heroes));
}

heroInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
heroInventory(['Jake / 1000 / Gauss, HolidayGrenade']);
heroInventory(['Gaust / 1000']);


[
    { "name": "Isacc", "level": 25, "items": ["Apple", "GravityGun"] },
    { "name": "Derek", "level": 12, "items": ["BarrelVest", "DestructionSword"] },
    { "name": "Hes", "level": 1, "items": ["Desolator", "Sentinel", "Antara"] }
]

[
    '{"name":"Isacc","level":"25","items":["Apple","GravityGun"]}',
    '{"name":"Derek","level":"12","items":["BarrelVest","DestructionSword"]}',
    '{"name":"Hes","level":"1","items":["Desolator","Sentinel","Antara"]}'
]
