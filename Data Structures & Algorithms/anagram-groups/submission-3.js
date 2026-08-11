class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const frequency = new Map();

        const bucket = new Array(26).fill(0);
        for (let str of strs) {
            for (let char of str) {
                const index = char.charCodeAt() - 97;
                bucket[index] ++;
            }

            const key = bucket.join(",");
            const existingBucket = frequency.has(key) ? [...frequency.get(key), str] : [str];
            frequency.set(key, existingBucket);
            bucket.fill(0);
        }
        return [...frequency.values()]
    }
}
