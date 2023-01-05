//flat()


//Flat Method 1:reduce

const newArr = (arr, depth) => {
    return arr.reduce((previous, current) => {
        return previous.concat(Array.isArray(current) ? newArr(current, depth - 1) : current);

    }, []);
}

//Flat Method 2:

const arr = [1, 2, [3, 4],
    [4, [5, 6]]
];
//flat(Number) => Number means how many arrays will expand, if it is inifity then it will expand all of them
console.log(arr.flat(Infinity));

const fn = (arr, depth = 1) => {
    let storeArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && depth > 0) {
            storeArr.push(...fn(arr[i], depth - 1))
        } else {
            storeArr.push(arr[i]);

        }
    }

    return storeArr;

}
console.log(fn(arr, 1))