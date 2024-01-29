function solution() {
    let string = '';

    function append(newStr) {
        return string += newStr;
    }

    function removeStart(number) {
        return string = string.substring(number);
    }

    function removeEnd(number) {
        return string = string.substring(0, string.length - number);
    }

    function print() {
        console.log(string);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }

    // return {
    //     append(newStr) {
    //         return string += newStr;
    //     },
    //     removeStart(number) {
    //         return string = string.substring(number);
    //     },
    //     removeEnd(number) {
    //         return string = string.substring(0, string.length - number);
    //     },
    //     print() {
    //         console.log(string);
    //     }
    // }
}

let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print(); 

// let firstZeroTest = solution();
// firstZeroTest.append('hello');
// firstZeroTest.append('again');
// firstZeroTest.removeStart(3);
// firstZeroTest.removeEnd(4);
// firstZeroTest.print();
