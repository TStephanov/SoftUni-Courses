const func = require('./05symmetricArrays.js');
const expect = require('chai').expect;
const assert = require('chai').assert;

describe('Test if an array is symmetrical', () => {
    it('Symmetrical array test', () => {
        const result = func([1, 2, 3, 3, 2, 1]);
        // expect(result).to.equal(true);
        assert.equal(result, true);
    });

    it('Single value array should be equal', () => {
        const result = func([1]);
        // expect(result).to.equal(true);
        assert.equal(result, true);
    });

    it('Empty array shold be equal', () => {
        const result = func([]);
        // expect(result).to.equal(true);
        assert.equal(result, true);
    });

    it('String passed should be false', () => {
        const result = func('string');
        // expect(result).to.equal(false);
        assert.equal(result, false);
    });

    it('Object should be false', () => {
        const result = func({one: 1, two: 2, two: 2, one: 1});
        // expect(result).to.equal(false);
        assert.equal(result, false);
    });

    it('Empty object should be false', () => {
        const result = func({});
        // expect(result).to.equal(false);
        assert.equal(result, false);
    });

    it('"Null" value array should be false', () => {
        const result = func(null);
        // expect(result).to.equal(false);
        assert.equal(result, false);
    });
    
    it('"Undefined" value should be false', () => {
        const result = func(undefined);
        // expect(result).to.equal(false);
        assert.equal(result, false);
    });
});

/**
// function approach
function test() {
    const arr = [
        [1, 2, 3, 3, 2, 1],
        [1],
        [],
        {one: 1, two: 2, two: 2, one: 1},
        {},
        null,
        undefined
    ]

    arr.forEach(element => {
        const result = func(element);
        if (result) {
            // console.log(`${element} => ${result}`);
            return true;
        } else {
            // console.log(`${element} => ${result}`);
            return false;
        }
    });
}

test();
*/