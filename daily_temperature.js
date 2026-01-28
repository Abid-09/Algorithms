class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const length = temperatures.length;
        const result  = new Array(length).fill(0);

        for (let i = 0; i<length; i++){
            let count = 1;
            let j = i +1;
            while(j<length){
                if(temperatures[j]> temperatures[i]){
                    break;
                }
                j++;
                count++
            }
            count = j===length?0:count;
            result[i] = count
        }
        return result;
    }
}
