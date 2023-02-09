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

export function caesarCipher(str, shift) {

    let arr = str.split('');    
    let numArr = toNumberedArray(arr);
    let shiftedArr = shiftToString(arr, numArr, shift);
    return shiftedArr;
}

function checkForLetter(str) {
    return str.match(/[a-z]/i);
}

function toNumberedArray(arr) {
    let result = [];
    for (let i =0; i < arr.length; i++) {
        if (checkForLetter(arr[i])) {
             let code = arr[i].charCodeAt(0);
             result.push(code);
         } else {
             result.push(arr[i]);
         }
    }
    return result;
}

function shiftToString(origArr, newArr, shift) {
    for (let i=0; i < origArr.length; i++) {
         if (origArr[i] != newArr[i]) {
            newArr[i] = newArr[i] + shift;

            if (newArr[i] > 90 && newArr[i] < 97) {
                let diff = newArr[i] - 90;
                let newVal = 65 + (diff - 1);
                newArr[i] = newVal;
            } else if (newArr[i] > 122) {
                let diff = newArr[i] - 122;
                let newVal = 97 + (diff - 1);
                newArr[i] = newVal;
            }

            newArr[i] = String.fromCharCode(newArr[i]);
         }
     }
    return newArr.join('');
}

//need to wrap z to a
//need to figure out case sensitivity