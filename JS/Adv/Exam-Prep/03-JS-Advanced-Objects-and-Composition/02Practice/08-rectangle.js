function rectangle(width, height, rectangleColor) {
    let color = rectangleColor.split('')[0].toUpperCase() + rectangleColor.split('').splice(1).join('');
    console.log(color);

    return {
        width,
        height,
        color,
        calcArea() {
            return this.width * this.height;
        }
    }
}

let rect = rectangle(4, 5, 'blue');
// console.log(rect);
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());