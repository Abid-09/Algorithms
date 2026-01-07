/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    nums.sort((a, b) => a - b);

    let result = [];
    let prev = 0;

    for (let num of nums) {
        if (num === prev) continue; // skip duplicates

        for (let missing = prev + 1; missing < num; missing++) {
            if (missing >= 1) {
                result.push(missing);
            }
        }
        prev = num;
    }

    // handle missing numbers after last element
    for (let i = prev + 1; i <= nums.length; i++) {
        result.push(i);
    }

    return result;
    
};