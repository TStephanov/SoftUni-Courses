class Cat {
    static legNumber = 4;
    isHungry = true;

    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name}: Meaow!`);
    }
    // static methods are NOT specific to the current instance, but for the class itself    
    static vetCheck(cat) {
        if (cat.isHungry) {
            console.log('This cat should be fed!');
        } else {
            console.log('This cat is perfect');
        }
    }
}

let cat = new Cat('Garry');


cat.makeSound();

// Static method
// statis method is invoked through the class itself, by calling the instance, e.g. created cat
// they are NOT part of the current instance
Cat.vetCheck(cat);

// Static property
console.log(cat.legNumber); // undefined
console.log(Cat.legNumber); // 4
Cat.makeSound() // could not be invoked as makeSound() is a method of the instance... as static is part of the class