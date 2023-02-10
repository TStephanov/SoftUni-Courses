function carFactory(input) {
    let engineType = '';

    if (input.power <= 90) {
        engineType = 'small';
    } else if (input.power <= 120) {
        engineType = 'normal';
    } else if (input.power <= 200) {
        engineType = 'monster';
    };
    
    let engines = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 },
    }

    let wheels = [];
    let wheelsize = 0;

    if (Math.floor(input.wheelsize) % 2 === 0) {
        wheelsize = Math.floor(input.wheelsize) - 1;
    } else {
        wheelsize = Math.floor(input.wheelsize);
    }
    for (let i = 0; i < 4; i++) {
        wheels.push(wheelsize);
    }

    let car = {
        model: input.model,
        engine: engines[engineType],
        carriage: {
            type: input.carriage,
            color: input.color,
        },
        wheels,
    }

    return car;
}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});