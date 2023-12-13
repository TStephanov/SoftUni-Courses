function result() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            switch (this.constructor.name) {
                case 'Person': return `Person (name: ${this.name}, email: ${this.email})`;
                case 'Teacher': return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
                case 'Student': return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
            }
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

let classes = result();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let p = new Person("Pesho", 'Pesho@pesh.com');
p.toString();
// expect(p.toString()).to.equal('Person (name: Pesho, email: Pesho@pesh.com)');

let t = new Teacher("Ivan", 'ivan@ivan.com', "Graphics");
t.toString();
// expect(t.toString()).to.equal('Teacher (name: Ivan, email: ivan@ivan.com, subject: Graphics)');

let s = new Student('Ibrahim', 'Azimov', 'Telecommuncations');
s.toString();

// // Testing
// class Person {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     toString() {
//         console.log(`Person (name: ${this.name}, email: ${this.email})`);
//     }
// }

// class Teacher extends Person {
//     constructor(name, email, subject) {
//         super(name, email);
//         this.subject = subject;
//     }

//     toString() {
//         console.log(`Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`);
//     }
// }

// class Student extends Person {
//     constructor(name, email, course) {
//         super(name, email);
//         this.course = course;
//     }

//     toString() {
//         console.log(`Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`);
//     }
// }

// let person = new Person("Albert", "Simpson");
// // console.log(person);
// person.toString();
// let teacher = new Teacher('Albert', 'Einstein', 'Master');
// // console.log(teacher);
// teacher.toString();
// let student = new Student('Ivan', 'Masimov', 'Science');
// // console.log(student);
// student.toString();