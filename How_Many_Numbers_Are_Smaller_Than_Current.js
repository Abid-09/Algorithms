var smallerNumbersThanCurrent = function(nums) {
    const sorted = [...nums].sort((a, b) => a - b);
    const indexMap = new Map();

    for (let i = 0; i < sorted.length; i++) {
        if (!indexMap.has(sorted[i])) {
            indexMap.set(sorted[i], i);
        }
    }

    return nums.map(num => indexMap.get(num));
};
