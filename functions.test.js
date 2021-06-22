const { expect, test, describe } = require('@jest/globals')
const { returnTwo, greeting, add, subtract, multiply, divide } = require('./functions');

test('Test should return the number 2', function(){
    expect(returnTwo()).toEqual(2);
});

describe('greeting should greet with Hello and name', function(){
    
test('greeting should greet by name', function(){
    expect(greeting('jill')).toBe('Hello, jill')
});
test('greeting should greet by name', function(){
    expect(greeting('James')).toBe('Hello, James');
});
});

describe('Math is dumb', function(){
    test('add should add 1 and 2', function(){
        expect(add(1, 2)).toEqual(3);
    }),
    test('add should add 5 and 9', function(){
        expect(add(5, 9)).toEqual(14);
    });
});

describe('Subtract happens when you eat', function(){
    test('subtract should minus 15 and 3', function(){
        expect(subtract(15, 3)).toEqual(12);
    });
    test('subtract should minus 25 and 8', function(){
        expect(subtract(25, 8)).toEqual(17);
    })});
describe('Multiply my chicken plz', function(){
    test('multiply should times 4 and 3', function(){
        expect(multiply(4, 3)).toEqual(12);
    });
    test('multiply should times 25 and 5', function(){
        expect(multiply(25, 5)).toBeGreaterThan(100);
    });});
describe('Divide my weight in 2', function(){
    test('divide 15 by 3', function(){
        expect(divide(15, 3)).toBeLessThan(10);
    });
    test('divide 1000 by 5', function(){
        expect(divide(1000, 5)).toBeGreaterThanOrEqual(100)
    });
});