function towns(input) {
    let townsInfo = [];
    let [header1, header2, header3] = input.shift().split(' | ');
    header1 = header1.split('').splice(2).join('');
    header3 = header3.split('').splice(0, header3.length - 2).join('');

    input.forEach(townInfo => {
        let [name, latitude, longitude] = townInfo.split(' | ');
        name = name.split('').splice(2).join('');
        latitude = Number(latitude);
        longitude = Number(longitude.split('').splice(0, longitude.length - 2).join(''));

        let townResultToPush = {
            [header1]: name,
            [header2]: Number(latitude.toFixed(2)),
            [header3]: Number(longitude.toFixed(2))
        };

        townsInfo.push(townResultToPush);
    });

    console.log(JSON.stringify(townsInfo));
}

towns([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);
// console.log(' - - - ');
// towns([
//     '| Town | Latitude | Longitude |',
//     '| Veliko Turnovo | 43.0757 | 25.6172 |',
//     '| Monatevideo | 34.50 | 56.11 |'
// ]);

[
    { "Town": "Sofia", "Latitude": 42.7, "Longitude": 23.33 },
    { "Town": "Beijing", "Latitude": 39.91, "Longitude": 116.36 }
]