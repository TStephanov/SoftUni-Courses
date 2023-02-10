function roadRadar(speed, area) {
    let limits = {
        'residential': 20,
        'city': 50,
        'interstate': 90,
        'motorway': 130
    }

    let violation = '';
    let limit = limits[area];
    let diff = speed - limit;
    
    if (diff <= 0) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        if (diff <= 20) {
            violation = 'speeding';
        } else if (diff <= 40) {
            violation = 'excessive speeding'
        } else {
            violation = 'reckless driving'
        }

        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${violation}`);
    }
}

roadRadar(40, 'city');
// Driving 40 km/h in a 50 zone
roadRadar(21, 'residential');
// The speed is 1 km/h faster than the allowed speed of 20 - speeding
roadRadar(120, 'interstate');
// The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding
roadRadar(200, 'motorway');
// The speed is 70 km/h faster than the allowed speed of 130 - reckless driving