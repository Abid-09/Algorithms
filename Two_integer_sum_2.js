//brute force
class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for(let i =0; i<numbers.length;i++){
            for(let j=i+1; j<numbers.length;j++)
            {
                if(numbers[i]+numbers[j] === target){
                    return [i+1,j+1]
                }
            }

        }
        

        
    }
}

//hash map
class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const map = new Map();
        for(let i =0; i<numbers.length;i++){
            const complement = target - numbers[i];
            if(map.has(complement)){
                return [map.get(complement),i+1]
            }
            map.set(numbers[i],i+1);
        }
    }
}