class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();
    for (let n of nums) 
    {
        freq.set(n, (freq.get(n) || 0) + 1);
    }
    const heap = [...freq.entries()];
    heap.sort((a, b) => b[1] - a[1]);

    return heap.slice(0, k).map(e => e[0]);
        }
    }


