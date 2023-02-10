function timeToWalk(stepsCount, stepLengthM, speedKmH) {
    let speedInMPerS = speedKmH / 3.6;
    let stepsLengthInM = stepsCount * stepLengthM;
    let delay = Math.floor(stepsLengthInM / 500) * 60; // 1 minute delay per every 500 meters
    let timeInSeconds = stepsLengthInM / speedInMPerS + delay;

    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = Math.round(timeInSeconds % 60);

    console.log(`${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
}

timeToWalk(4000, 0.60, 5); // 00:32:48
timeToWalk(2564, 0.70, 5.5); // 00:22:35