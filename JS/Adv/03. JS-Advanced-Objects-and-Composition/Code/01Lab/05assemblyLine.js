function createAssemblyLine() {
    let car = {
        hasClima: (object) => {
            object.temp = 21;
            object.tempSettings = 21;
            object.adjustTemp = () => {
                if (object.temp > object.tempSettings) {
                    object.temp--;
                } else if (object.temp < object.tempSettings) {
                    object.temp++;
                }
            };
        },
        hasAudio: (object) => {
            object.currentTrack = {
                'name': null,
                'artist': null,
            };
            object.nowPlaying = () => {
                if (object.currentTrack.name !== null && object.currentTrack.artist !== null) {
                    console.log(`Now playing '${object.currentTrack.name}' by ${object.currentTrack.artist}`);
                };
            };
        },
        hasParktronic: (object) => {
            object.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (distance < 0.25) {
                    console.log('Beep! Beep!');
                } else if (distance < 0.5) {
                    console.log('Beep!');
                } else {
                    console.log('');
                }
            };
        },
    }

    return car;
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

// assemblyLine.hasClima(myCar);
// console.log(myCar.temp);
// myCar.tempSettings = 18;
// myCar.adjustTemp();
// console.log(myCar.temp);

// assemblyLine.hasAudio(myCar);
// console.log(myCar);
// myCar.currentTrack = {
//     name: 'Never Gonna Give You Up',
//     artist: 'Rick Astley'
// };
// myCar.nowPlaying();

console.log(myCar);
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

// console.log(myCar);