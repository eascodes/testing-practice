import { capitalize, reverseString, calculator } from "./index";

test('capitalizes first character of string', () => {
    expect(capitalize('please capitalize me')).toMatch(/Please capitalize me/);
}); 

test('reverses string', () => {
    expect(reverseString('reverse me')).toMatch(/em esrever/);
});

test('calculator addition', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('calculator subtraction', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
});

test('calculator divide', () => {
    expect(calculator.divide(15, 3)).toBe(5);
});

test('calculator multiply', () => {
    expect(calculator.multiply(10, 3)).toBe(30);
});