/**
 * @param {number[]} nums
 * @return {number}
 */
//Dynmaic Planning
//Time Complexity : O(N), Space Complexity: O(1);
var maxSubArray = function(nums) {
    var currentSum =0;
    var MaxiSum = nums[0];
    if(nums.length ===0){
        return null;
    }
    nums.forEach((x)=> {
        currentSum = Math.max(currentSum+x,x); //if previous sum are smaller than current value, then deprecated previous sum
                                                //ELSE, we will keep the previous sum(including the current element) 
        MaxiSum = Math.max(MaxiSum,currentSum); //Compare the history max sum to current sum
    });
    
    return MaxiSum;
};



console.log(maxSubArray([5,4,-1,7,8]));