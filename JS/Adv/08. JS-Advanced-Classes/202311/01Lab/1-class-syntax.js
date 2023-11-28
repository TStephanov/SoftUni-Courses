class Cat {
    isHungry = true; // proper way to set a default value, non-dynamic one, e.g. not based on the input

    constructor(name) {
        this.name = name;
        this.isHungry = true; // other way of setting up a default value
    }

    makeSound() {
        console.log(`${this.name}: Meaow!`);
    }
}

let firstCat = new Cat('Navcho');
let secondCat = new Cat('Garry');

console.log(firstCat);
console.log(secondCat);

// Change properties runtime
secondCat.name = 'Mishy';

// Second example
let catNames = [
    'Navcho',
    'Garry',
    'Mishy',
    'Sisa',
    'Zuza',
];

let cats = catNames.map(x => new Cat(x));
console.log(cats);
cats.forEach(cat => cat.makeSound());

// instanceOf
console.log(firstCat instanceof Cat); // true

class Dog {}
let dog = new Dog();
console.log(dog instanceof Cat); // false