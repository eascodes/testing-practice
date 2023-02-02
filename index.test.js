import { capitalize } from "./index";

test('capitalizes first character of string', () => {
    expect(capitalize('please capitalize me')).toMatch(/Please capitalize me/);
}); 

test('reverses string', () => {
    expect(reverseString('reverse me')).toMatch(/em esrever/);
});