/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function (nums1,m,nums2,n) {
//     const a1= (nums1.filter((_,index)=> index<m)); O(N)
//     const a2= (nums2.filter((_,index)=> index<n));O(N)
//     if(nums1.length===0 ){ O(m+n)
//         return a2;
//     } else if(nums2.length===0){
//         return a1;
//     }
    
//     const newArr = a1.concat(a2); O(N)
//     newArr.sort();
//    return newArr;
//     Time Complexity: O(N)

// }

//Method 2://逆向双指针，比较两个数组，如果nums2中的tail 大于nums1中的tail则使nums1【m+n-1】为nums2的tail值。Otherwise， 把nums1【m+n-1】为nums1的tail值. 指针向前移动
var merge = function(nums1, m, nums2, n) {
    let len1 = m - 1, len2 = n - 1, len = m + n - 1;
    while(len2>=0){
        if(len1<0||nums1[len1] < nums2[len2]){
            nums1[len--] = nums2[len2--]; 
        }else{
            nums1[len--] = nums1[len1--];
        }
    }
    return nums1;
};


//Method3:
// var merge = function(nums1, m, nums2, n) {
//     nums1.splice(m, nums1.length - 1, ...nums2);
//     nums1.sort((a, b) => a - b);
//     return nums1;
// };




var nums1 = [1,2,3,0,0,0]; 
var m = 3; 
var nums2 = [2,5,6];
var n = 3;
console.log(merge(nums1,m,nums2,n));