/**
 * @param {string} input
 * @returns string
 */
function removeChars(input) {
    // your code here
    let a = new Set(input);
    return [...a].join('');
}
let str = 'cabbaabcca';
console.log(removeChars(str));