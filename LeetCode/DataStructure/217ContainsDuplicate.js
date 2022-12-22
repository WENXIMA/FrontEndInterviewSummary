/**
 * @param {number[]} nums
 * @return {boolean}
 */
//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


//Method 1 Time Complexity O(log N)  space Complexity O(log N)
var containsDuplicate = function (nums) {
    nums.sort((a,b) => {a-b});
    for(let i=0;i<nums.length-1;i++){
        if(nums[i] === nums[i+1]){
            return true;
        }
    }
    return false;
};

//Method 2 Complexity O(n) , space ComplexityO(n)
// var containsDuplicate = function(nums) {
//     let obj = {};
//     for(let i=0;i<nums.length;i++){ //O(n)
//         if( nums[i] in obj){
//             return true
//         }
//         obj[nums[i]] = i;

//     }
//     return false;
// };



console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));