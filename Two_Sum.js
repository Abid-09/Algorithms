//brute force approach
for(let i=0; i<nums.length; i++)
    {
        for(let j=i+1; j<nums.length; j++)
        {
            if(nums[i]+nums[j]==target)
            {
                return [i,j];
            }
        }

    }


//two pointer approach
const numsWithIndex = nums.map((num, index) => [num, index]);
    numsWithIndex.sort((a, b) => a[0] - b[0]);
    let left = 0, right = nums.length - 1;
    while (left < right) {
        const sum = numsWithIndex[left][0] + numsWithIndex[right][0];
        if (sum === target) {
            return [numsWithIndex[left][1], numsWithIndex[right][1]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];