function cityToJson(input) {
    let [heading1, heading2, heading3] = input.shift().split(' | ');
    heading1 = heading1.substring(heading1.indexOf(' ') + 1);
    heading3 = heading3.substring(0, heading3.indexOf(' '));
    let cityInfo = {};
    let resultArr = [];


    for (let line of input) {
        let [city, lat, lon] = line.split(' | ');
        city = city.substring(city.indexOf(' ') + 1); // +1 - to exclude blank space itself
        lat = Number(lat);
        lon = Number(lon.substring(0, lon.indexOf(' ')));

        cityInfo = {
            [heading1]: city,
            [heading2]: lat.toFixed(2),
            [heading3]: lon.toFixed(2),
        }

        let {...objToPush} = cityInfo;
        
        resultArr.push(objToPush);
    }

    console.log(JSON.stringify(resultArr));
}

cityToJson([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);
// townsToJson([
//     '| Town | Latitude | Longitude |',
//     '| Veliko Turnovo | 43.0757 | 25.6172 |',
//     '| Monatevideo | 34.50 | 56.11 |'
// ]);