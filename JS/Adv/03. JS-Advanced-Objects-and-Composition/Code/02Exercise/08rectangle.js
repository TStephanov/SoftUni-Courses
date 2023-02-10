function rectangle(width, height, color) {
    let firstLetter = color[0].toUpperCase();
    let restOfWord = color.substring(1);
    let finalWord = firstLetter + restOfWord;

    let shape = {
        width,
        height,
        color: finalWord,
        calcArea() {
            return this.width * this.height;
        }
    }
    
    return shape;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());