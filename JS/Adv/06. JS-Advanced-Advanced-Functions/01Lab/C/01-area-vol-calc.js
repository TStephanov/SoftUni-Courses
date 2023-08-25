function calc(funcArea, funcVol, coordinates) {
    let result = [];
    let pointsCoord = JSON.parse(coordinates);

    pointsCoord.forEach(pointCoord => {
        let resulArea = area.call(pointCoord);
        let resultVolume = vol.call(pointCoord);
        result.push({
            area: resulArea,
            volume: resultVolume,
        });
    });

    // result = pointsCoord.map(pointCoord => (
    //     {
    //         area: funcArea.call(pointCoord),
    //         volume: funcVol.call(pointCoord)
    //     }
    // ));

    return result;
}

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

calc(area, vol, `[
        {"x":"1","y":"2","z":"10"},
        {"x":"7","y":"7","z":"10"},
        {"x":"5","y":"2","z":"10"}
        ]`
);