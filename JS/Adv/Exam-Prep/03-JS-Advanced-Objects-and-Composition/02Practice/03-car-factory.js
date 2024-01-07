function factory(input) {
    let manufacturedCar = {
        model: input.model,
        engine: {},
        carriage: {
            type: input.carriage,
            color: input.color
        },
        wheels: []
    };

    let wheelSize = Math.floor(input.wheelsize);

    if (wheelSize % 2 === 0) {
        wheelSize -= 1;
    }

    for (let i = 0; i < 4; i++) {
        manufacturedCar.wheels.push(wheelSize);
    }

    if (input.power <= 90) {
        manufacturedCar.engine.power = 90;
        manufacturedCar.engine.volume = 1800;
    } else if (input.power <= 120) {
        manufacturedCar.engine.power = 120;
        manufacturedCar.engine.volume = 2400;
    } else {
        manufacturedCar.engine.power = 200;
        manufacturedCar.engine.volume = 3500;
    };

    return manufacturedCar;
}

factory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});
factory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});