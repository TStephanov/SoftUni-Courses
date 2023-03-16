function outer() {
    let result = 0;

    function demo() {
        result = 1 + 2;

        return demo;
    }
    
    demo.print = () => {
        return result;
    }

    return demo;
}

const value = outer(); // hold demo function
const value2 = value(); // hold demo func ... By call value() update result to 1+2 then demo func is returned
console.log(value.toString());
console.log(value.print()); // 3 - both prints have result from calling demo.print() - where print is a method of the function demo()
console.log(value2.print()); // 3 - both prints have result from calling demo.print() - where print is a method of the function demo()