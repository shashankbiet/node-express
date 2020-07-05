const mathService = require('./math.service');

describe('Arithmetic Test', () => {
    test('2 + 3 = 5', () => {
        expect(mathService.addition(2, 3)).toBe(5);
    });

    test('5 - 6 = -1', () => {
        expect(mathService.subtraction(5, 6)).toBe(-1);
    });

    test('15 - 8 = 7', () => {
        expect(mathService.subtraction(15, 8)).toBe(7);
    });

    test('3 * 4 = 12', () => {
        expect(mathService.multiplication(3, 4)).toBe(12);
    });

    test('8 / 4 = 2', () => {
        expect(mathService.division(8, 4)).toBe(2);
    });
});