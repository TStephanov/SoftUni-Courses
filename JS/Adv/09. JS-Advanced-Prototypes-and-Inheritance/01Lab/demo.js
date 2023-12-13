class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    toString() {
        
    }
}

let person = new Person('Ivan', 'Petrov');
console.log(person.constructor);