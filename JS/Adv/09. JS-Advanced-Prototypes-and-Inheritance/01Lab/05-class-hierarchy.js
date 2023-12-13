function hierarchy() {

}

class Figure {
    constructor() {
        this.units = 'cm';
    }

    get area() {

    }

    changeUnits(newUnit) {
        this.units = newUnit;
    }

    toString() {
        return `Figures units: ${this.units}`;
    }
}

class Circle extends Figure {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    #unitsConverter = {
        'mm': 10,
        'cm': 1,
        'm': 0.1,
    }

    get area() {
        return Math.PI * (this.radius * this.#unitsConverter[this.units]) * (this.radius * this.#unitsConverter[this.units]);
    }

    toString() {
        return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius * this.#unitsConverter[this.units]}`;
    }
}

class Rectangle extends Figure {
    constructor(width, height, units) {
        super();
        this.width = width;
        this.height = height;
        this.units = units;
    }

    #unitsConverter = {
        'mm': 10,
        'cm': 1,
        'm': 0.1,
    }

    get area() {
        return (this.width * this.#unitsConverter[this.units]) * (this.height * this.#unitsConverter[this.units]);
    }

    toString() {
        let widthToPrint = this.width * this.#unitsConverter[this.units];
        let heightToPrint = this.height * this.#unitsConverter[this.units];

        return `Figures units: ${this.units} Area: ${this.area} - width: ${widthToPrint}, height: ${heightToPrint}`;
    }
}

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40
r.changeUnits('cm');
console.log(r.toString()); //Figures units: cm Area: 12 - width: 3, height: 4
r.changeUnits('m');
console.log(r.toString()); //Figures units: m Area: 0.12 - width: 0.3, height: 0.4


r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4


c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 5