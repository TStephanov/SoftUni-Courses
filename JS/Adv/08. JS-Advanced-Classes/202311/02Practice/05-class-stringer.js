class Stringer {
    constructor(str, length) {
        this.innerString = str;
        this.innerLength = length;
    }

    increase(length) {
        // check if increase is invoked with negative value
        if (this.innerLength + length > 0) {
            this.innerLength += length;
        } else {
            this.innerLength = 0;
        }
    }

    decrease(length) {
        if (this.innerLength - length > 0) {
            this.innerLength -= length;
        } else {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.innerString.length > this.innerLength) {
            return this.innerString.slice(0, this.innerLength) + '...';
        } else {
            return this.innerString;
        }
    }
}

let test = new Stringer("Test", 5);

console.log(`this.innerLength = ${test.innerLength}`);
console.log(test.toString()); // Test
test.decrease(3);
console.log(`this.innerLength = ${test.innerLength}`);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(`this.innerLength = ${test.innerLength}`);
console.log(test.toString()); // ...
test.increase(4);
console.log(`this.innerLength = ${test.innerLength}`);
console.log(test.toString()); // Test