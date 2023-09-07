function calc(a, b) {
    return a + b;
}

function print(name) {
    return `Hello, my name is ${name}`;
}

// we could export everything: function, object, array, string, etc. 
module.exports = calc;
// module.exports = {
//     calc,
//     print
// }