// First example
class Cat{
    constuctor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name}: Meaow!`);
    }
}

let firstCat = new Cat('Navcho');
let secondCat = new Cat('Garry');
firstCat.makeSound();
return;

// console.log(firstCat);
// console.log(secondCat);

// change properties runtime
secondCat.name = 'Mishy';

// Second example
let catNames = [
    'Navcho',
    'Garry',
    'Mishy',
    'Zuza',
    'Sisa'
];

let cats = catNames.map(x => new Cat(x));

cats.forEach(x => x.makeSound());