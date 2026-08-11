class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequency = new Map();
        for (let num of nums) {
            frequency.set(num, (frequency.get(num) || 0) + 1);
        }

        const bucket = Array.from({ length: nums.length + 1 }, () => []);
        for (let num of nums) {
            if (!frequency.has(num)) continue;

            const freq = frequency.get(num);

            bucket[freq].push(num);

            frequency.delete(num);
        }

        const res = [];
        for (let i = bucket.length - 1; i >= 0; i--) {
            let currBucket = bucket[i];
            if (!currBucket.length) continue;
            let inside = 0;

            while (k > 0 && inside < currBucket.length) {
                res.push(currBucket[inside]);
                k--;
                inside++;
            }

            inside = 0;
        }

        return res;
    }
}
