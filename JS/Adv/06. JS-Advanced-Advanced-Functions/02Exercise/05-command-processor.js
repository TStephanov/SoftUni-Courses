function solution() {
    let string = '';

    return {
        append(str) {
            string += str;
        },
        removeStart(num) {
            string = string.substring(num);
        },
        removeEnd(num) {
            string = string.substring(0, string.length - num);
        },
        print() {
            console.log(string);
        }
    }
}

let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();