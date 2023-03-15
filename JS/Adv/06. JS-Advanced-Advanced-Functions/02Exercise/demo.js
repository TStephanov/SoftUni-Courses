// other sample for rest
function test(...elements) {
    console.log(arguments);
    console.log(Array.from(arguments));
    console.log(elements); // ...rest operator
}

test('cat', 'cat', 42, 35, 36, function () { console.log('Hello world!'); });