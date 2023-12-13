function classes() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    return {
        Person,
        Teacher
    }
}

// // Testing
// class Person {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
// }

// class Teacher extends Person {
//     constructor(name, email, subject) {
//         super(name, email);
//         this.subject = subject;
//     }
// }

// let person = new Person('Ivan', 'Petrov');
// let teacher = new Teacher('Peter', 'Dubrov', 'Theme');
// console.log(person);
// console.log(teacher.theme);