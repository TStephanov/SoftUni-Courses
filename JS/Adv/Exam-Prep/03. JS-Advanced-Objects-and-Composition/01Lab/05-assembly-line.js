function createAssemblyLine() {
    return (
        hasAudio,
        hasParktronic,
        hasClima
    );
}

function hasClima(input) {
    input.temp = 21;
    input.tempSettings = 21;
    input.adjustTemp = () => {
        if (input.temp < input.tempSettings) {
            input.temp += 1;
        } else if (input.temp > input.tempSettings) {
            input.temp -= 1;
        }
    }

    return input;
}

function hasAudio(input) {

}

function hasParktronic(input) {

}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar);
// console.log(myCar.temp);
// myCar.tempSettings = 18;
// myCar.adjustTemp();
// console.log(myCar.temp);