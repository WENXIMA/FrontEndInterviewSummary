/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.


var twoSum = function(nums, target) {
    let object= {};
    for(let i=0;i<nums.length;i++){
        let first = target - nums[i];
        if(first in object){
            return [object[first],i];
        }
        object[nums[i]] = i;
    }
 };

 console.log(twoSum([2,7,11,15],9))