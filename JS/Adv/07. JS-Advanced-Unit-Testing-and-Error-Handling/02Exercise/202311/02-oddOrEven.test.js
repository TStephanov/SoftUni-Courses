const isOddOrEven = require('./02-oddOrEven.js');
const { assert, expect } = require('chai');

describe('isOddOrEven function tests', () => {
    describe('Negative tests - return undefined', () => {
        it('Return undefined with input -> object', () => {
            expect(isOddOrEven({ 'name': 'test' })).to.equal(undefined);
        });
        it('Return undefined with input -> array', () => {
            expect(isOddOrEven([])).to.equal(undefined);
        });
        it('Return undefined with input -> null', () => {
            expect(isOddOrEven(null)).to.equal(undefined);
        });
        it('Return undefined with input -> undefined', () => {
            expect(isOddOrEven(undefined)).to.equal(undefined);
        });
        it('Return undefined with input -> number', () => {
            expect(isOddOrEven(4)).to.equal(undefined);
        });
    });

    describe('Positive tests - return odd or even', () => {
        it('Return even with input word having even characters count -> \'test\'', () => {
            assert.equal(isOddOrEven('test'), 'even');
        });
        it('Return odd with input word having odd characters count -> \'tests\'', () => {
            assert.equal(isOddOrEven('tests'), 'odd');
        });
    });
});