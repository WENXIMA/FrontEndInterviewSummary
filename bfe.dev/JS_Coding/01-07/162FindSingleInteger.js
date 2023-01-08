/**
 * @param {number[]} arr
 * @returns number
 */
function findSingle(arr) {
    // your code here
    // ^ means XOR.
    // 0 ^ 0 = 0; 1 ^ 0 = 1; 0 ^ 1 = 1; 1 ^ 1 = 0;
    //If both have or both not have then return false, otherwise return true.
    return arr.reduce((pre, current) => pre ^= current, 0);
}

const arr = [10, 2, 2, 1, 0, 0, 10];
console.log(findSingle(arr));