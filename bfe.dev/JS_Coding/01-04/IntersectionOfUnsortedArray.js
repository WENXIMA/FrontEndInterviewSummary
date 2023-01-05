/**
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @returns {any[]}
 */
// function getIntersection(arr1, arr2) {
//     // your code here
//     arr1.sort();
//     arr2.sort(); //sort both array
//     let newArr = [];
//     let i = 0; //arr1 pointer
//     let j = 0; //arr2 pointer
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] === arr2[j]) {
//             newArr.push(arr1[i]);
//             i++;
//             j++;
//         } else if (arr1[i] > arr2[j]) {
//             j++;
//         } else if (arr1[i] < arr2[j]) {
//             i++;
//         }
//     }
//     return newArr;
// }

const getIntersection = (arr1, arr2) => {
    let a = new Set(arr1);
    let b = new Set(arr2);
    return [...a].filter(a => b.has(a));
}
const arr1 = [1, 100, 200, 8, 8, 8, 3, 6, 100, 10, 10];
const arr2 = [8, 7, 7, 50, 50, 1, 1, 1, 1, 3, 3];
console.log(getIntersection(arr1, arr2));