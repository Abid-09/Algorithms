This folder contain solution of problems from leetcode.


//Hash Table for character

var groupAnagrams = function(strs) {
    const map = new Map();

    for (let str of strs) {
        const count = new Array(26).fill(0);

        for (let char of str) {
            count[char.charCodeAt(0) - 97]++;
        }

        // convert array to string key
        const key = count.join('#');

        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }

    return Array.from(map.values());
};

// hash map + max heap

const freq = new Map();
    for (let n of nums) 
    {
        freq.set(n, (freq.get(n) || 0) + 1);
    }
    const heap = [...freq.entries()];
    heap.sort((a, b) => b[1] - a[1]);

    return heap.slice(0, k).map(e => e[0]);
    