function calc(a, b) {
    return a + b;
}

function print(name) {
    return name;
}

// 1*
module.exports = calc;

// 2*
/**
module.exports = {
    calc,
    print
}
*/