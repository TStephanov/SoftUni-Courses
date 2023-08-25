function solution() {
    let text = '';

    // const methods = {
    //     append: function (string) {
    //         text += string;
    //     },
    //     removeStart: function (number) {
    //         text = text.substring(number);
    //     },
    //     removeEnd: function (number) {
    //         text = text.substring(0, text.length - number);
    //     },
    //     print: function () {
    //         console.log(text);
    //     }
    // }

    // return methods;

    // VK solution
    function append(string) {
        text += string;
    }
    function removeStart(number) {
        text = text.substring(number);
    }
    function removeEnd(number) {
        text = text.substring(0, text.length - number);
    }
    function print() {
        console.log(text);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}



let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();