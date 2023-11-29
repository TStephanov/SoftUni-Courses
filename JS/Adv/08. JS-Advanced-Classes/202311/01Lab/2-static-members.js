// STATIC METHOD & PROPERTY - called from the class (not from the instance of the class)
class Cat {
    static legNumber = 4; // static property
    isHungry = true; // proper way to set a default value, non-dynamic one, e.g. not based on the input

    constructor(name) {
        this.name = name;
        // this.isHungry = true; // other way of setting up a default value
    }

    makeSound() {
        console.log(`${this.name}: Meaow!`);
    }

    // Static method
    static vetCheck(cat) {
        if (cat.isHungry) {
            console.log(`This cat should be fed!`);
        } else {
            console.log(`This cat is fine.`);
        }
    }
}

let cat = new Cat('Navcho');
cat.makeSound();

// Static method
Cat.vetCheck(cat);

// Static property
console.log(Cat.legNumber);