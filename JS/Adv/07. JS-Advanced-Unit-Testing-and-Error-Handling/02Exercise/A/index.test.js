const sumOfNumbers = require('./index.js');
const multiply = require('./index-2.js');
const { assert } = require('chai');
const expect = require('chai').expect;

describe('Test of sumOfNumbers', () => {
    it('Successfull test of 2 numbers', () => {
        assert.equal(sumOfNumbers(1, 2), 3);
    });
});

describe('Test multiply two numbers', () => {
    it('Successful multiplication of two numbers', () => {
        // assert.equal(multiply(3, 6), 18);
        expect(multiply(3, 6)).to.equal(18);
    });
});