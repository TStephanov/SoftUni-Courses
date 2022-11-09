function needForSpeedIII(input) {
    let workArr = input.slice();
    let numberOfCars = Number(workArr.shift());
    let cars = {};

    for (let i = 0; i < numberOfCars; i++) {
        let [car, mileage, fuel] = workArr.shift().split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);

        cars[car] = {
            mileage,
            fuel
        }
    }

    let collection = {
        Drive,
        Refuel,
        Revert
    }

    function Drive(car, distanceTraveled, fuelToReduce) {
        distanceTraveled = Number(distanceTraveled);
        fuelToReduce = Number(fuelToReduce);
        let sellLimitInKm = 100000;

        if (fuelToReduce > cars[car].fuel) {
            console.log('Not enough fuel to make that ride');
        } else {
            cars[car].fuel -= fuelToReduce;
            cars[car].mileage += distanceTraveled;
            console.log(`${car} driven for ${distanceTraveled} kilometers. ${fuelToReduce} liters of fuel consumed.`);
        }

        if (cars[car].mileage >= sellLimitInKm) {
            console.log(`Time to sell the ${car}!`);
            delete cars[car];
        }
    }
    
    function Refuel(car, toRefuel) {
        toRefuel = Number(toRefuel);        
        let tankCapacity = 75;
        let refill = Math.min(toRefuel, (tankCapacity - cars[car].fuel));

        cars[car].fuel += refill;
        console.log(`${car} refueled with ${refill} liters`);
    }
    
    function Revert(car, mileageToDecrease) {
        mileageToDecrease = Number(mileageToDecrease);
        cars[car].mileage -= mileageToDecrease;

        if (cars[car].mileage < 10000) {
            cars[car].mileage = 10000;
        } else {
            console.log(`${car} mileage decreased by ${mileageToDecrease} kilometers`);
        }
    }
    
    while (workArr[0] !== 'Stop') {
        let [action, car, param1, param2] = workArr.shift().split(' : ');
        let command = collection[action];

        command(car, param1, param2);
    }

    Object.entries(cars).forEach(([car, carInfo]) => {
        console.log(`${car} -> Mileage: ${carInfo.mileage} kms, Fuel in the tank: ${carInfo.fuel} lt.`);
    })
}

// needForSpeedIII([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop'
// ]);
needForSpeedIII([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);