
// This is a JavaScript coding problem from BFE.dev 
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr,depth){
    return depth ? 
    arr.reduce((acc,current) => {
        return [...acc,...Array.isArray(current) ? flat(current,depth-1) : [current]]
    },[]):arr;
}



const arr = [1, [2], [3, [4]]];

console.log(flat(arr,1));

