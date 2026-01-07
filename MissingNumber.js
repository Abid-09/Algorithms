/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let expectedSum = 0;
    let actualSum = 0;
    for(let i=0; i<=nums.length; i++){
        expectedSum = expectedSum +i;

    }
    for(let i =0; i<nums.length; i++){
        actualSum= actualSum+ nums[i];

    }
    let result = expectedSum-actualSum;
    return result;
    
};