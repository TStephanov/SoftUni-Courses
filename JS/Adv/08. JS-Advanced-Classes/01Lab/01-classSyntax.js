// First example
class Cat{
    isHungry = true; // set default value - use like this, when value doesn't depend on the passed to constructor variables. We are hardcoging that value. Might be inside the constructor, but this way is more cosy :)
    
    constuctor(name) {
        this.name = name;
        // this.isHungry = true; // set default value - better to use that way, when value of that property is passed to the constructor. Changing the value dynamically
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


// instanceOf
console.log(firstCat instanceof Cat); // should be true
console.log(firstCat instanceof Object); // should be true