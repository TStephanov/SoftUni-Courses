const sum = require('./04sumOfNumbers.js');
const assert = require('chai').assert;
const expect = require('chai').expect;


describe('Test of sum function', () => {
    it('Correct sum of array elements is present', () => {
        const resultSum = sum([1, 2, 3, 4, 5]);
        const expSum = 15;
        
        assert.equal(resultSum, expSum);
        // expect(resultSum).to.equal(expSum);
    });

    it('Empty array sum to equal 0', () => {
        const resultSum = sum([]);
        const expSum = 0;

        assert.equal(resultSum, expSum);
        // expect(resultSum).to.equal(expSum);
    });
});