const mathEnforcer = require('./04-mathEnforcer.js');
const { assert, expect } = require('chai');

describe('mathEnforcer tests', () => {
    describe('addFive function test', () => {
        it('Return undefined, input parameter -> string', () => {
            assert.equal(mathEnforcer.addFive('word'), undefined);
        });
        it('Return undefined, input parameter -> an object', () => {
            assert.equal(mathEnforcer.addFive({}), undefined);
        });
        it('Return undefined, input parameter -> an array', () => {
            assert.equal(mathEnforcer.addFive([]), undefined);
        });
        it('Return undefined, input parameter -> undefined', () => {
            assert.equal(mathEnforcer.addFive(undefined), undefined);
        });
        it('Return undefined, input parameter -> null', () => {
            assert.equal(mathEnforcer.addFive(null), undefined);
        });
        it('Return result + 5, input parameter -> a number', () => {
            assert.equal(mathEnforcer.addFive(8), 13);
        });
        it('Return result + 5, input parameter -> a negative number', () => {
            assert.equal(mathEnforcer.addFive(-8), -3);
        });
        it('Return result + 5, input parameter -> decimal', () => {
            assert.equal(mathEnforcer.addFive(0.8), 5.8);
        });
    });

    describe('subtractTen function test', () => {
        it('Return undefined, input parameter -> string', () => {
            assert.equal(mathEnforcer.subtractTen('word'), undefined);
        });
        it('Return undefined, input parameter -> an object', () => {
            assert.equal(mathEnforcer.subtractTen({}), undefined);
        });
        it('Return undefined, input parameter -> an array', () => {
            assert.equal(mathEnforcer.subtractTen([]), undefined);
        });
        it('Return undefined, input parameter -> undefined', () => {
            assert.equal(mathEnforcer.subtractTen(undefined), undefined);
        });
        it('Return undefined, input parameter -> null', () => {
            assert.equal(mathEnforcer.subtractTen(null), undefined);
        });
        it('Return result - 10, input parameter -> a number', () => {
            assert.equal(mathEnforcer.subtractTen(8), -2);
        });
        it('Return result - 10, input parameter -> a negative number', () => {
            assert.equal(mathEnforcer.subtractTen(-8), -18);
        });
        it('Return result - 10, input parameter -> decimal', () => {
            assert.equal(mathEnforcer.subtractTen(0.8), -9.2);
        });
    });

    describe('sum function test', () => {
        it('Return undefined, first parameter not a number -> string', () => {
            expect(mathEnforcer.sum('word', 1)).to.equal(undefined);
        });
        it('Return undefined, first parameter not a number -> an object', () => {
            expect(mathEnforcer.sum({}, 1)).to.equal(undefined);

        });
        it('Return undefined, first parameter not a number -> an array', () => {
            expect(mathEnforcer.sum([], 1)).to.equal(undefined);
        });
        it('Return undefined, first parameter not a number -> undefined', () => {
            expect(mathEnforcer.sum(undefined, 1)).to.equal(undefined);
        });
        it('Return undefined, first parameter not a number -> null', () => {
            expect(mathEnforcer.sum(null, 1)).to.equal(undefined);
        });
        it('Return undefined, second parameter not a number -> string', () => {
            expect(mathEnforcer.sum(1, 'word')).to.equal(undefined)
        });
        it('Return undefined, second parameter not a number -> an object', () => {
            expect(mathEnforcer.sum(1, {})).to.equal(undefined)
        });
        it('Return undefined, second parameter not a number -> an array', () => {
            expect(mathEnforcer.sum(1, [])).to.equal(undefined)
        });
        it('Return undefined, second parameter not a number -> undefined', () => {
            expect(mathEnforcer.sum(1, undefined)).to.equal(undefined)
        });
        it('Return undefined, second parameter not a number -> null', () => {
            expect(mathEnforcer.sum(1, null)).to.equal(undefined)
        });
        it('Return sum, first and second parameters -> number', () => {
            expect(mathEnforcer.sum(1, 2)).to.equal(3);
        });
        it('Return sum, first param -> number, second param -> decimal', () => {
            expect(mathEnforcer.sum(1, 2.5)).to.equal(3.5);
        });
        it('Return sum, first param -> deciaml, second param -> number', () => {
            assert.equal(mathEnforcer.sum(1.5, 2), 3.5);
        });
        it('Return sum, first and second parameters -> decimal', () => {
            assert.equal(mathEnforcer.sum(1.5, 2.3), 3.8);
        });
    });    
});