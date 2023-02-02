export function capitalize(str) {
    let arr = str.split('');
    let firstLetter = arr[0].toUpperCase();
    arr.splice(0,1,firstLetter);
    return arr.join('');
}

export function reverseString(str) {
    let arr = str.split('');
    arr.reverse();
    return arr.join('');
}

export const calculator = {
    add(x, y) {
        return x + y;
    },
    subtract(x, y) {
        return x - y;
    },
    divide(x, y) {
        return x / y;
    },
    multiply(x, y) {
        return x * y;
    }
}