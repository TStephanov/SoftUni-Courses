function createAssemblyLine() {
    return {
        hasClima: (input) => {
            input.temp = 21;
            input.tempSettings = 21;
            input.adjustTemp = () => {
                if (input.temp < input.tempSettings) {
                    input.temp += 1;
                } else if (input.temp > input.tempSettings) {
                    input.temp -= 1;
                }
            }
        },

        hasAudio: (input) => {
            input.currentTrack = {
                name: null,
                artist: null
            },
            input.nowPlaying = () => {
                if (input.currentTrack.name !== null) {
                    console.log(`Now playing '${input.currentTrack.name}' by ${input.currentTrack.artist}`);
                }
            }
        },

        hasParktronic: (input) => {
            input.checkDistance = (distance) => {
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
        }
    };
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
console.log(myCar);
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);