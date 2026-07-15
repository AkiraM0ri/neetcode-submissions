class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hashmap = new Map();

        for (let num of nums) {
            hashmap.set(num, (hashmap.get(num) || 0) + 1);
        }

        return [...hashmap]
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map((elm) => elm[0])
            .flat();
    }
}
