export function capitalize(str) {
    let arr = str.split('');
    let firstLetter = arr[0].toUpperCase();
    arr.splice(0,1,firstLetter);
    return arr.join('');
}