function circleArea(input) {
    if (typeof input !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    } else {
        let circleArea = Math.PI * Math.pow(input, 2);
        console.log(circleArea.toFixed(2));
    }
}

circleArea(5);
circleArea('name');