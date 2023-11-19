const lookupChar = require('./03-charLookup.js');
const { assert, expect } = require('chai');

describe('lookupChar function tests', () => {
    describe('Negative test - returning undefined or \'Incorrect index\'', () => {
        it('First parameter not a string, input -> object', () => {
            expect(lookupChar({}, 3)).to.equal(undefined);
        });
        it('First parameter not a string, input -> array', () => {
            expect(lookupChar([], 3)).to.equal(undefined);
        });
        it('First parameter not a string, input -> undefined', () => {
            expect(lookupChar(undefined, 3)).to.equal(undefined);
        });
        it('First parameter not a string, input -> null', () => {
            expect(lookupChar(null, 3)).to.equal(undefined);
        });
        it('First parameter not a string, input -> number', () => {
            expect(lookupChar(4, 3)).to.equal(undefined);
        });
        it('Second parameter is not a number, input -> object', () => {
            expect(lookupChar('word', {})).to.equal(undefined);
        });
        it('Second parameter is not a number, input -> array', () => {
            expect(lookupChar('word', [])).to.equal(undefined);
        });
        it('Second parameter is not a number, input -> null', () => {
            expect(lookupChar('word', null)).to.equal(undefined);
        });
        it('Second parameter is not a number, input -> decimal', () => {
            expect(lookupChar('word', 1.5)).to.equal(undefined);
        });
        it('String length > index', () => {
            expect(lookupChar('word', 5)).to.equal('Incorrect index');
        });
        it('String length = index', () => {
            expect(lookupChar('word', 4)).to.equal('Incorrect index');
        });
        it('Second parameter index is negative number', () => {
            expect(lookupChar('word', -1)).to.equal('Incorrect index');
        });
    });

    describe('Successfull tests - return a symbol at the valid index', () => {
        it('Return -> \'e\'', () => {
            expect(lookupChar('test', 1)).to.equal('e');
        });
        it('Return fyrst symbol -> \'t\'', () => {
            expect(lookupChar('test', 0)).to.equal('t');
        });
        it('Return last symbol -> \'t\'', () => {
            expect(lookupChar('test', 3)).to.equal('t');
        });
    });
});