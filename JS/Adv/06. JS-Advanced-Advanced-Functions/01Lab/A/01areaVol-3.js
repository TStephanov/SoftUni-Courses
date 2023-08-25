function calculate(funcArea, funcVolume, input) {
    // Variant 1
    const figures = JSON.parse(input);
    let result = [];

    figures.forEach(figure => {
        const area = funcArea.call(figure);
        const volume = funcVolume.call(figure);

        const currentObj = {
            area,
            volume
        }

        result.push(currentObj);
    });
    
/**
    // Variant 2
    let result = [];

    result = JSON.parse(input).map(figure => (
        {
            area: funcArea.apply(figure),
            volume: funcVolume.apply(figure)
        }
    ));
*/


/**
    // Variant 3
    const result = JSON.parse(input).map(figure => (
        {
            area: funcArea.apply(figure),
            volume: funcVolume.apply(figure)        
        }
 ));
*/

    return result;
}

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

calculate(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
]`);
calculate(area, vol, `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
]`);