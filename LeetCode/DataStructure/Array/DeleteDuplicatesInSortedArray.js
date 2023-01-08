/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // let i = 0;
    // for (let j = 1; j < nums.length; j++) {
    //     if (nums[i] !== nums[j]) {
    //         nums[i++] = nums[j];
    //     }
    // }
    // return i++;
    let a = new Set(nums);

    return a.length;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));