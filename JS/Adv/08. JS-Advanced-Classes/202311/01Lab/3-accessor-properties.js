class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Get existing values
    get area() {
        return Math.PI * (this.radius ** 2);
    }

    // // Update existing values
    // set area(value) {
    //     // Sample why/when set is used - to control set of a value if given criteria is met
    //     if (value < 0) {
    //         throw new Error('Area cannnot be less than 0');
    //     }

    //     this.radius = Math.sqrt(value / Math.PI);
    // }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(value) {
        if (value < 0) {
            throw new Error('Diameter cannot be less than 0');
        }

        this.radius = value / 2;
    }
}

let circle = new Circle(2);
console.log(circle);
console.log(circle.area); // 12.566370614359172

circle.radius = 3;
console.log(circle.area); // 28.274333882308138

// circle.area = 20;
// console.log(circle.area); // 20.000000000000004
// console.log(circle.radius); // 2.5231325220201604

circle.diameter = 10;
console.log(circle.radius);
console.log(circle.diameter);
console.log(circle.area);